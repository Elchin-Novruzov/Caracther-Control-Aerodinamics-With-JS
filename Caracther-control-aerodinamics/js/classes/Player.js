class Player {
    constructor() {
            this.position = {
                x: 100,
                y: 100
            }

            this.velocity = {
            x: 0,
            y: 0,
            }

            this.width = 100
            this.height = 100
            this.sides = {
            bottom: this.position.y + this.height
            }
            this.gravity = 1
        }
    
        draw() {
            c.fillStyle= 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        }
    
        updae(){
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            this.sides.bottom = this.position.y + this.height
            
            // above bottom of canvas
            if (this.sides.bottom + this.velocity.y < canvas.height) {
                this.velocity.y += this.gravity// speed   
            } else this.velocity.y = 0
        }
    }