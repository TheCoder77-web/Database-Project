let arenas, info;

async function init(){
  let link = "https://fantastic-space-system-g4rqj4695vq6cpwrv-8500.app.github.dev"; //replace with your Dev URL
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
    build += `<div class="card" >`
    build += `<h3> Arena Name: ${arena.ArenaName}</h3>`;
    build += `<div> Arena Number: ${arena.ArenaNumber}</div>`;
    build += `<div> Trophies Required: ${arena.Trophies}</div>`;
    build += `<div> King Level: ${arena.KingLevel}</div>`;
    build += `<div> Lucky Chest Level: ${arena.ChestLevel}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }
  output.innerHTML = build;  
}

function filter(){
  let kingLevel = document.getElementById("kingLevel").value;
  let arenas = []; 
  
  for(let i=0; i<arenas.length;i++){
    let arena = arenas[i];
    
    if(arena.KingLevel == kingLevel){
        arenas.push(arena);
    }
  }

  generateCards(arenas);  
}