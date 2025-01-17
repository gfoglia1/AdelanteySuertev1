let history = [];

const areas = [
  "Putter",
  "Juego corto",
  "Bunker",
  "Hierros",
  "Driver y maderas",
  "Tiros locos",
  "Plan de Diego",
  "Entrenamiento con Tiger",
];

const games = {
  Putter: [
    { name: "La gran Jordan", description: "Poner un tee por dentro de la base del putter y otro tee por fuera. Jugar 15 putts en línea recta a 4 metros del hoyo. Anotar cuántos putts metiste sin tocar los tees." },
    { name: "La puertita", description: "Elegir un lugar en el green a 6 metros del hoyo. Armar una “puerta” con dos tees a mitad del recorrido del putt (3 metros). Jugar 20 putts. Cuántos pasaron por la “puerta” y quedaron a menos de un metro del hoyo?" },
    { name: "Scheffler los mete a todos", description: "Elegir 6 lugares en el green a una distancia de 2 metros del hoyo. El objetivo es embocar desde los 6 lugares. Cuántos tiros hiciste para lograr embocar desde los 6 lugares?" },
    { name: "Bryson te ayuda", description: "Tirar 15 putts desde 8 metros o más. Cuántos quedaron a menos de un metro?" },
    { name: "La academia de los 2 putts", description: " Elegir un lugar a más de 12 metros del hoyo. El objetivo es terminar cada putt. Tirar 15 veces y contar cuántas veces se hicieron 2 o menos putts." },
  ],
  "Juego corto": [
    { name: "30/40 yardas", description: "Elegir una bandera a 30 o 40 yardas. Hacer 20 tiros de trayectoria media. Cuántos quedaron dentro de los dos metros de la bandera?" },
    { name: "Pasar el bunker", description: " Elegir una bandera ubicada a 20 yardas con un obstáculo en el medio (por ejemplo, un bunker). Hacer 15 tiros. Cuántos quedaron a menos de 3 metros de la bandera?" },
    { name: " La escalerita", description: "poner 5 varas de alineación o palos de golf en el green formando 4 “zonas” distintas”. El objetivo es tirar chips y dejar una pelota en cada una de las zonas. Cuántos tiros hiciste para lograrlo?" },
    { name: "El lie complicado", description: " Tirar 20 golpes a unas 20 yardas del green desde lies complicados (puede ser rough, tierra pelada, arena suelta, enterradas, etc.). Cuántas quedaron a menos de 3 metros del hoyo?" },
     { name: "La corrida", description: "Ubicarse a 5 o 6 metros del green y elegir una bandera ubicada en el green. Tirar 20 tiros con un hierro 7 u 8. Cuántas pelotas quedaron a menos de un metro de la bandera?" },
    { name: "Par 18", description: "Elegir 9 lugares para hacer chip alrededor de un green. Terminar cada uno de los tiros hasta embocar con el putter. Cuántos golpes hiciste?" },
    { name: "El eliminador de 60 a 100", description: "Elegí un target a 60 yardas, otro a 70, 80, 90 y 100 (podés usar el catalejo para ayudarte). Cada tiro que hacés y queda a menos de 5 metros de la bandera, se elimina esa distancia. " },
  ],
  Bunker: [
    { name: "Fairway bunker", description: "Ubicarse en un bunker de fairway. Colocar una toalla en la arena unos 5 centímetros detrás de la pelota. Pegar 15 tiros. Cuántos tiros pegaste sin tocar la toalla?" },
    { name: "Línea en la arena", description: "Hacer una línea en la arena a 4 o 5 centímetros de la pelota. Pegar 12 tiros intentando pegarle a la línea primero. Cuántas pelotas fueron al green?" },
    { name: " Sacada de bunker ", description: "Elegir un hoyo a 8 o 10 metros del bunker. Pegar 20 tiros. Cuántos quedaron a menos de 3 metros de la bandera?" },
    { name: "El tiro más jodido", description: "Desde el bunker, elegir un hoyo ubicado a unas 50 yardas. Pegar 15 tiros. Cuántos quedaron a menos de 10 metros de la bandera?" },
    { name: "El huevo frito", description: " Pegar 12 tiros desde “huevos fritos!” en el bunker. Cuántos quedaron a menos de 5 metros del hoyo?" },
  ],
  Hierros: [
    { name: "El eliminador de 110 a 150", description: "Elegí un target a 110 yardas, otro a 120, 130, 140 y 150 (podés usar el catalejo para ayudarte). Cada tiro que hacés y queda a menos de 5 metros de la bandera, se elimina esa distancia. El objetivo es eliminar a todas las distancias (110, 120, 130, 140 y 150). Cuántos tiros hiciste en total para eliminar a todos?" },
    { name: " El eliminador de 160 a 200", description: "Elegí un target a 160 yardas, otro a 170, 180, 190 y 200 (podés usar el catalejo para ayudarte). Cada tiro que hacés y queda a menos de 10 metros de la bandera, se elimina esa distancia. El objetivo es eliminar a todas las distancias (160, 170, 180, 190 y 200). Cuántos tiros hiciste en total para eliminar a todos?" },
    { name: "Pegando al green", description: "Pega 3 tiros, uno con hierro 5, otro con hierro 7 y otro con hierro 9. Imagina para cada tiro un green ubicado a la distancia que normalmente pegarías con cada palo. Cuántos tiros hiciste para acertar los 3 greens imaginarios?" },
    { name: "Approachs cortos ", description: "Elige una bandera a 80 yardas. Pega 6 tiros, Cuántos quedaron a menos de 10 metros de la bandera?" },
    { name: "Approachs medios ", description: " Elige una bandera a 100 yardas. Pega 6 tiros. Cuántos quedaron a menos de 10 metros de la bandera?" },
    { name: " Dirección es muy importante", description: "Elige un target a 150 o 160 yardas. Pega 10 tiros con un hierro (el que quieras para esa distancia). Cuántos tiros salieron en línea a la bandera? (con un desvío de menos de 3 metros por derecha o por izquierda)" },
    { name: "Jugamos al fade alto", description: " Pega 10 tiros con el hierro 7 buscando llegar a un green con fade. Cuántos tiros llegaron al green?" },
    { name: "El cambio ", description: "Imagina un green ubicado a la distancia que normalmente pegas un hierro 8. Pega 5 tiros con el hierro 8. Luego elige otro target y pega 2 tiros con el Pitching wedge. Luego pega otros 5 tiros con el hierro 8. Luego elige otro target y pega 3 tiros con el hierro 6. Luego vuelve a pegar 5 tiros con el hierro 8. En total pegaste 15 tiros con el hierro 8. Cuántos greens acertaste?" },
     { name: "Jugando al draw", description: "Pega 10 tiros con un hierro 6 intentando llegar a un green con draw. Cuántos tiros llegaron al green?" },
  ],
  "Driver y maderas": [
    { name: "Embocando el fairway", description: " Imagina un fairway de unas 35 yardas de ancho. Pegar 6 tiros con al driver. Cuántas quedaron en el fairway?" },
    { name: "Control con las maderas", description: "Imagina un fairway de 25 yardas de ancho. Pegar 6 tiros con una madera. Cuántos quedaron en el fairway?" },
     { name: "No tirarla a la derecha", description: "Imagina un fairway de 35 yardas de ancho. Cada fairway pegado suma un punto. Cada fairway fallado por la derecha resta un punto. Cada fairway fallado por izquierda no resta puntos. Tirá 10 drives. Cuántos puntos hiciste?" },
    { name: "No tirarla a la izquierda", description: "Imagina un fairway de 35 yardas de ancho. Cada fairway pegado suma un punto. Cada fairway fallado por la izquierdaresta un punto. Cada fairway fallado por derecha no resta puntos. Tirá 10 drives. Cuántos puntos hiciste?"},
  ],
  "Tiros locos": [
    { name: "Imaginando el árbol", description: "Tira 12 tiros bajos escapando de las ramas de un árbol. Cuántos tiros fueron bien impactados?" },
    { name: "El tiro alto como Shaq", description: "Imagina un árbol y pega 12 tiros altos con un hierro 9 que pasen por encima del mismo. Cuántos fueron bien pegados?" },
     { name: "Abrazando el árbol", description: "Imagina que tienes un árbol por delante y debes pegar un gancho para esquivarlo. Pega 12 tiros. Cuántos fueron buenos?" },
     { name: " El slice salvador", description: "Imagina un árbol y vas a escapar por la izquierda. Para eso debes pegar un tremendo slice. Toma el hierro 6 y pega 12 tiros. Cuántos slices pegaste?" },
     { name: "El pitch de precisión", description: "Elige un target a 50 yardas, pega 12 tiros con el pitching wedge. Cuántos quedaron a menos de 6 metros del target?" },
  ],
  "Plan de Diego": [
    { name: "Aproachs variados", description: "9 pelotas : desde el centro del green tirar con la mano las 9 pelotas al rededor del green buscando dejar distintos tiros ( chip, flop, búnker)Y contar cuántos approach y putt haces" },
    { name: "aproachs a green", description: "Distintas distancias: pegar 10 tiros de 10 yardas, 10 de 20 yds, 10 de 30 ,10 de 40. Ver cuántos tiros dejaste dentro de los 3 mtrs del hoyo" },
     { name: "Putts cortos", description: "Corto ( a embocar), 10 pelotas de 1 mtr, 10 de 2 mtrs, 10 de 3 mtrs. Cuantas emboque de cada distancia" },
     { name: "Putts largos", description: "Putt largo ( a arrimar) 10 putts de 7 mtrs, 10 de 10 mtrs, 10 de 13 mtrs con distintas caídas. A dejar a menos de un putt del hoyo. Cuantas arrimaste bien" },
     { name: "Antes de jugar", description: "Full swing (100 pelotas) 10 pelotas palo corto ( 54 / pitch) para aflojar y agarrar ritmo, 30  pelotas ( hierro medio) ejercicio técnicos que vimos en clase ( 3 c ejercicio 3 swing libre), 10 maderas, 20 pelotas desarrollado habilidades ( mover pelota/ etc), 20 drills generales, 10 maderas" },  ],
    "Entrenamiento con Tiger": [
    { name: "Putting con wedge", description: "Para hacer este ejercicio, comience por colocar la bola de golf a unos pocos pies de distancia del hoyo. Luego, use su wedge para golpear la bola en dirección al hoyo. A medida que haga esto, observe cómo se alinea la bola y cómo se desplaza en la superficie del green. Este ejercicio puede ayudarlo a mejorar su capacidad de controlar la bola en el putting." },
    { name: " Putting de 9 hoyos", description: "Para hacer este ejercicio, coloque 9 bolas de golf alrededor del hoyo. Luego, comience a practicar su putting, golpeando cada bola hacia el hoyo. Este ejercicio ayuda a mejorar su precisión y le da la oportunidad de practicar el putting desde diferentes ángulos." },
     { name: "Putting con un objeto", description: "Para hacer este ejercicio, coloque un objeto en el green, como una toalla o una moneda. Luego, intente golpear la bola de golf para que se detenga cerca del objeto. Este ejercicio ayuda a mejorar su precisión y también le permite practicar el control de la distancia en el putting." },
],
};

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(pageId).style.display = "block";
}

function initAreas() {
  const areaSelect = document.getElementById("area");
  areaSelect.innerHTML = `<option value="">Selecciona un área</option>`;
  areas.forEach((area) => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    areaSelect.appendChild(option);
  });
}

function handleAreaChange() {
  const selectedArea = document.getElementById("area").value;
  const gameSelect = document.getElementById("game");
  gameSelect.innerHTML = `<option value="">Selecciona un juego</option>`;
  gameSelect.disabled = !selectedArea;

  if (selectedArea && games[selectedArea]) {
    games[selectedArea].forEach((game) => {
      const option = document.createElement("option");
      option.value = game.name;
      option.textContent = game.name;
      gameSelect.appendChild(option);
    });
  }
}

function handleGameChange() {
  const selectedArea = document.getElementById("area").value;
  const selectedGame = document.getElementById("game").value;
  const gameDetails = document.getElementById("gameDetails");

  if (selectedArea && selectedGame) {
    const game = games[selectedArea].find((g) => g.name === selectedGame);
    if (game) {
      gameDetails.innerHTML = `
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <label for="scoreInput">Ingresa tu resultado:</label>
        <input type="number" id="scoreInput" min="0">
        <button onclick="saveResult('${selectedArea}', '${game.name}')">Guardar resultado</button>
      `;
    }
  } else {
    gameDetails.innerHTML = "";
  }
}

function saveResult(area, game) {
  const scoreInput = document.getElementById("scoreInput");
  const score = parseInt(scoreInput.value, 10);

  if (!isNaN(score)) {
    const date = new Date().toISOString().split("T")[0];
    history.push({ area, game, score, date });
    alert(`Resultado guardado: ${game} (${area}) - ${score} puntos.`);
    scoreInput.value = "";

    const whatsappButton = document.createElement("button");
    whatsappButton.textContent = "Enviar por WhatsApp";
    whatsappButton.onclick = function() {
      const message = `Juego: ${game} (${area}) - Resultado: ${score} puntos`;
      const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
    document.getElementById("gameDetails").appendChild(whatsappButton);
  } else {
    alert("Por favor, ingresa un resultado válido.");
  }
}

function showHistory() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = history
    .map(
      (entry) =>
        `<li>${entry.date}: ${entry.game} (${entry.area}) - ${entry.score} puntos</li>`
    )
    .join("");
  showPage("historyPage");
}

document.addEventListener("DOMContentLoaded", () => {
  initAreas();
  document.getElementById("area").addEventListener("change", handleAreaChange);
  document.getElementById("game").addEventListener("change", handleGameChange);
});