function createCard(nome, data, day, player1, hour, player2, player3, hour2, player4, player5, hour3, player6) {
    return `
    <div class="card">
        <div class="imgS">
            <img src="./assets/café.png" alt="perfil de G19g17">
        </div>
        <div class="playerName"><h2>${nome}</h2></div>
        <div class="time">
            <img src="./assets/brasil-icon.png" alt="icone do Brasil">
        </div>
        <div class="icon_list">
            <ul>
                <li>
                    <img src="./assets/html-icon.png" alt="icone do html">
                </li>
                <li>
                    <img src="./assets/css-icon.png" alt="icone do css">
                </li>
                <li>
                    <img src="./assets/js-icon.png" alt="icone do javascript">
                </li>
            </ul>
        </div>
        <div class="cardBoard">
            <div class="agenda">
                <h2>${data} <spam>${day}</spam></h2>
                <div class="card2">
                    <ul class="list">
                        <il class="liste">
                            <img src="./assets/${player1}.svg" alt="icone do time do Brasil">
                            <strong>${hour}</strong>
                            <img src="./assets/${player2}.svg" alt="icone do time do Brasil">
                        </il>
                        <il class="liste">
                            <img src="./assets/${player3}.svg" alt="icone do time do Brasil">
                            <strong>${hour2}</strong>
                            <img src="./assets/${player4}.svg" alt="icone do time do Brasil">
                        </il>
                        <il class="liste">
                            <img src="./assets/${player5}.svg" alt="icone do time do Brasil">
                            <strong>${hour3}</strong>
                            <img src="./assets/${player6}.svg" alt="icone do time do Brasil">
                        </il>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
}

document.querySelector('#app').innerHTML = `
    <main id="cards">
    ${createCard('G19g17', '24/11', 'quinta', 'brasil', '8:00', 'serbia', 'portugal', '13:00', 'japao', 'argentina', '20:00', 'switzerland')}
    </main>
`