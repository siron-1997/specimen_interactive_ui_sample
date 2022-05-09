import { PerspectiveCamera } from "three"

export default function Camera (sizes) {
    const camera = new PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 10000)
    camera.position.set(500, 800, 1500)
    return camera
}