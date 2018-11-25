标签（空格分隔）： web 打包

---
### 前言
    传统下载压缩包通过后端打包好文件并返回url地址进行下载,目前主流浏览器可以实现在前端下载好文件进行打包

### 优点
- 减轻后端压力
- 减少文件带宽

### 缺点
- 只支持主流浏览器(不支持ie10以下,其实ie兼容都不好)
- 需要额外引入js (前端项目增大)
- 打包图片文件比原来的大(30%以上[base64])

### 核心原理
```js
URL.createObjectURL
```

### 需要使用的js文件
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/) - 下载
- [JSZip.js](https://stuk.github.io/jszip/) - 压缩打包文件

### 实现方式
下载图片方式有几种
 - `ajax` 直接获取buffer
 - `new` Image()
 - `<img/>`
 
   第二种和第三种其实是一样,但第二种不需要在页面上生成dom元素,但可能会存在跨域问题.
 我实现的方式选用`new Image()` 下载图片,通过`canvas`元素把数据转成`Blob`,然后建立一个压缩包对象,把数据`push`进去

1. 获取下载文件
```js
  /**
   * 加载图片资源并转成blob
   * @param {object} object
   * @returns {Promise}
   */
function getImage (object) {
    let that = this
    return new Promise((resolve, reject) => {

      let img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = function () {

        that.createCanvas(img)
        that.canvas.toBlob(function (blob) {

          if (object.blob === null) {
            object.blob = blob
            that.loaded.push(object)
          }

          img.onload = null
          img = null
          resolve(object)
        }, "image/png")
      }

      img.onerror = function (err) {
        img.onerror = null
        img = null
        object.blob = null
        reject(object)
      }

      img.src = object.url

      if (img.complete || img.complete === undefined) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = object.url
      }

    })
  }
```

2. 打包文件,先实例化一个对象
```js
let zip = new JSZip()
```
为什么这里不用`const`?因为我们还需要清空,重置,初始化这个对象.
2.新建一个文件夹对象(可以省略)
```js
// folderName - 文件夹名称
let folder = zip.folder( folderName )
```
3.添加文件到文件夹中
```js
// fileName - 文件名.后缀名 eg: test.png
// fileType - 文件名数据类 eg: file.blob
folder.file( fileName , fileType )
// 如果不使用文件夹
zip.file( fileName , fileType )
```
4.压缩并打包下载文件
```js
// content 打包的文件内容数据
// zipName 压缩包名称 eg: test.zip
zip.generateAsync({type: "blob"}).then((content) => {
      FileSaver.saveAs(content, zipName)
      // 清空文件夹对象
      folder = null
    })
```

上面方法我是封装到一个对象里面的,这样就更加方便了

### 如何使用?
```js
// 1. 引入文件
import { DownClass } from '@/utils/DownClass'

// 2. 实例化对象
 const DownClass = new DownClass()
 
// 3. 传入需要下载的图片对象(指定了格式)
let testObject = {
 lock: false,
 fullName: 'test.png'
 blob: <Blob>,
 url:'http://test.com/test/test.png'
}

// 4.打包下载
// - 单个文件下载 (下载对象格式)
DownClass.downFile(testObject)

// 把上面的对象通过数组方式传入
let fileArray = [testObject...]

// 传入需要下载图片列表数组
DownClass.queue = fileArray

// 触发下载打包(是一个异步进程)
// 通过 `toZipLock` 属性是否已经打包完成
DownClass..toZip(zipName)
```
DownClass.js
```js
/* eslint-disable */
/**
 * DownClass.js
 * 前端打包图片文件
 * @a:wangdongman
 */

const FileSaver = require('file-saver')
const JSZip = require('jszip')

export class DownClass {
  constructor (queue, maxThread) {
    /*
     * 加载队列
     * */
    this.queue = Array.isArray(queue) ? queue : []

    /*
     * 已经加载完队列
     * */
    this.loaded = []

    /*
     * 失败队列
     * */
    this.fail = []

    /*
     * 最大线程 ( 功能暂时未实现 )
     * */
    this.maxThread = maxThread || 3

    /*
     * 画布对象
     * */
    this.canvas = null
    this.ctx = null

    /*
     * 单个文件下载锁定状态
     * */
    this.lock = false

    /*
     * 压缩包锁定状态
     * */
    this.toZipLock = false

    /*
     * 压缩包对象
     * */
    this.zip = new JSZip()
  }

  /**
   *获取图片数据
   * @param img
   * @returns {{base64: string, Blob: *}}
   */
  getImageData (img) {
    let that = this
    if (this.canvas === null) {
      this.canvas = document.createElement("canvas")
    }

    this.canvas.width = img.width;
    this.canvas.height = img.height;

    if (this.ctx === null) {
      this.ctx = this.canvas.getContext("2d")
    }

    this.ctx.drawImage(img, 0, 0, img.width, img.height)
    return {
      base64: that.canvas.toDataURL("image/png"),
      Blob: that.dataURItoBlob(that.canvas.toDataURL("image/png"))
    }

  }

  /**
   * 创建画布对象
   * @param { images } img - 图片对象
   */
  createCanvas (img) {

    if (this.canvas === null) {
      this.canvas = document.createElement("canvas")
    }

    this.canvas.width = img.width;
    this.canvas.height = img.height;

    if (this.ctx === null) {
      this.ctx = this.canvas.getContext("2d")
    }

    this.ctx.drawImage(img, 0, 0, img.width, img.height)
  }

  /**
   * 加载图片资源并转成blob
   * @param {object} object
   * @returns {Promise}
   */
  getImage (object) {
    let that = this
    return new Promise((resolve, reject) => {

      let img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = function () {

        that.createCanvas(img)
        that.canvas.toBlob(function (blob) {

          if (object.blob === null) {
            object.blob = blob
            that.loaded.push(object)
          }

          img.onload = null
          img = null
          resolve(object)
        }, "image/png")
      }

      img.onerror = function (err) {
        img.onerror = null
        img = null
        object.blob = null
        reject(object)
      }

      img.src = object.url

      if (img.complete || img.complete === undefined) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = object.url
      }

    })
  }

  /**
   * 加载队列资源
   * @returns {Promise.<void>}
   */
  async loadImages () {

    if (this.lock) {
      console.warn('locking')
      return
    }

    this.lock = true

    for (let i = 0, len = this.queue.length; i < len; i++) {

      if (this.queue[i].blob !== null) {
        continue
      }

      try {
        let result = await this.getImage(this.queue[i])
        console.log('加载文件:loadImages:', result)
      } catch (err) {
        console.error(err)
      }

    }

    this.lock = false
  }

  /**
   * 静态方法: 保存文件
   * @param {String} name - 文件名
   * @param {Blob} blob - 数据
   */
  static downImagesFile (name, blob) {
    FileSaver.saveAs(blob, `${name}.png`)
  }

  /**
   * 单独下载一个文件
   * @param {Object} object - 下载对象
   * @returns {Promise.<void>}
   */
  async downFile (object) {

    if (Object.prototype.toString.call(object) !== '[object Object]') {
      console.warn('请传入一个对象!')
      return
    }

    if (object.lock) {
      console.log('正在下载')
      return
    }

    object.lock = true
    await this.getImage(object)
    object.lock = false
    console.log('object:', object)
    DownClass.downImagesFile(object.fullName, object.blob)
  }

  /**
   * 打包资源
   * @param {String} [fileName] - 打包文件名
   * @returns {Promise.<void>}
   */
  async toZip (fileName) {
    console.log('this.toZipLock:', this.toZipLock)
    if (this.toZipLock) {
      console.warn('正在带包zip')
      return
    }

    this.toZipLock = true
    let time = new Date().getTime()
    let zipName = fileName + time + '.zip'

    console.log('1.加载文件')
    await this.loadImages()
    console.log('2.打包', this.loaded)

    let folder = this.zip.folder(fileName + time)

    this.loaded.forEach((file) => {
      console.log('file:', file);
      // this.zip.file(`${file.fullName}.png`, file.blob)
      folder.file(`${file.fullName}.png`, file.blob);
    })

    this.zip.generateAsync({type: "blob"}).then((content) => {
      FileSaver.saveAs(content, zipName)
      this.toZipLock = false
      folder = null
    })

  }

  clearImages () {
    this.queue = []
    this.loaded = []
    this.fail = []
    this.zip = new JSZip()
  }

  /**
   * 销毁
   */
  destroy () {
    this.queue = []
    this.loaded = []
    this.fail = []
    this.canvas = null
    this.ctx = null
    this.zip = null
  }

}
```

### 题外话
    h5 有新增的 `download`属性下载, 但不支持`IE系列` 和 `跨域文件`,如果你的需求不用兼容ie和下载文件是同域的话,那么使用这个是最简单的.

### 相关资料    
- [createObjectURL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)
- [JS前端创建html或json文件并浏览器导出下载](https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/)
- [HTML a 标签的 download 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)
- [了解HTML/HTML5中的download属性](https://www.zhangxinxu.com/wordpress/2016/04/know-about-html-download-attribute/)