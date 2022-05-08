import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import resize from './modules/resize'
import { Sizes, Camera, Lights, Floor, Models, Renderer } from './modules'

export default function Experience (canvas) {
    const scene = new THREE.Scene()
    // サイズ
    const sizes = Sizes()
    // カメラ
    const camera = Camera(sizes)
    // ライト
    const [
        ambientLight,
        directionalLight, directionalLightHelper, directionalLightCameraHelper,
        spotLight, spotLightHelper, spotLightCameraHelper
    ] = Lights()
    // 床
    const floor = Floor()
    // モデル
    const models = Models()
    // 霧
    const fog = new THREE.Fog('#4b0082', 300, 5000)
    scene.fog = fog
    // シーン追加
    scene.add(
        camera,
        ambientLight,
        directionalLight, directionalLight.shadow.camera, directionalLightHelper, directionalLightCameraHelper,
        spotLight, spotLightHelper, spotLightCameraHelper,
        floor,
        models
    )
    // レンダラー
    const renderer = Renderer(canvas, sizes)
    // コントローラー
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    // リサイズ
    resize(sizes, camera, renderer)
    // アニメーション
    const animate = () => {
        controls.update()
        renderer.render(scene, camera)
        window.requestAnimationFrame(animate)
    }
    animate()
}