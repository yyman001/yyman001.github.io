// 导入的瓦力图数据管理

var Tiled = Tiled || {};

(function(exports) {

    var Utils = exports.Utils;
    var Collision = exports.Collision;

    var Tileset = exports.Tileset = function(options) {
        for (var key in options) {
            this[key] = options[key];
        }
    };

    var proto = {
        constructor: Tileset,

        map: null,
        data: null,

        init: function() {
            console.log('Tileset:', this)
            var data = this.data;
            this.name = data.name;
            this.image = data.image;
            // 第一个gid
            this.firstGid = data.firstgid;
            // 瓦力图最大索引 (图列 - 1)
            this.tileCount = data.tilecount;
            // 雪碧图 列数
            this.cols = data.columns;
            // 每个瓦力图大小
            this.tileWidth = data.tilewidth;
            this.tileHeight = data.tileheight;
            // 雪碧图大小
            this.imgHeight = data.imageheight;
            this.imgWidth = data.imagewidth;
            // 边距
            this.margin = data.margin;
            // 间隔
            this.spacing = data.spacing;
            this.imagePath = data.image;

            if (data.tileoffset) {
                this.offsetX = data.tileoffset.x || 0;
                this.offsetY = data.tileoffset.y || 0;
            } else {
                this.offsetX = 0;
                this.offsetY = 0;
            }

            // TODO:
            //   data.grid
            //   data.terrains
            //   data.tiles
            //   data.tileproperties
            //   transparent color

            this.initTilesInfo();
        },

        // 雪碧图瓦力块划分计算
        initTilesInfo: function() {
            var map = this.map;

            var first = this.firstGid;
            var count = this.tileCount;
            var col = 0;
            var row = 0;
            for (var i = first; i < first + count; i++) {
                var id = i;
                var idx = i - 1;
                var tileInfo = {
                    id: id,
                    tileset: this.name,
                    x: this.tileWidth * col,
                    y: this.tileHeight * row,
                    w: this.tileWidth,
                    h: this.tileHeight,
                    ox: this.offsetX,
                    oy: this.offsetY + (map.tileHeight - this.tileHeight),
                };
                map.tileTable[id] = tileInfo;
                map.tileList[idx] = tileInfo;
                col++;
                if (col >= this.cols) {
                    col = 0;
                    row++;
                }
            }
        }
    };

    for (var p in proto) {
        Tileset.prototype[p] = proto[p];
    }

}(Tiled));