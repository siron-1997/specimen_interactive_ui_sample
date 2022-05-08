export default function setNavigationUi ({
    group, mesh, line, lineGeometry, lineMaterial, meshPositions, lineVertexPositions
}) {
    group.name = `${mesh.name} container`
    // mesh.position.set(meshPositions.x, meshPositions.y, meshPositions.z)
    line.geometry = lineGeometry.setFromPoints(lineVertexPositions)
    line.material = lineMaterial
    line.name = `${mesh.name} line`
    group.add(mesh, line)
}