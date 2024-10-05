// Add your code here
//% weight=100 color=#0fbc11 icon=""
namespace easyTileRect {

    //% block="Create Tilemap Rectangle start (Vector2): $start end (Vector2): $end topLeft-topRight-bottomLeft-bottomRight: $topLeft $topRight $bottomLeft $bottomRight top-bottom-left-right: $top $bottom $left $right fill: $fill wall: $wall"
    //% bottomRight.shadow=tileset_tile_picker
    //% bottomRight.decompileIndirectFixedInstances=true
    //% bottomLeft.shadow=tileset_tile_picker
    //% bottomLeft.decompileIndirectFixedInstances=true
    //% topLeft.shadow=tileset_tile_picker
    //% topLeft.decompileIndirectFixedInstances=true
    //% topRight.shadow=tileset_tile_picker
    //% topRight.decompileIndirectFixedInstances=true
    //% top.shadow=tileset_tile_picker
    //% top.decompileIndirectFixedInstances=true
    //% left.shadow=tileset_tile_picker
    //% left.decompileIndirectFixedInstances=true
    //% bottom.shadow=tileset_tile_picker
    //% bottom.decompileIndirectFixedInstances=true
    //% right.shadow=tileset_tile_picker
    //% right.decompileIndirectFixedInstances=true
    //% fill.shadow=tileset_tile_picker
    //% fill.decompileIndirectFixedInstances=true
    export function createRect(start: vectors.Vector2, end: vectors.Vector2, topLeft: Image, topRight: Image, bottomLeft: Image, bottomRight: Image, top: Image, bottom: Image, left: Image, right: Image, fill: Image, wall: boolean) {
        let size = (end.subtract(start)).clone()
        let width = size.x
        let height = size.y
        let px, py, p;
        if (!((width == 0) && (height == 0))) {
            for (let x = 0; x <= width; x++) {
                for (let y = 0; y <= height; y++) {
                    px = x + start.x
                    py = y + start.y
                    p = new vectors.Vector2(px, py)
                    tiles.setTileAt(vectors.vectorAsTilepos(p), fill)
                    tiles.setWallAt(vectors.vectorAsTilepos(p), wall)
                }
            }
            for (let x = 0; x <= width; x++) {
                px = x + start.x
                py = end.y
                p = new vectors.Vector2(px, py)
                tiles.setTileAt(vectors.vectorAsTilepos(p), bottom)
            }
            for (let y = 0; y <= height; y++) {
                px = start.x
                py = y + start.y
                p = new vectors.Vector2(px, py)
                tiles.setTileAt(vectors.vectorAsTilepos(p), left)
            }
            for (let y = 0; y <= height; y++) {
                px = end.x
                py = y + start.y
                p = new vectors.Vector2(px, py)
                tiles.setTileAt(vectors.vectorAsTilepos(p), right)
            }
            for (let x = 0; x <= width; x++) {
                px = x + start.x
                py = start.y
                p = new vectors.Vector2(px, py)
                tiles.setTileAt(vectors.vectorAsTilepos(p), top)
            }
            let p0 = new vectors.Vector2(start.x, end.y)
            let p1 = new vectors.Vector2(end.x, start.y)
            tiles.setTileAt(vectors.vectorAsTilepos(start), topLeft)
            tiles.setTileAt(vectors.vectorAsTilepos(end), bottomRight)
            tiles.setTileAt(vectors.vectorAsTilepos(p0), bottomLeft)
            tiles.setTileAt(vectors.vectorAsTilepos(p1), topRight)
        } else {
            tiles.setTileAt(vectors.vectorAsTilepos(start), top)
        }
    }

}