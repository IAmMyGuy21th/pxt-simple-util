// Add your code here

/**
 * Custom blocks
 */
//% weight=100 color=#ff9900 icon=""
namespace util {
    /**
     * TODO: Runs code inside (like a for loop) in parallel.
     * @param handler code to be executed in parallel
     */
    //% block="Run In Parallel"
    //% draggableParameters="reporter"
    //% blockId=runparallel
    //% handlerStatement=1
    //% image.shadow=screen_image_picker
    export function runInParallel(handler: () => void) {
        control.runInParallel(handler)
    }

    /**
     * TODO: puts a sprite specified layers behind or in front of othersprite
     * @param sprite sprite #1
     * @param othersprite sprite #2
     * @param layer how many layers in front or behind
     */
    //% block="Put $sprite $layer layers in front of $othersprite"
    export function putSpriteLayerOfOthersprite(sprite: Sprite, othersprite: Sprite, layer: number) {
        sprite.z = othersprite.z + layer
    }


    //% block="All instances of tile: $tile return first instance?: $first"
    //% tile.shadow=tileset_tile_picker
    //% tile.decompileIndirectFixedInstances=true
    export function instancesOfTile(tile: Image, first: boolean) {
        let positions = []
        let pos = vectors.vectorZero().clone()
        for (let x = 0; x < tiles.tilemapColumns(); x++) {
            for (let y = 0; y < tiles.tilemapRows(); y++) {
                pos.x = x
                pos.y = y
                if (tiles.tileAtLocationEquals(vectors.vectorAsTilepos(pos), tile)) {
                    positions.push(vectors.vectorAsTilepos(pos))
                }
            }
        }
        return (first ? positions[0] : positions)
    }
}