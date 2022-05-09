import * as THREE from 'three'
import { setNavigationUi } from '../utils'
import { navigations } from '../../data/navigations'

export default function Navigations () {
    const navigationsUi = new THREE.Group()
    const textureLoader = new THREE.TextureLoader()
    navigations.forEach(navigation => {
        const group = new THREE.Group()
        const texture = textureLoader.load(navigation.path)
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture })
        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.name = navigation.name
        const lineGeometry = new THREE.BufferGeometry()
        const lineMaterial = new THREE.LineBasicMaterial({
            color: '#acfff0',
            transparent: true,
            opacity: 0.85
        })
        const line = new THREE.Line()
        switch (sprite.name) {
            case 'door':
                sprite.scale.set(120, 50, 0)
                sprite.position.set(128.5 + 200, 153.0 + 200, 153.0 + 100)
                setNavigationUi({
                    group, sprite, line, lineGeometry, lineMaterial,
                    lineVertexPositions: [
                        new THREE.Vector3(128.5, 150.0, 153.0),
                        new THREE.Vector3(sprite.position.x, sprite.position.y - 25, sprite.position.z)
                    ]
                })
                break
            case 'top_cover':
                sprite.scale.set(200, 50, 0)
                sprite.position.set(0, 303.0 + 100, - 143.5 - 100)
                setNavigationUi({
                    group, sprite, line, lineGeometry, lineMaterial,
                    lineVertexPositions: [
                        new THREE.Vector3(0, 303.0, - 143.5),
                        new THREE.Vector3(sprite.position.x, sprite.position.y - 25, sprite.position.z)
                    ]
                })
                break
        }
        navigationsUi.add(group)
    })
    navigationsUi.name = 'navigations ui'

    return navigationsUi
}