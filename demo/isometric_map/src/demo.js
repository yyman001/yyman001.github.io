let x = 50
let y = 200
let map_width = 554
let map_height = 278
let tiled_width = 60
let tiled_height = 30


function ol_to_uv(x, y) {
    console.log(`输入x:${x},y:${y}`)
    let tilewidth = tiled_width;
    let tilehigh = tiled_height;
    let mapOrginX = x + map_width / 2;
    let mapOrginy = y + map_height;
    //O为地图的原点，A是要求的点，oa向量的值
    let OA_x = x - mapOrginX;
    let OA_y = y - mapOrginy;
    console.log(`mapOrginX:${mapOrginX}, mapOrginy:${mapOrginy}`)
    console.log(`OA_x:${OA_x}, OA_y:${OA_y}`)
    //假设以地图的原点为初始坐标（正上方那个点），对应的所示点的坐标值为m,n
    //将地图坐标(m,n)转为标准坐标，则有：
    //(x,y)-(mapOrginX,mapOrginy)=m(tilewidth/2,-tilehigh/2)+n(-tilewidth/2,-tilehigh/2)
    //因此m=(OA_x/(tilewidth/2)+OA_y/(-tilehigh/2)/2=OA_x/tilewidth-OA_y/tilehigh
    //n=(OA_y/(-tilehigh/2)-OA_x/(tilewidth/2))/2=-(OA_y/tilehigh+OA_x/tilewidth)
    let m = OA_x / tilewidth - OA_y / tilehigh;
    let n = -(OA_y / tilehigh + OA_x / tilewidth);
    if (m < 0) m = 0;
    if (n < 0) n = 0;
    if (m > map_width - 1) {
        m = map_width - 1;
    }
    if (n > map_height - 1) {
        n = map_height - 1;
    }
    console.log('mv:', (x - map_width / 2) / tiled_height - (y - map_height) / tiled_width)
    console.log('mu:', -(x - map_width / 2) / tiled_height - (y - map_height) / tiled_width)
    return {
        m,
        n
    }
}

console.log('屏幕坐标转瓦片坐标:', ol_to_uv(x, 278 - y))


function getPixelPoint(_u, _v, _tw, _th, _count) {
    var org_x = 0;
    var org_y = _count * _th / 2;
    var x = org_x + _tw / 2 * (_u + _v);
    var y = org_y + _th / 2 * (_u - _v);
    return {
        x,
        y
    };

}

//   let u = 0
//   let v = 0
//   console.log('getPixelPoint:', getPixelPoint(u, v,tiled_width,tiled_height, 10))
