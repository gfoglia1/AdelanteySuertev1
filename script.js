// Si las variables ya están declaradas en algún lugar, solo asignamos un valor a ellas en lugar de redeclararlas.
let currentGame = currentGame || "";  // Si ya existe, no la redeclaramos.
let currentResult = currentResult || "";  // Lo mismo para esta variable.
let gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || {};

function startGame() {
  document.getElementById('areaSelection').classList.remove('hidden');
  document.getElementById('gameSelection').classList.add('hidden');
  document.getElementById('resultInput').classList.add('hidden');
  document.getElementById('postResult').classList.add('hidden');
  document.getElementById('historyContainer').classList.add('hidden');
  document.getElementById('gameHistoryContainer').classList.add('hidden');
}

function viewHistory() {
  document.getElementById('historyContainer').classList.remove('hidden');
  document.getElementById('areaSelection').classList.add('hidden');
  document.getElementById('gameSelection').classList.add('hidden');
  document.getElementById('resultInput').classList.add('hidden');
  document.getElementById('postResult').classList.add('hidden');
  document.getElementById('gameHistoryContainer').classList.add('hidden');

  renderChart();
}

function selectArea() {
  const area = document.getElementById('areaSelect').value;
  const gameSelect = document.getElementById('gameSelect');

  gameSelect.innerHTML = '<option value="">--Selecciona un juego--</option>';

  if (area === 'practica') {
    gameSelect.innerHTML += '<option value="putting">Putting</option>';
    gameSelect.innerHTML += '<option value="driving">Driving Range</option>';
  } else if (area === 'competencia') {
    gameSelect.innerHTML += '<option value="strokePlay">Stroke Play</option>';
    gameSelect.innerHTML += '<option value="matchPlay">Match Play</option>';
  }

  if (area) {
    document.getElementById('gameSelection').classList.remove('hidden');
  } else {
    document.getElementById('gameSelection').classList.add('hidden');
  }
}

function showGameInstructions() {
  const game = document.getElementById('gameSelect').value;
  const instructions = document.getElementById('instructions');
  const instructionsText = document.getElementById('instructionsText');

  if (game === "putting") {
    instructionsText.textContent = "El objetivo es meter la bola en el hoyo con la menor cantidad de golpes posible desde una distancia corta.";
  } else if (game === "driving") {
    instructionsText.textContent = "Practica tu golpe largo para alcanzar la mayor distancia posible.";
  } else if (game === "strokePlay") {
    instructionsText.textContent = "Compite sumando el menor número de golpes en todo el recorrido.";
  } else if (game === "matchPlay") {
    instructionsText.textContent = "Compite hoyo a hoyo contra otro jugador, ganando quien gane más hoyos.";
  } else {
    instructionsText.textContent = "Por favor selecciona un juego para ver las instrucciones.";
  }

  instructions.classList.remove('hidden');
}

function startSelectedGame() {
  currentGame = document.getElementById('gameSelect').value;

  if (currentGame) {
    document.getElementById('resultInput').classList.remove('hidden');
    document.getElementById('instructions').classList.add('hidden');
  } else {
    alert('Por favor selecciona un juego.');
  }
}

function saveResult() {
  currentResult = document.getElementById('result').value;

  if (currentResult) {
    const today = new Date().toISOString().split('T')[0];
    if (!gameHistory[currentGame]) {
      gameHistory[currentGame] = {};
    }
    if (!gameHistory[currentGame][today]) {
      gameHistory[currentGame][today] = [];
    }
    gameHistory[currentGame][today].push(currentResult);

    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));

    document.getElementById('resultInput').classList.add('hidden');
    document.getElementById('postResult').classList.remove('hidden');
    alert('Resultado grabado exitosamente.');
  } else {
    alert('Por favor ingresa un resultado.');
  }
}

function sendWhatsApp() {
  const url = `https://wa.me/?text=He jugado ${currentGame} y mi resultado fue: ${currentResult}`;
  window.open(url, '_blank');
}

function viewGameHistory() {
  const historyList = document.getElementById('gameHistoryList');
  const gameTitle = document.getElementById('currentGameTitle');

  if (gameHistory[currentGame]) {
    gameTitle.textContent = currentGame;
    historyList.innerHTML = '';

    Object.keys(gameHistory[currentGame]).forEach(date => {
      const results = gameHistory[currentGame][date];
      const li = document.createElement('li');
      li.textContent = `${date}: ${results.join(', ')}`;
      historyList.appendChild(li);
    });

    document.getElementById('gameHistoryContainer').classList.remove('hidden');
    document.getElementById('postResult').classList.add('hidden');
  } else {
    alert('No hay historial para este juego.');
  }
}

function renderChart() {
  const data = {
    labels: Object.keys(gameHistory[currentGame] || {}),
    datasets: [{
      label: 'Juegos por día',
      data: Object.values(gameHistory[currentGame] || {}).map(day => day.length),
      backgroundColor: 'rgba(52, 152, 219, 0.6)',
      borderColor: 'rgba(52, 152, 219, 1)',
      borderWidth: 1
    }]
  };

  const ctx = document.getElementById('historyChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function goToMainMenu() {
  document.getElementById('areaSelection').classList.add('hidden');
  document.getElementById('gameSelection').classList.add('hidden');
  document.getElementById('resultInput').classList.add('hidden');
  document.getElementById('postResult').classList.add('hidden');
  document.getElementById('historyContainer').classList.add('hidden');
  document.getElementById('gameHistoryContainer').classList.add('hidden');
  document.getElementById('areaSelection').classList.remove('hidden');
}