scene.setBackgroundColor(0)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b 5 5 5 b . . . 
    . . . . . b b b b b b b . . . . 
    . . . . b b 5 5 5 5 5 5 b . . . 
    . b b b b 5 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 5 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f c 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c d d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 5 b . 
    . . c d d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 90, 90)
