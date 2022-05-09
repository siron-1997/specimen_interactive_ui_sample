export default function setNavigationUi ({
    group, sprite, line, lineGeometry, lineMaterial, lineVertexPositions
}) {
    group.name = `${sprite.name} container`
    line.geometry = lineGeometry.setFromPoints(lineVertexPositions)
    line.material = lineMaterial
    line.name = `${sprite.name} line`
    group.add(sprite, line)
}