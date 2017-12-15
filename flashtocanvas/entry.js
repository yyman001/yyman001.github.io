/**
 * Created by lenovo on 2017/12/15.
 */
import ResizeCanvas from './rCanvas';

console.log(`es 编译测试`);

var canvas = new ResizeCanvas({
	el:'#mainView',
	w:800,
	h:1200,
	minRaio:0.615
});

console.log('canvas:', canvas);