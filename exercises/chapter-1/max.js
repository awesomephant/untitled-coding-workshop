function draw() {
    const el = document.createElement('canvas')
    const c = el.getContext('2d')
    document.body.appendChild(el) 

    c.canvas.width = window.innerWidth - 100;
    c.canvas.height = window.innerHeight - 100;

    c.fillStyle = 'rgb(250,130,11)'
    c.fillRect(100, 100, 100, 1000)
    c.fillRect(10, 200, 100, 100)
    c.fillRect(10, 200, 100, 100)
    c.fillRect(10, 300, 500, 104)

    c.fillStyle = 'rgb(50,130,11)'
    c.fillRect(10, 100, 100, 100)
    c.fillRect(160, 200, 100, 100)
    c.fillRect(150, 200, 100, 100)
    c.fillRect(120, 300, 500, 1004)
}

draw()