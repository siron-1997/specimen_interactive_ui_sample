import { AmbientLight, DirectionalLight, DirectionalLightHelper, SpotLight, SpotLightHelper, CameraHelper } from 'three'
// 2048
const mapValue = 2048
const shadowValue = 600

export default function Lights () {
    const ambientLight = new AmbientLight(0xffffff, 0.5)

    const directionalLight = new DirectionalLight(0xffffff, 3),
          directionalLightHelper = new DirectionalLightHelper(directionalLight, 100),
          directionalLightCameraHelper = new CameraHelper(directionalLight.shadow.camera)

    directionalLight.position.set(- 300, 500, 200)
    directionalLight.castShadow = true
    directionalLight.shadow.radius = 10
    directionalLight.shadow.bias = 0.000001
    directionalLight.shadow.normalBias = 0.05
    directionalLight.shadow.mapSize.set(mapValue, mapValue)
    directionalLight.shadow.camera.near = 1
    directionalLight.shadow.camera.far = 10000
    directionalLight.shadow.camera.top = shadowValue
    directionalLight.shadow.camera.left = - shadowValue
    directionalLight.shadow.camera.bottom = - shadowValue
    directionalLight.shadow.camera.right = shadowValue
    directionalLightHelper.visible = true
    directionalLightCameraHelper.visible = true

    const spotLight = new SpotLight('#00ffff', 10),
          spotLightHelper = new SpotLightHelper(spotLight),
          spotLightCameraHelper = new CameraHelper(spotLight.shadow.camera)

    spotLight.castShadow = true
    spotLight.shadow.radius = 10
    spotLight.shadow.normalBias = 0.25
    spotLight.shadow.mapSize.set(mapValue, mapValue)
    spotLight.shadow.camera.near = 1
    spotLight.shadow.camera.far = 10000
    spotLight.position.set(250, 600, 300)
    // spotLight.rotation.set(
    //     45 * Math.Pi / 180,
    //     45 * Math.Pi / 180,
    //     0
    // )
    spotLightHelper.visible = true
    spotLightCameraHelper.visible = true
    spotLight.matrixWorldNeedsUpdate = true
    spotLightHelper.update()
    spotLightCameraHelper.update()

    return [
        ambientLight,
        directionalLight, directionalLightHelper, directionalLightCameraHelper,
        spotLight, spotLightHelper, spotLightCameraHelper
    ]
}