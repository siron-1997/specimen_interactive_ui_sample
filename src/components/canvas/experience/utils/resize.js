export default function resize (sizes, camera, renderer) {
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        sizes.pixelRatio = window.devicePixelRatio
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(sizes.pixelRatio, 2))
    })
}