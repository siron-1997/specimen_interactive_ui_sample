import { Raycaster } from 'three'
import gsap from 'gsap'
import { setChangeRad } from '../utils'

export default function Raycast (mouse, camera, navigations, models) {
    const raycaster = new Raycaster()
    window.addEventListener('mousedown', () => {
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects(navigations.children)
        if (intersects.length !== 0) {
            models.children.forEach(child => {
                if (intersects[0].object.name === child.name) {
                    switch (child.name) {
                        case 'door':
                            if (child.rotation.y === 0) {
                                gsap.to(child.rotation, { duration: 2.5, delay: 0.25, y: setChangeRad(110) })
                            } else if (child.rotation.y > 0) {
                                gsap.to(child.rotation, { duration: 2.5, delay: 0.25, y: 0 })
                            }
                            break
                        case 'top_cover':
                            if (child.rotation.x === 0) {
                                gsap.to(child.rotation, { duration: 2.5, delay: 0.25, x: setChangeRad(- 50) })
                            } else if (child.rotation.x < 0) {
                                gsap.to(child.rotation, { duration: 2.5, delay: 0.25, x: 0 })
                            }
                            break
                    }
                }
            })
        }
    })

    return raycaster
}