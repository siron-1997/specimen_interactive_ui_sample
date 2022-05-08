import { Group, MeshStandardMaterial, Color } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const root = '/models/'

export default function Models () {
    const models = new Group()
    const components = {}
    components.door = new Group()
    components.top_cover = new Group()
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
                switch (child.name) {
                    case 'door':
                        child.position.set(- 128.5, 0, - 153.0)
                        components.door.position.set(128.5, 0, 153.0)
                        components.door.name = child.name
                        components.door.add(child)
                        models.add(components.door)
                        break
                    case 'housing':
                        models.add(child)
                        break
                    case 'top_cover':
                        child.position.set(0, - 303.0, 143.5)
                        components.top_cover.position.set(0, 303.0, - 143.5)
                        components.top_cover.name = child.name
                        components.top_cover.add(child)
                        models.add(components.top_cover)
                        break
                    default:
                        console.log('not object')
                }
            })
        }
    )
    return models
}