/**
 * 瓦格坐标转屏幕坐标(未包含地图偏移量)
 *
 * @param mapCoord
 * @param TILE_WIDTH_HALF
 * @param TILE_HEIGHT_HALF
 * @return {{x: number, y: number}}
 */
function mapCoordToScreen(mapCoord, TILE_WIDTH_HALF, TILE_HEIGHT_HALF) {
    return {
        x: (mapCoord.x - mapCoord.y) * TILE_WIDTH_HALF,
        y: (mapCoord.x + mapCoord.y) * TILE_HEIGHT_HALF
    }
}

function drawRhombus(Graphics, TILE_WIDTH, TILE_HEIGHT, TILE_WIDTH_HALF, TILE_HEIGHT_HALF, x = 0, y = 0) {
    Graphics.moveTo(TILE_WIDTH_HALF + x, 0 + y)
    Graphics.lineTo(TILE_WIDTH + x, TILE_HEIGHT_HALF + y)
    Graphics.lineTo(TILE_WIDTH_HALF + x, TILE_HEIGHT + y)
    Graphics.lineTo(0 + x, TILE_HEIGHT_HALF + y)
    Graphics.lineTo(TILE_WIDTH_HALF + x, 0 + y)
}

//  画网格
function initTileMap(container, { TILE_WIDTH, TILE_HEIGHT, TILE_WIDTH_HALF, TILE_HEIGHT_HALF, ROW, COL }) {
    console.table({ TILE_WIDTH, TILE_HEIGHT, TILE_WIDTH_HALF, TILE_HEIGHT_HALF, ROW, COL })
 
    let isometricContainer = new PIXI.Container()
    let isometricTileGraphics = new PIXI.Graphics()
    let isometricTileGraphicsBorder = new PIXI.Graphics()

    isometricTileGraphics.lineStyle(1, 0xff0000)
    isometricTileGraphicsBorder.lineStyle(1, 0xff0000)

    let offsetX = []
    for (let u = 0; u < COL; u++) {
        let screenPos = mapCoordToScreen({ x: 0, y: u }, TILE_WIDTH_HALF, TILE_HEIGHT_HALF)
        // TODO 修正绘制起点坐标,当前只适合 等比网格垂直居中
        screenPos.x = screenPos.x + container._width / 2 - TILE_WIDTH_HALF
        offsetX.push(screenPos.x)
        console.log('u:', screenPos)
        for (let v = 0; v < ROW; v++) {
            isometricTileGraphics.drawRect(screenPos.x, screenPos.y, TILE_WIDTH, TILE_HEIGHT)
            drawRhombus(isometricTileGraphicsBorder, TILE_WIDTH, TILE_HEIGHT, TILE_WIDTH_HALF, TILE_HEIGHT_HALF, screenPos.x, screenPos.y)
            screenPos.x += TILE_WIDTH_HALF
            screenPos.y += TILE_HEIGHT_HALF
        }
    }

    console.log('offsetX:',offsetX)

    isometricTileGraphics.endFill()
    isometricTileGraphicsBorder.endFill()
    isometricContainer.addChild(isometricTileGraphicsBorder)
    isometricContainer.addChild(isometricTileGraphics)


    container.addChild(isometricContainer)
    
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xDE3249, 0.3);
    graphics.drawRect(0, 0, container.width, container.height);
    graphics.endFill();
    container.addChild(graphics);
 
    window.container = container
    window.isometricContainer = isometricContainer
    // !! 修正了非等比网格居中对其
    isometricContainer.x = 0 - offsetX.pop()
    
}