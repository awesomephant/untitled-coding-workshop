function draw() {
    const c = document.querySelector('#world').getContext('2d')
    c.canvas.width = window.innerWidth - 100;
    c.canvas.height = window.innerHeight - 100;

    c.fillStyle = 'rgb(250,130,11)'
    c.fillRect(100, 100, 100, 100)
    c.fillRect(10, 200, 100, 100)
    c.fillRect(10, 200, 100, 100)
    c.fillRect(10, 300, 500, 1000)
}

draw()