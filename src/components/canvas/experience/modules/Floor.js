import { Mesh, PlaneBufferGeometry, MeshStandardMaterial } from 'three'

export default function Floor () {
    const geometry = new PlaneBufferGeometry(10000, 10000)
    const material = new MeshStandardMaterial({
        color: '#4b0082',
        roughness: 0.35
    })
    const mesh = new Mesh(geometry, material)
    mesh.rotation.x = - 90 * Math.PI / 180
    mesh.receiveShadow = true

    return mesh
}