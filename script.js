// JavaScript (copia esto en el panel JavaScript)
let currentUser = null;

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  currentUser = {
    nombre: document.getElementById('nombre').value,
    password: document.getElementById('password').value,
    club: document.getElementById('club').value,
    handicap: document.getElementById('handicap').value
  };

  // Mostrar pantalla principal
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainScreen').style.display = 'block';
});

function selectArea(area) {
  alert('Has seleccionado: ' + area + '\nEn desarrollo...');
}