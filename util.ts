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
}