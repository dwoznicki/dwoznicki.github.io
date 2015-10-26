// Canvas element
var canvas = document.getElementById("gamebox");
var ctx = canvas.getContext("2d");

// Background image
var bgImage = new Image();
bgImage.src = "imgs/background.png";
bgImage.onload = function () {
  ctx.drawImage(bgImage, 0, 0);
};


// Hero image
var heroImage = new Image();
heroImage.src = "imgs/herotemp.png";
heroImage.onload = function () {
  ctx.drawImage(heroImage, 450, 320);
};

//Goblin image
var goblinImage = new Image();
goblinImage.src = "imgs/goblintemp.png"
goblinImage.onload = function () {
  ctx.drawImage(goblinImage, 50, 320);
};


var hero = {
  name: "Hero",
  health: 50,
  attack: 10
}
var enemy = {
  name: "Goblin",
  health: 30,
  attack: 10
}

// Allows user to input commands
userControl = true;
var victories = 0;
// Compares commands, prints results, and assigns damage
function combat(userCommand, enemyCommand) {
  if(userCommand === enemyCommand) {
    document.getElementById("text_top").innerHTML ="Your attacks cancels out!";
    document.getElementById("text_mid").innerHTML ="";
  }
  else {
    if(userCommand === "attack") {
      if(enemyCommand === "magic") {
        document.getElementById("text_top").innerHTML ="Your attack interrupts the enemy's spell!";
        doDamage(hero, enemy);
      }
      else {
        document.getElementById("text_top").innerHTML ="The enemy counters your attack!";
        doDamage(enemy, hero);
      }
    }
    if(userCommand === "counter") {
      if(enemyCommand === "attack") {
        document.getElementById("text_top").innerHTML ="You counter the enemy's attack!";
        doDamage(hero, enemy);
      }
      else {
        document.getElementById("text_top").innerHTML ="The enemy's spell ignores your counter!";
        doDamage(enemy, hero);
      }
    }
    if(userCommand === "magic") {
      if(enemyCommand === "counter") {
        document.getElementById("text_top").innerHTML ="Your spell ignores the enemy's counter!";
        doDamage(hero, enemy);
      }
      else {
        document.getElementById("text_top").innerHTML ="The enemy's attack interrupts your spell!";
        doDamage(enemy, hero);
      }
    }
  }
}

// Chooses enemy command using random number, 1-3
function enemyCommand() {
  var choice = Math.floor((Math.random() * 3) + 1);
  if(choice === 1) { return "attack"; }
  else if(choice === 2) { return "counter"; }
  else { return "magic"; }
}

// Calculates health loss, prints result
function doDamage(dealer, receiver) {
  receiver.health -= dealer.attack;
  document.getElementById("text_mid").innerHTML = receiver.name + " takes " + dealer.attack + " damage! " + receiver.health + " health remaining.";
}

// Calls combat function when user makes a choice
function userCommand(choice) {
  combat(choice, enemyCommand());
  // Checks if anyone has <= 0 health, prints outcome
  if(hero.health <= 0) {
    document.getElementById("text_bot").innerHTML = "You lose!";
    reset();
    victories = 0;
  } else if(enemy.health <= 0) {
    document.getElementById("text_bot").innerHTML = "You win!";
    victories += 1;
    reset();
  }
}

// Checks for key presses
document.addEventListener('keydown', this.check, false);
// Assigns commands based on keys pressed
function check(e) {
  var code = e.keyCode;
  if (code == 37) {  // "left arrow" key
    if(userControl === true) { userCommand("attack"); }
  } else if (code == 40) {  // "down arrow" key
    if(userControl === true) { userCommand("counter"); }
  } else if (code == 39) {  // "right arrow" key
    if(userControl === true) { userCommand("magic"); }
  }
}

// Resets health, prints number of victories
function reset() {
  // Disallows user commands while game is resetting
  userControl = false;
  hero.health = 50;
  enemy.health = 30;
  document.getElementById("text_bot").innerHTML += " Number of consecutive victories: " + victories;
  setTimeout(function() {
    document.getElementById("text_top").innerHTML = "Game has been reset.";
    document.getElementById("text_mid").innerHTML = "";
    document.getElementById("text_bot").innerHTML = "";
    userControl = true;
  }, 1500);
}