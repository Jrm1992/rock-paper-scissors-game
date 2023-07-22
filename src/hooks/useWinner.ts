interface useWinner {
  playerChoice: number;
  computerChoice: number;
}

export default function useWinner({ playerChoice, computerChoice }: useWinner) {
  const choiceSum = playerChoice + computerChoice;

  if (playerChoice === computerChoice) {
    return 'tie';
  }

  if (choiceSum % 2 === 0) {
    return playerChoice > computerChoice ? 'player' : 'computer';
  } else {
    return playerChoice > computerChoice ? 'computer' : 'player';
  }
}
