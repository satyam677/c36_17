class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2')//h1-h6
        title.html("CAR RACING GAME");
        title.position(130,0)

        var input = createInput("Name");
        input.position(130,160)

        var button = createButton('play');
        button.position(250,200);

        button.mousePressed(function (){
            input.hide();
            button.hide();
            var name = input.value();
          //  playerCount= playerCount+1
          playerCount += 1;
          player.update(name)
          player.updateCount(playerCount)
            var greeting = createElement('h3')
            greeting.position(130,100)
            greeting.html("Hello " +name )
        })

    }
}