import { Raycaster } from 'three'

export default function Raycast (mouse, camera, models) {
    const raycaster = new Raycaster()
    window.addEventListener('mousedown', () => {
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects(models.children)
        console.log('intersects', intersects)
    })

    return raycaster
}