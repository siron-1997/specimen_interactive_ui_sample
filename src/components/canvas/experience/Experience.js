import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { resize, mouseMove } from './utils'
import { Sizes, Camera, Lights, Floor, Models, Navigations, Renderer, Raycast } from './modules'

export default function Experience (canvas) {
    const scene = new THREE.Scene()
    // サイズ
    const sizes = Sizes()
    // カメラ
    const camera = Camera(sizes)
    // ライト
    const [
        ambientLight,
        directionalLight,
        directionalLightHelper,
        directionalLightCameraHelper,
        spotLight,
        spotLightHelper,
        spotLightCameraHelper
    ] = Lights()
    // 床
    const floor = Floor()
    // モデル
    const models = Models()
    // ナビゲーション
    const navigations = Navigations()
    // 霧
    const fog = new THREE.Fog('#4b0082', 300, 5000)
    scene.fog = fog
    // マウス
    const mouse = new THREE.Vector2()
    mouseMove(mouse, sizes)
    // シーン追加
    scene.add(
        camera,
        ambientLight,
        directionalLight,
        directionalLightHelper,
        directionalLightCameraHelper,
        spotLight,
        spotLightHelper,
        spotLightCameraHelper,
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
    // レイキャスター
    const raycaster = Raycast(mouse, camera, models)
    // アニメーション
    const animate = () => {
        controls.update()
        renderer.render(scene, camera)
        window.requestAnimationFrame(animate)
    }
    animate()
}