// cria e ostra os elementos dos jogos na tela
function createAssets(scene) {
    scene.add.image(500,250 ,"fundo");


    // scene.add.image( 500,490 ,"plata");
    plataforma = scene.physics.add.staticGroup();
    plataforma.create( 500,490 ,"plata");

    // player
    // scene.add.image(500,450,"player");
    player = scene.physics.add.sprite(500,250,"player");
    player.setCollideWorldBounds(true);
    player.setBounce(0.2);
    criarAnimations(scene)
    player.anims.play("parado",true);
    player.body.setGravityY(1500);

    // star: coletavel
    var pos = Phaser.Math.FloatBetween(100,900);
    star = scene.physics.add.sprite(pos,0,"star");
    star.setBounce(0.4);
    // inimigos bombs
    bombs = scene.physics.add.group();


    /*colliders */ 
    scene.physics.add.collider(plataforma,player);
    scene.physics.add.collider(plataforma,star);
    scene.physics.add.overlap(player,star,coletarStar);
    scene.physics.add.collider(plataforma,bombs);
    scene.physics.add.overlap(player,bombs,gameOver);

    /*entradas do teclado */
    teclado = scene.input.keyboard.createCursorKeys();

    /*HUD -head ups display */
    var configTxt={
        fontSize:"20px",
        fontFamily: "Arial black"
    }
    pontostxt = scene.add.text(10,10,"pontos: 0",configTxt);

}
function coletarStar(player,star){
let pos = Phaser.Math.FloatBetween(100,900);
star.setX(pos);
star.setY(0);  
star.setVelocityY(10);

pontos++
pontostxt.setText("pontos: " + pontos)

// criar bombas
let bomb = bombs.create(pos,0,"bombs");
bomb.setBounce(1);
bomb.setCollideWorldBounds(true);
bomb.setVelocity(50);
}
function gameOver(player,bombs) {
    player.setVisible(false);
    isGamerOver = true;
    var configTxt={
        fontSize:"50px",
        fontFamily: "Arial black"
    }
    player.scene.add.text(350, 210,"Gamer Over",configTxt);
}


function criarAnimations(scene){
    var parado = {
    key:"parado",
    frames:[{key:"player",frame: 4}],
    }
    scene.anims.create(parado);

    var left = {
        key:"left",
        frames: scene.anims.generateFrameNumbers("player",{start:0, end:3}),
        frameRate:15,
        repeat:-1,
        };
        scene.anims.create(left);
    
        var right = {
            key:"right",
            frames: scene.anims.generateFrameNumbers("player",{start:5, end:8}),
            frameRate:10,
            repeat:-1,
            };
            scene.anims.create(right);
    
}