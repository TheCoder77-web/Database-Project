let cards, info;

async function init(){
  let link = "https://fantastic-space-system-g4rqj4695vq6cpwrv-8500.app.github.dev"; 
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
    let wildCard = card.Rarity;
    let cardImg = wildCard.toLowerCase();

    //Credits to w3school for the guide with the flipcards
    build += `<div class="card-flip-container">`;
    build += `<div class="card-inner" onclick="flipCard(this, event)">`;
    
    build += `<div class="card-front">`;
    build += `<h3>${card.CardName}</h3>`;
    build += `<div>Elixir: ${card.ElixirCost}</div>`;
    build += `<div style="font-size: 0.85rem; margin-top: 15px; color: #626280;">Click to Flip</div>`;
    build += `</div>`;
    
    build += `<div class="card-back">`;
    build += `<div class="wild-card-display">`;
    build += `<img src="card-rarity-images/${cardImg}.webp" alt="${wildCard} Wild Card" class="wild-card-img">`;
    build += `<div class="wild-card-text">${wildCard} Rarity</div>`;
    build += `</div>`;
    
    build += `<hr style="border-color: #2d2d44; width: 100%;">`;
    build += `<div><strong>Rarity:</strong> ${card.Rarity}</div>`;
    build += `<div><strong>Evolution:</strong> ${card.Evolution}</div>`;
    build += `<div><strong>Hero:</strong> ${card.Hero}</div>`;
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