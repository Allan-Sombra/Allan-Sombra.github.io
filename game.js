var config = 
    {width:1000,
     height:500,
     scale:{autoCenter: Phaser.Scale.CENTER_BOTH},
     scene:{ 
            preload: preload,
            create:  create,
            update:  update,
            },
            physics:{
                default: "arcade",
                arcade:{
                    gravity:{y:500},
                }
            }
    };

var game = new Phaser.Game(config);

function preload() {
preloadAssets(this);
}
function create() {
createAssets(this);
}
function update() {
updateGame(this);
}