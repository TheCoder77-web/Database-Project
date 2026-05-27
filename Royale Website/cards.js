let cards, info;

async function init(){
  let link = "https://fantastic-space-system-g4rqj4695vq6cpwrv-8500.app.github.dev"; //replace with your Dev URL
  let route= "/cards";

  info = await fetch(link+route);
  cards = await info.json();

  generateCards(cards);
}

function generateCards(cards){
  let output = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<cards.length; i++){
    let card = cards[i];
    build += `<div class="card">`
    build += `<h3> Card Name: ${card.CardName}</h3>`;
    build += `<div> Elixir Cost: ${card.ElixirCost}</div>`;
    build += `<div> Rarity: ${card.Rarity}</div>`;
    build += `<div> Evolution: ${card.Evolution}</div>`;
    build += `<div> Hero: ${card.Hero}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }
  
  output.innerHTML = build;
}

function filter(){
  let rarity = document.getElementById("rarity").value;
  let cardList = []; 
  
  for(let i=0; i<cards.length;i++){
    let card = cards[i];
    
    if(card.Rarity == rarity){
      cardList.push(card);
    }
  }
  
  generateCards(cardList);  
}