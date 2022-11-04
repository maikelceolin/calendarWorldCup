function setGame (hour, nation1, nation2, score1, score2){
  return `
  <li>
    <div class="nation">
      <img src="./assets/flags/flag-${nation1}.svg" alt="${nation1}">
      <p>${nation1}</p>
    </div>
    <div>
      <div id="hour"><span>${hour}</span></div>
      <strong>${score1} <span>x</span> ${score2}</strong>
    </div>
    
    <div class="nation">
      <img src="./assets/flags/flag-${nation2}.svg" alt="${nation2}">
      <p>${nation2}</p>
    </div>
  </li>
  `
}


function createCard (date, day, nation1, nation2, hour1, nation3, nation4, hour2, score1, score2, score3, score4){
  document.querySelector("main").innerHTML +=`
    <section id="cards">
      <div class="card">
        <h2> ${date} <span> ${day}</span></h2>
        <ul>
            ${setGame(hour1, nation1, nation2, score1, score2)}
            ${setGame(hour2, nation3, nation4, score3, score4)}
        </ul>
      </div>
    </section>
    `
}

function grupoA(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16h00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7h00","bra","sui","13h00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16h00","cmr","bra","16h00","0","0","0","0")

}

function grupoB(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16h00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7h00","bra","sui","13h00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16h00","cmr","bra","16h00","0","0","0","0")

}


function grupoC(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16h00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7h00","bra","sui","13h00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16h00","cmr","bra","16h00","0","0","0","0")

}


function grupoD(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16h00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7h00","bra","sui","13h00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16h00","cmr","bra","16h00","0","0","0","0")

}

function grupoE(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16h00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7h00","bra","sui","13h00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16h00","cmr","bra","16h00","0","0","0","0")

}

function grupoF(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16h00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7h00","bra","sui","13h00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16h00","cmr","bra","16h00","0","0","0","0")

}



function grupoG(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16:00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7:00","bra","sui","13:00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16:00","cmr","bra","16:00","0","0","0","0")

}

function grupoH(){

  createCard("20/11","domingo","sui","cmr","9:00","bra","srb","16:00","0","0","0","0")
  createCard("28/11","segunda","cmr","srb","7:00","bra","sui","13:00","0","0","0","0")
  createCard("02/12","sexta","srb","sui","16:00","cmr","bra","16:00","0","0","0","0")

}


window.onload = grupoG()