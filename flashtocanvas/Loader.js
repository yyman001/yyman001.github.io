function Loader() {
    this._loader = new createjs.LoadQueue(false);
}
Loader.prototype = {
    constructor: Loader,
    loadFile:function(data){
        this._loader.loadFile(data)
        return this;
    },
    loadManifest:function(data){
        this._loader.loadManifest(data)
        return this;
    },
    fileload: function (fn) {
        this._loader.addEventListener('fileload', function (evt) {
            if (typeof fn === 'function') {
                fn(evt);
            }
        })
        return this;
    },
    complete: function (fn) {
        this._loader.addEventListener("complete", function (evt) {
            if (typeof fn === 'function') {
                fn(evt);
            }
        });
        return this;
    }
}