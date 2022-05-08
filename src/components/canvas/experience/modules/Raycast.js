import { Raycaster } from 'three'

export default function Raycast (mouse, camera, navigations) {
    const raycaster = new Raycaster()
    window.addEventListener('mousedown', () => {
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects(navigations.children)
        console.log('intersects', intersects)
    })

    return raycaster
}