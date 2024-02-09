window.addEventListener('keydown', (event) => {
    console.log(event)
    switch (event.key) {
        case 'w':
            // player jump
          if (player.velocity.y === 0)  player.velocity.y = -20
            break
            case ' ':
                // player jump2
                if (player.velocity.y === 0)  player.velocity.y = -20
                break
        case 'a':
            // move player to the left
            keys.a.pressed = true 
            break
        case 'd':
            // move player to the right
            keys.d.pressed = true 
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
       
        case 'a':
            // move player to the left
            keys.a.pressed = false
            break
        case 'd':
            // move player to the right
            keys.d.pressed = false
            break
    }
})