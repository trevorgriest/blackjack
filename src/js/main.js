import main from "blackjack-dealer-logic";


export default () =>{
  const game =  main.singleDeckGame;
  const gameIsRunning = true;
  const playButton = document.getElementById("playButton");
  const hitButton = document.getElementById("hitButton");
  const standButton = document.getElementById("standButton");
  const doubleButton = document.getElementById("doubleButton");
  
  
  playButton.onclick = function(){
    // while (gameIsRunning){
      // alert("Let' Play BlackJack!" + game.getUserChips())
      
      document.getElementById("chips")
      chips.innerHTML = `Your current chip count is: ${game.getUserChips()}`

      setTimeout(function() { const wager = window.prompt("Enter your bet:")
      
      game.receiveAnte(wager);
      
      document.getElementById("bet")
      bet.innerHTML = `Your bet is: ${wager}`}, 2000)
      
      game.deal();
      
      setTimeout(function(){ document.getElementById("dealer")
      dealer.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`
      
      document.getElementById("player")
      player.innerHTML = `Your current hand: ${game.getUserHandValue()}`
      
      
      document.getElementById("board")
      board.innerHTML = `What would you like to do?`}, 5500)
      
    
        hitButton.onclick = function() {
          game.hitUser();
          game.evaluateUser();
          const card2 = document.getElementById("card2")
          card2.innerHTML = `Your current hand: ${game.getUserHandValue()}`
          game.settleDealerHand();

          const dealFull = document.getElementById("dealFull");
          dealFull.innerHTML = `Dealer has: ${game.getDealerHandValue()}`
          switch(game.outcome()) {
            case result.LOSS:
              const result1 = document.getElementById("result");
              result1.innerHTML = "You Lost...";
              game.resetAnte();
              break;

            case Result.PUSH:
              document.innerHTMl("Pussh...you get your money back.");
              game.pushHand();
              break;

            case Result.WIN:
              document.innerHTML("Congrats! You Won!");
              game.userWin();
              break;

            default:
              break;
        }
        }  
    
        standButton.onclick = function() {
          game.standUser();
          game.evaluateUser();
          const card3 = document.getElementById("card3")
          card3.innerHTML = `Your current hand: ${game.getUserHandValue()}`
          game.settleDealerHand();

          const dealFull = document.getElementById("dealFull");
          dealFull.innerHTML = `Dealer has: ${game.getDealerHandValue()}`
          switch(game.outcome()) {
            case result.LOSS:
              const result1 = document.getElementById("result");
              result1.innerHTML = "You Lost...";
              game.resetAnte();
              break;

            case Result.PUSH:
              document.innerHTMl("Pussh...you get your money back.");
              game.pushHand();
              break;

            case Result.WIN:
              document.innerHTML("Congrats! You Won!");
              game.userWin();
              break;

            default:
              break;
          }

        }

        doubleButton.onclick = function(){
          game.doubleUser();
          game.evaluateUser();
          const dblwager = document.getElementById("dblwager");
          dblwager.innerHTML = `Your wager is: ${wager}`
        }

         }
  }
