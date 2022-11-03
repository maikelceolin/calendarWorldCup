
function createCard (nation1, nation2, date, day, hour, score1, score2){
  return `
  <section id="cards">
  <div class="card">
    <h2> ${date} <span> ${day} - ${hour}</span></h2>
    <ul>
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
    </ul>
  </div>
  </section>
  `
}

function setGame(){
  document.querySelector("#app").innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="Logo da NLW">
      </header>
      <main>
        ${createCard("bra", "srb", "24/11", "quinta", "16:00", "", "")}
        ${createCard("bra", "sui", "28/11", "segunda", "13:00", "", "")}
        ${createCard("cmr", "bra", "02/12", "sexta", "16:00", "", "")}
      </main>`
}

window.onload = setGame()