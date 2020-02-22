const canvas = document.getElementById("canvas");

const app = new PIXI.Application({
  view: canvas,
  width: window.innerWidth,
  height: window.innerHeight,
  resizeTo: window
});

// load sprite sheet

const loader = PIXI.Loader.shared;
const sprites = {}

loader.add("spritesheet", "./assets/sprite/spritesheet.json")

loader.load((loader, resources) => {
    // create an array to load textures
    const textures = [];
    let i;

    for (i = 0; i < 4; i++) {
        const runDown = PIXI.Texture.from(`knight iso char_run down_${i + 1}.png`)
        textures.push(runDown)
    }

    const knight = new PIXI.AnimatedSprite(textures)

    // ticker

    let ticker = PIXI.Ticker.shared;

    ticker.add(() => {
        //keeps the knight in the center of the window
        knight.x = app.renderer.width / 2;
        knight.y = app.renderer.height / 2;
        
        knight.anchor.x = 0.5;
        knight.anchor.y = 0.5;
    })

    knight.animationSpeed = .1

    knight.play()

    app.stage.addChild(knight);

    app.start()
})