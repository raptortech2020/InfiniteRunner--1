    var welcome;
    var welcomeImage;
    var player;
    var char,charImg;
    var charGirl;
    var playButton;

    var charGirl;
    function preload(){
       welcomeImage = loadImage("favicon.png");
       charImg = loadImage("Character.png");
       charGirl = loadAnimation("Girl/G1","Girl/G2","Girl/G3","Girl/G4","Girl/G5","Girl/G6");
    }

    function setup(){
        createCanvas(500,500);
       
        welcome = createSprite(250,250);
        welcome.addImage("welcome",welcomeImage);

        playButton = createButton("Play");

        player = createSprite(250,250,50,50);
        player.visible = false;

        char = createSprite(250,100,50,50);
        char.addImage(charImg);
        char.scale = 0.75;
        char.visible = false;
    
        girl = createButton("Girl");

}


    function draw(){
        background("white");
        
        clear();
    
        playButton.position(600,500);
        
        girl.position(700,250);
        playButton.mousePressed(()=>
        {
            char.visible = true;
            girl.visible = true;
            welcome.visible = false;
            playButton.hide();
        });

        girl.mousePressed(()=>
        {
         player.visible = true;
         player.addAnimation("girl",charGirl);
        });
        drawSprites();
    }
