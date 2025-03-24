const rock = document.querySelector('#Pierre');
const paper = document.querySelector('#Feuille');
const scissors = document.querySelector('#Ciseaux');
const score = document.querySelector('.score');
const choices = document.querySelector('.choices');
const reinit = document.querySelector('#btn');
const trivia = document.querySelector('#trivia');
const result = document.querySelector('#result'); 

let win = 0;
let loss = 0;
let tie = 0;

let userChoice;
let computerChoice;

const tableau_choix_ordi = ['Feuille', 'Pierre', 'Ciseaux'];

function start_game(e) {
  userChoice = e.target.id;
  computerChoice = get_computer_choice();

  logchoices();

  let gameResult;

  if (
    (userChoice === 'Pierre' && computerChoice === 'Ciseaux') ||
    (userChoice === 'Ciseaux' && computerChoice === 'Feuille') ||
    (userChoice === 'Feuille' && computerChoice === 'Pierre')
  ) {
    win++;
    gameResult = "C'est gagné !";
  } else if (userChoice === computerChoice) {
    tie++;
    gameResult = 'Égalité !';
  } else {
    loss++;
    gameResult = "C'est perdu !";
  }

  logresult();
  displayGameResult(gameResult);
}

function logchoices() {
  choices.innerHTML = `
    <li id="computerChoice">L'ordinateur choisit... ${computerChoice} !</li>
  `;
}

function get_computer_choice() {
  const index_aleatoire = Math.floor(Math.random() * tableau_choix_ordi.length);
  return tableau_choix_ordi[index_aleatoire];
}

function logresult() {
  score.innerHTML = `
    <li id="wins" style ="color: rgb(106, 141, 129);">Victoires · ${win}</li>
    <li id="losses"style ="color: rgb(170, 99, 99);">Défaites · ${loss}</li>
    <li id="draws"style ="color: rgb(96, 96, 197);">Égalités · ${tie}</li>
  `;
}

function displayGameResult(resultMessage) {
  result.innerHTML = `
    <section id="result">${resultMessage}</section>
  `;
}

function reset_game() {
  win = 0;
  loss = 0;
  tie = 0;
  logresult();
  result.innerHTML = '';
}

const triviafacts = [
  "Appelé à l'origine le jeu des signes de mains, l'ancêtre du chifoumi provient de Chine !",
  "La version modernisée du chifoumi est apparue au Japon au 17e siècle.",
  "Une variante japonaise emploie les termes de Serpent, Grenouille et Limace.",
  "La plupart des joueurs ont tendance à choisir Pierre en premier !",
  "Un empereur chinois de la dynastie Ming aurait souvent utilisé le chifoumi pour prendre des décisions parmi sa cour !",
  "Après une victoire, la plupart des joueurs ont tendance à jouer le même signe une deuxième fois !",
];

function gen_random_trivia() {
  const random_trivia_index = Math.floor(Math.random() * triviafacts.length);
  return triviafacts[random_trivia_index];
}

function randomtrivia() {
  const randomFact = gen_random_trivia(); 
  trivia.innerHTML = `
    <section id="trivia">${randomFact}</section>
  `;
}


rock.addEventListener('click', start_game);
paper.addEventListener('click', start_game);
scissors.addEventListener('click', start_game);

reinit.addEventListener('click', reset_game);

rock.addEventListener('click', randomtrivia);
paper.addEventListener('click', randomtrivia);
scissors.addEventListener('click', randomtrivia);
