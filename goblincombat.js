var hero = {
    name: "Hero",
    health: 50,
    attack: 10
    }
    var goblin = {
      name: "Goblin",
      health: 30,
      attack: 10
    }

    function combat(userCommand, enemyCommand) {
      if(userCommand === enemyCommand) {
        document.getElementById("combat").innerHTML ="Your attacks cancels out!";
      }
      else {
        if(userCommand === "attack") {
          if(enemyCommand === "magic") {
            document.getElementById("combat").innerHTML ="Your attack interrupts the enemy's spell!";
            doDamage(hero, goblin);
          }
          else {
            document.getElementById("combat").innerHTML ="The enemy counters your attack!";
            doDamage(goblin, hero);
          }
        }
        if(userCommand === "counter") {
          if(enemyCommand === "attack") {
            document.getElementById("combat").innerHTML ="You counter the enemy's attack!";
            doDamage(hero, goblin);
          }
          else {
            document.getElementById("combat").innerHTML ="The enemy's spell ignores your counter!";
            doDamage(goblin, hero);
          }
        }
        if(userCommand === "magic") {
          if(enemyCommand === "counter") {
            document.getElementById("combat").innerHTML ="Your spell ignores the enemy's counter!";
            doDamage(hero, goblin);
          }
          else {
            document.getElementById("combat").innerHTML ="The enemy's attack interrupts your spell!";
            doDamage(goblin, hero);
          }
        }
      }
    }

    function enemyCommand() {
      var choice = Math.floor((Math.random() * 3) + 1);
      if(choice === 1) {
        return "attack";
      }
      else if(choice === 2) {
        return "counter";
      }
      else {
        return "magic";
      }
    }

    function doDamage(dealer, receiver) {
      receiver.health = receiver.health - dealer.attack;
      document.getElementById("damage").innerHTML = receiver.name + " takes " + dealer.attack + " damage! " + receiver.health + " health remaining.";
    }

      function userAttack() {
        combat("attack", enemyCommand());
        if(hero.health <= 0) {
          document.getElementById("outcome").innerHTML = "You lose!";
        } else if(goblin.health <= 0) {
          document.getElementById("outcome").innerHTML = "You win!";
        }
      }
      function userCounter() {
        combat("counter", enemyCommand());
        if(hero.health <= 0) {
          document.getElementById("outcome").innerHTML = "You lose!";
        } else if(goblin.health <= 0) {
          document.getElementById("outcome").innerHTML = "You win!";
        }
      }
      function userMagic() {
        combat("magic", enemyCommand());
        if(hero.health <= 0) {
          document.getElementById("outcome").innerHTML = "You lose!";
        } else if(goblin.health <= 0) {
          document.getElementById("outcome").innerHTML = "You win!";
        }
      }

document.addEventListener('keydown',this.check,false);

function check(e) {
    var code = e.keyCode;
    if (code == 65) {
      userAttack();
    } else if (code == 67) {
      userCounter();
    } else if (code == 77) {
      userMagic();
    }
}