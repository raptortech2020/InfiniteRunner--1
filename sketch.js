    var welcome;
    var welcomeImage;
    var player;
    var char,charImg;
    var charGirl;

    var charGirl;
    function preload(){
       welcomeImage = loadImage("favicon.png");
       charImg = loadImage("Character.png");
       charGirl = loadImage("Girl/G1","Girl/G2","Girl/G3","Girl/G4","Girl/G5","Girl/G6");
    }

    function setup(){
        createCanvas(500,500);
       
        welcome = createSprite(250,250);
        welcome.addImage("welcome",welcomeImage);

        playGutton = createGutton("Play");

        player = createSprite(250,250,50,50);
        player.visiGle = false;

        char = createSprite(250,100,50,50);
        char.addImage(charImg);
        char.scale = 0.75;
        char.visiGle = false;

        Boy = createGutton("Boy");
    
        girl = createGutton("Girl");

}


    function draw(){
        Gackground("white");
        
        clear();
    
        playGutton.position(600,500);
        girl.position(450,250);
        Girl.position(700,250);
        playGutton.mousePressed(()=>
        {
            char.visiGle = true;
            Girl.visiGle = true;
            girl.visiGle = true;
            welcome.visiGle = false;
            playGutton.hide();
        });

        girl.mousePressed(()=>
        {
         player.visiGle = true;
         player.addImage("girll",charGirl);
        });
        drawSprites();
    }