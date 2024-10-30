let btnSubmit = document.getElementById("submitBtn")
const batallaSection = document.getElementById("batalla");
const userBox = document.getElementById("batalla-user");
const computerBox = document.getElementById("batalla-computador");
let userCounter = document.getElementById("user-counter");
let computerCounter = document.getElementById("computer-counter");
const result = document.getElementById("result");

function userChoise(event) {
  event.preventDefault();

  const userSelected = document.querySelector('[name="cachipun"]:checked');

  //si eol usuario selecciono una opcion
  if (userSelected) {
    //se muestra la seccion de batalla
    batallaSection.classList.remove("hidden");
    batallaSection.classList.add("show");

    //llena el html con la eleccion del usuario
    userBox.innerHTML = `
            ${userSelected.nextElementSibling.outerHTML} 
            ${userSelected.parentElement.textContent}
        `;

    //desestructuración de la funcion 
    const { computedSelected, icon } = computerChoise();

    //llena el html con la eleccion aleatoria del computador
    computerBox.innerHTML = `${icon}${computedSelected}`;

    //texto del label que envuelve al input type="checkbox"
    let user = userSelected.parentElement.textContent.trim();

    //muestra la seccion de resultado
    result.classList.remove("hidden");
    result.classList.add("show");

    //al ganador se le suma 1 a su contador y se llena el html con texto correspondiente
    if (
      (user == "Papel" && computedSelected === "piedra") ||
      (user == "Piedra" && computedSelected === "tijera") ||
      (user == "Tijera" && computedSelected === "papel")
    ) {
      userCounter.innerText++;
      result.textContent = "¡Ganaste!";
    } else if (user.toLowerCase() === computedSelected) {
      result.textContent = "Empate";
    } else {
      computerCounter.innerText++;
      result.textContent = "Perdiste";
    }

    //si el contador es igual a 3 el juego para y se llena el html 
    if (userCounter.innerText == 3) {
      result.innerHTML = `
        <h2>Eres el Ganador</h2>
        <button class="resetBtn" onclick="resetGame()">Jugar de Nuevo</button>
      `;
      //se bloquea el formulario
      btnSubmit.disabled = true;
    } else if (computerCounter.innerText == 3) {
      result.innerHTML = `
        <h2>Haz Perdido...</h2>
        <button class="resetBtn" onclick="resetGame()">Jugar de Nuevo</button>
      `;
      btnSubmit.disabled = true;

    }
  }
}

function computerChoise() {
  const min = 1;
  const max = 4;
  let computedSelected;
  let icon;

  const randomNum = Math.floor(Math.random() * (max - min) + min);

  if (randomNum == 1) {
    computedSelected = "piedra";
    icon = `<img src="assets/img/rock.svg" class="btn__img" />`;
  } else if (randomNum == 2) {
    computedSelected = "papel";
    icon = `<img src="assets/img/paper.svg" class="btn__img" />`;
  } else {
    computedSelected = "tijera";
    icon = `<img src="assets/img/scissors.svg" class="btn__img" />`;
  }

  return { computedSelected, icon };
}


function resetGame() {

  // Reinicia los contadores
  userCounter.innerText = 0;
  computerCounter.innerText = 0;

  // Esconde la sección de batalla
  batallaSection.classList.remove("show");
  batallaSection.classList.add("hidden");

  // Esconde la sección de resultado
  result.classList.remove("show");
  result.classList.add("hidden");


  // Limpia la selección del usuario
  const selectedRadio = document.querySelector('[name="cachipun"]:checked');
  if (selectedRadio) {
    selectedRadio.checked = false;
  }

  // Limpia los cuadros de usuario y computadora
  userBox.innerHTML = "";
  computerBox.innerHTML = "";

  //habilita el boton del formulario
  btnSubmit.disabled = false;
}
