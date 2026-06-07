let arenas, info;

async function init(){
  let link = "https://fantastic-space-system-g4rqj4695vq6cpwrv-8500.app.github.dev"; 
  let route= "/arenas";

  info = await fetch(link+route);
  arenas = await info.json();

  generateCards(arenas);
}

function generateCards(arenas){  
  let output = document.getElementById("centerpanel");
  let build ="";
   
  for(let i=0; i<arenas.length; i++){
    let arena = arenas[i];
    let arenaImg = arena.ArenaName.toLowerCase().replace(/ /,"_");
    
    //Credits to w3school for help with the switch statements (https://www.w3schools.com/js/js_switch.asp)
    switch(arena.ArenaName){
      case "P.E.K.K.A's Playhouse":
        arenaImg = "pekka's_playhouse";
      break;
      case "Summit of Heroes":
        arenaImg = "summit_of_heroes";
      break;
      case "Ultimate Clash Pit":
        arenaImg = "ultimate_clash_pit";
      break;
      case "Little Prince's Tavern":
        arenaImg = "little_prince's_tavern";
      break;
    }

    //Credits to w3school for the guide with the flipcards
    build += `<div class="card-flip-container">`;
    build += `<div class="card-inner" onclick="flipCard(this, event)">`;
    
    build += `<div class="card-front">`;
    build += `<div class="wild-card-display">`;
    build += `<img src="arena-images/${arenaImg}.webp" alt="${arena.ArenaName}" class="wild-card-img" style="max-width: 120px; max-height: 120px;">`;
    build += `</div>`;
    build += `<h3>${arena.ArenaName}</h3>`;
    build += `<div>Arena ${arena.ArenaNumber}</div>`;
    build += `<div style="font-size: 0.85rem; margin-top: 15px; color: #626280;">Click to View Info</div>`;
    build += `</div>`;
    
    build += `<div class="card-back">`;
    build += `<h3>Arena Info</h3>`;
    build += `<hr style="border-color: #2d2d44; width: 100%;">`;
    build += `<div><strong>Trophies Required:</strong> ${arena.Trophies}</div>`;
    build += `<div><strong>King Level:</strong> ${arena.KingLevel}</div>`;
    build += `<div><strong>Lucky Chest Level:</strong> ${arena.ChestLevel}</div>`;
    build += `</div>`;
    build += `</div>`; 
    build += `</div>`;
  }
  output.innerHTML = build;  
}

function flipCard(cardInnerElement, event){
  cardInnerElement.classList.toggle('is-flipped');
}

function filter(){
  let kingLevel = document.getElementById("kingLevel").value;
  let arn = []; 
  
  for(let i=0; i<arenas.length;i++){
    let arena = arenas[i];
    
    if(arena.KingLevel == kingLevel){
        arn.push(arena);
    }
  }

  generateCards(arn);  
}