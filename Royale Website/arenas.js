let borrowedbooks, info;

async function init(){
  let link = "https://glowing-eureka-v6rv96w4gw9gh6pvw-8500.app.github.dev"; //replace with your Dev URL
  let route= "/borrowedbooks";

  info = await fetch(link+route);
  borrowedbooks = await info.json();

  generateCards(borrowedbooks);
}

function generateCards(borrowedbooks){  
  let output = document.getElementById("centerpanel");
  let build ="";
   
  for(let i=0; i<borrowedbooks.length; i++){
    let borrowedbook = borrowedbooks[i];
    build += `<div class="card" >`
    build += `<h3> ISBN: ${borrowedbook.ISBN}</h3>`;
    build += `<div> Member Id: ${borrowedbook.MemberId}</div>`;
    build += `<div> Due Date: ${borrowedbook.DueDate}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }
  output.innerHTML = build;  
}

function filter(){
  let memberid = document.getElementById("memberid").value;
  let borrowedBooks = []; 
  
  for(let i=0; i<borrowedbooks.length;i++){
    let borrowedbook = borrowedbooks[i];
    
    if(borrowedbook.MemberId == memberid){
        borrowedBooks.push(borrowedbook);
    }
  }

  generateCards(borrowedBooks);  
}