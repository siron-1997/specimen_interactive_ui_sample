import { Group, MeshStandardMaterial, Color } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const root = '/models/'

export default function Models () {
    const models = new Group()
    const objLoader = new OBJLoader()
    objLoader.load(
        root + 'specimen_interactive_ui_sample_1_full.obj',
        group => {
            const children = [...group.children]
            children.forEach(child => {
                child.castShadow = true
                child.receiveShadow = true
                if (!(child.material instanceof MeshStandardMaterial)) {
                    child.material = new MeshStandardMaterial()
                    child.material.color = new Color('#a9a9a9')
                    child.material.metalness = 0.45
                    child.material.roughness = 0.15
                }
                models.add(child)
            })
        }
    )
    return models
}