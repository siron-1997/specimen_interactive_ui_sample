import * as THREE from 'three'
import { setNavigationUi } from '../utils'
import { navigations } from '../../data/navigations'

export default function Navigations () {
    const navigationsUi = new THREE.Group()
    const textureLoader = new THREE.TextureLoader()
    navigations.forEach(navigation => {
        const group = new THREE.Group()
        const texture = textureLoader.load(navigation.path)
        const geometry = new THREE.PlaneBufferGeometry(200, 50)
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.name = navigation.name
        const lineGeometry = new THREE.BufferGeometry()
        const lineMaterial = new THREE.LineBasicMaterial({
            color: '#acfff0',
            transparent: true,
            opacity: 0.85
        })
        const line = new THREE.Line()
        switch (mesh.name) {
            case 'door':
                mesh.position.set(128.5 + 200, 153.0 + 200, 153.0 + 100)
                mesh.geometry.parameters.width = 120
                setNavigationUi({
                    group, mesh, line, lineGeometry, lineMaterial,
                    lineVertexPositions: [
                        new THREE.Vector3(128.5, 150.0, 153.0),
                        new THREE.Vector3(mesh.position.x, mesh.position.y - 25, mesh.position.z)
                    ]
                })
                break
            case 'top_cover':
                mesh.position.set(0, 303.0 + 100, - 143.5 - 100)
                setNavigationUi({
                    group, mesh, line, lineGeometry, lineMaterial,
                    lineVertexPositions: [
                        new THREE.Vector3(0, 303.0, - 143.5),
                        new THREE.Vector3(mesh.position.x, mesh.position.y - 25, mesh.position.z)
                    ]
                })
                break
        }
        navigationsUi.add(group)
    })
    navigationsUi.name = 'navigations ui'

    return navigationsUi
}