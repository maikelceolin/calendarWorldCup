function setGame (nation1, nation2, score1, score2){
  return `
  <li>
    <div class="nation">
      <img src="./assets/flags/flag-${nation1}.svg" alt="Bandeira do ${nation1}">
      <p>${nation1}</p>
    </div>
    <strong>${score1} <span>x</span> ${score2}</strong>
    <div class="nation">
      <img src="./assets/flags/flag-${nation2}.svg" alt="Bandeira da ${nation2}">
      <p>${nation2}</p>
    </div>
  </li>
  `
}


function createCard (date, day, nation1, nation2, nation3, nation4, score1, score2, score3, score4){
  document.querySelector("main").innerHTML +=`
    <section id="cards">
      <div class="card">
        <h2> ${date} <span> ${day}</span></h2>
        <ul>
            ${setGame(nation1, nation2, score1, score2)}
            ${setGame(nation3, nation4, score3, score4)}
        </ul>
      </div>
    </section>
    `
}

function showGames (){

// jogo 24/11

createCard("24/11","quinta","sui","cmr","bra","srb","0","0","0","0")

// jogo Brasil x Servia
createCard("28/11","segunda","cmr","srb","bra","sui","0","0","0","0")

// jogo Brasil x Suica
createCard("02/12","sexta","srb","sui","cmr","bra","0","0","0","0")


}


window.onload = showGames()