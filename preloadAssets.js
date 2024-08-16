// FUNÇAO RESPONSAVEL PELO CARREGAMENTO DOS SPRITES
function preloadAssets(scene) {
    console.log(scene);

// cenario
scene.load.image("fundo","./asstes/fundo.png");

scene.load.image("plata","./asstes/plataforma.png");
/* player*/
scene.load.spritesheet("player","./asstes/player.png",{
    frameWidth: 32,
    frameHeight: 48,
  });
// coletaveis
  scene.load.image("star","./asstes/star.png");


/* inimigos:bombas */
scene.load.image("bombs","./asstes/bomb.png");

}