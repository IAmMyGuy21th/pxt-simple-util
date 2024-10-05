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

    
}