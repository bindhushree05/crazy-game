const logos = {
    rock: document.getElementById('rock'),
    paper: document.getElementById('paper'),
    scissors: document.getElementById('scissors'),
    selected: document.getElementById('selectedLogo'),
    computer: document.getElementById('computerLogo'),
  };
  
  const choices = {
    rock: './assets/rock-hand.png',
    paper: './assets/paper-hand.png',
    scissors: './assets/scissors-hand.png',
  };
  
  const scoresElement = document.getElementById('scores');
  const gameOverMessage = document.querySelector('.gameOverMessage');
  const playAgainButton = document.querySelector('.playAgainButton');
  
  let playerScore = 0;
  let computerScore = 0;
  
  function updateScores(playerChoice, computerChoice) {
    const playerWins = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };
  
    const playerChoiceName = playerChoice.split('/').pop();
    const computerChoiceName = computerChoice.split('/').pop();
  
    if (playerWins[playerChoiceName] === computerChoiceName) {
      playerScore += 1;
    } else if (playerChoiceName !== computerChoiceName) {
      computerScore += 1;
    }
  
    scoresElement.textContent = `${playerScore} - ${computerScore}`;
  
    if (playerScore === 5 || computerScore === 5) {
      const winner = playerScore === 5 ? 'You won the game!' : 'Computer won the game!';
      gameOverMessage.textContent = winner;
      gameOverMessage.style.display = 'block';
      playAgainButton.style.display = 'block';
      playAgainButton.onclick = () => location.reload();
      logos.rock.style.visibility = 'hidden';
      logos.paper.style.visibility = 'hidden';
      logos.scissors.style.visibility = 'hidden';
    }
  }
  
  function handleLogoClick(choice) {
    logos.selected.src = choices[choice];
    logos.selected.style.display = 'block';
  
    const randomIndex = Math.floor(Math.random() * Object.values(choices).length);
    logos.computer.src = Object.values(choices)[randomIndex];
    logos.computer.style.display = 'block';
  
    updateScores(logos.selected.src, logos.computer.src);
  }
  
  logos.rock.addEventListener('click', () => handleLogoClick('rock'));
  logos.paper.addEventListener('click', () => handleLogoClick('paper'));
  logos.scissors.addEventListener('click', () => handleLogoClick('scissors'));
  