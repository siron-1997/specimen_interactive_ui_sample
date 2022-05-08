import { WebGL1Renderer, PCFSoftShadowMap } from "three";

export default function Renderer (canvas, sizes) {
    const renderer = new WebGL1Renderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(sizes.pixelRatio, 2))
    renderer.setClearColor('#4b0082')
    renderer.physicallyCorrectLights = true
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFSoftShadowMap

    return renderer
}