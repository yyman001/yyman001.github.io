var Tiled = Tiled || {};

(function(exports) {

    var Utils = exports.Utils;
    var Collision = exports.Collision;
    var Tileset = exports.Tileset;
    var TileLayer = exports.TileLayer;
    var OrthogonalTileLayer = exports.OrthogonalTileLayer;
    var IsometricTileLayer = exports.IsometricTileLayer;
    var StaggeredTileLayer = exports.StaggeredTileLayer;
    var ObjectLayer = exports.ObjectLayer;

    var Map = exports.Map = function(options) {
        for (var key in options) {
            this[key] = options[key];
        }
        this.init();
    };

    var proto = {
        constructor: Map,

        id: null,

        data: null,

        viewWidth: 960,
        viewHeight: 640,

        width: 0,
        height: 0,
        cols: 0,
        rows: 0,
        tileWidth: 0,
        tileHeight: 0,
        tileSide: 0,

        extX: 0,
        extY: 0,

        init: function() {
            var data = this.data;
            this.cols = data.width;
            this.rows = data.height;
            this.tileWidth = data.tilewidth;
            this.tileHeight = data.tileheight;
            // 地图类型
            this.viewType = data.orientation;

            // 90deg 正交
            if (this.viewType === "orthogonal") {
                this.width = this.tileWidth * this.cols;
                this.height = this.tileHeight * this.rows;
            // 45deg
            } else if (this.viewType === "isometric") {
                this.gridSize = Math.max(this.cols, this.rows);
                this.width = this.tileWidth * this.gridSize;
                this.height = this.tileHeight * this.gridSize;
            }

            var Me = this;

            this.initTilesets(data);
            this.initLayers(data);
        },

       // # 填充瓦力图数据
        initTilesets: function(data) {
            var Me = this;
            this.tilesetTable = {};
            this.tilesetList = [];
            this.tileTable = {};
            this.tileList = [];

            var extX = 0;
            var extY = 0;

            data.tilesets.forEach(function(tilesetData, idx) {
                var tileset = new Tileset({
                    map: Me,
                    data: tilesetData,
                });
                tileset.init();

                Me.tilesetTable[tileset.name] = tileset;
                Me.tilesetList[idx] = tileset;
                // 计算每个挖力图 坐标和偏移量
                var dw = Math.abs(tileset.tileWidth - Me.tileWidth);
                var dh = Math.abs(tileset.tileHeight - Me.tileHeight);
                extX = Math.max(extX, dw + Math.abs(tileset.offsetX));
                extY = Math.max(extY, dh + Math.abs(tileset.offsetY));
            });

            this.extX = this.extX || extX;
            this.extY = this.extY || extY;
        },
        // 初始化图层数据
        initLayers: function(data) {
          console.log('initLayers:', this)
          var Me = this;
            this.layers = [];

            this.tileLayers = [];
            this.objectLayers = [];
            this.imageLayers = [];
            this.layerGroups = [];

            data.layers.forEach(function(layerData, idx) {
                var layer;
                // 图层
                if (layerData.type === "tilelayer") {
                  // 90deg
                    if (Me.viewType === "orthogonal") {
                        layer = new OrthogonalTileLayer({
                            map: Me,
                            data: layerData,
                            tileSide: Me.tileSide,
                            extX: Me.extX,
                            extY: Me.extY,
                        });
                     // 45deg
                    } else if (Me.viewType === "isometric") {
                        layer = new IsometricTileLayer({
                            map: Me,
                            data: layerData,
                            tileSide: Me.tileSide,
                            extX: Me.extX,
                            extY: Me.extY,
                        });
                     // 交错
                    } else if (Me.viewType === "staggered") {
                        layer = new StaggeredTileLayer({
                            map: Me,
                            data: layerData,
                            tileSide: Me.tileSide,
                            extX: Me.extX,
                            extY: Me.extY,
                        });
                    }

                    if (layer) {
                        Me.tileLayers.push(layer);
                    }
                // 对象层
                } else if (layerData.type === "objectgroup") {
                    layer = new ObjectLayer({
                        map: Me,
                        data: layerData
                    });
                    Me.objectLayers.push(layer);
                }
                // TODO
                // Image Layer
                // Layer Group

                if (layer) {
                    Me.layers.push(layer);
                }
            });
        },

        getTileLayerAt: function(index) {
            return this.tileLayers[index] || null;
        },

        getTileLayer: function(name) {
            for (var i = 0; i < this.tileLayers.length; i++) {
                var layer = this.tileLayers[i];
                if (layer.name === name) {
                    return layer;
                }
            }
            return null;
        },

        getObjectLayer: function(name) {
            for (var i = 0; i < this.objectLayers.length; i++) {
                var layer = this.objectLayers[i];
                if (layer.name === name) {
                    return layer;
                }
            }
            return null;
        },
    };

    for (var p in proto) {
        Map.prototype[p] = proto[p];
    }

}(Tiled));