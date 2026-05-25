let members, info;

async function init(){
  let link = "https://glowing-eureka-v6rv96w4gw9gh6pvw-8500.app.github.dev"; //replace with your Dev URL
  let route= "/members";

  info = await fetch(link+route);
  members = await info.json();

  generateCards(members);
}

function generateCards(members){  
  let output = document.getElementById("centerpanel");
  let build ="";
  
  for(let i=0; i<members.length; i++){
    let member = members[i];
    build += `<div class="card" >`
    build += `<h3> Member ID </h3>`;
    build += `<p> ${member.MemberId}</p>`;
    build += `<div> First Name </div>`;
    build += `<div2> ${member.FirstName} </div2>`;
    build += `<div> Last Name </div>`;
    build += `<div2> ${member.LastName}</div2>`;
    build += `<hr>`;
    build += `</div>`;
  }

  output.innerHTML = build;
}

function filter(){
  let memberid = document.getElementById("memberid").value;
  let memberId = [];
  
  for(let i=0; i<members.length;i++){
    let member = members[i];
    
    if(member.MemberId == memberid){
          memberId.push(member);
       }
  }
  generateCards(memberId);  
}