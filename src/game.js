

let isPlayerTurn = true;
let winCount = 0;
let lossCount = 0;
let playerChoice = null;
let cpuChoice = null;
let Choices = {
  rock: {
    selected: false,
    value: "rock",
  },
  paper: {
    selected: false,
    value: "paper",
  },
  scissor: {
    selected: false,
    value: "scissor",
  },
};

  function selectChoiceRock(event) {
    event.preventDefault();
    if (isPlayerTurn == true) {
      playerChoice = Choices.rock.value;
      Choices.rock.selected = true;
      isPlayerTurn = false;
      return playerChoice;
    } else {
      cpuChoice = Choices.rock.value;
      isPlayerTurn = true;
      return cpuChoice;
    }
  }

 function selectChoicePaper(event) {
    event.preventDefault();
    if (isPlayerTurn == true) {
      playerChoice = Choices.paper.value;
      Choices.paper.selected = true;
      isPlayerTurn = false;
      return playerChoice;
    } else {
      cpuChoice = Choices.paper.value;
      isPlayerTurn = true;
      return cpuChoice;
    }
  }

  function selectChoiceScissor(event) {
    event.preventDefault();
    if (isPlayerTurn == true) {
      playerChoice = Choices.scissor.value;
      Choices.scissor.selected = true;
      isPlayerTurn = false;
      return playerChoice;
    } else {
      cpuChoice = Choices.scissor.value;
      isPlayerTurn = true;
      return cpuChoice;
    }
  }

  function checkSelection(event) {
    event.preventDefault();
    if (playerChoice && cpuChoice) {
      if (playerChoice == cpuChoice) {
        return "Its a tie!";
      } else if (
        playerChoice == Choices.rock.value &&
        cpuChoice == Choices.scissor.value
      ) {
        Choices.rock.selected = false;
        winCount += 1;
        return "you win!";
      } else if (
        playerChoice == Choices.paper.value &&
        cpuChoice == Choices.rock.value
      ) {
        Choices.paper.selected = false;
        winCount += 1;
        return "you win!";
      } else if (
        playerChoice == Choices.scissor.value &&
        cpuChoice == Choices.paper.value
      ) {
        Choices.scissor.selected = false;
        winCount += 1;
        return "you win!";
      } else {
        Choices.rock.selected = false;
        Choices.scissor.selected = false;
        Choices.paper.selected = false;
        lossCount += 1;
        return "you lose!";
      }
    }
  }

  function cpuTurn() {
    if (isPlayerTurn == false) {
      cpuRandomSelection();
    }
  }

  function cpuRandomSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
      selectChoiceRock();
    } else if (randomNumber == 1) {
      selectChoicePaper();
    } else {
      selectChoiceScissor();
    }
  }


