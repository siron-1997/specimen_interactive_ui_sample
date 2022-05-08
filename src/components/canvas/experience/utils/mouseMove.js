export default function mouseMove (mouse, sizes) {
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX / sizes.width * 2 - 1
        mouse.y = - (e.clientY / sizes.height) * 2 + 1
        // console.log(mouse.y)
    })
}