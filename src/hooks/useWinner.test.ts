import useWinner from './useWinner';

describe('useWinner', () => {
  it('returns "player" when playerChoice is greater than computerChoice and choiceSum is even', () => {
    const playerChoice = 2;
    const computerChoice = 0;
    const winner = useWinner({ playerChoice, computerChoice });
    expect(winner).toBe('player');
  });

  it('returns "computer" when computerChoice is greater than playerChoice and choiceSum is even', () => {
    const playerChoice = 0;
    const computerChoice = 2;
    const winner = useWinner({ playerChoice, computerChoice });
    expect(winner).toBe('computer');
  });

  it('returns "computer" when playerChoice is greater than computerChoice and choiceSum is odd', () => {
    const playerChoice = 3;
    const computerChoice = 2;
    const winner = useWinner({ playerChoice, computerChoice });
    expect(winner).toBe('computer');
  });

  it('returns "player" when computerChoice is greater than playerChoice and choiceSum is odd', () => {
    const playerChoice = 2;
    const computerChoice = 3;
    const winner = useWinner({ playerChoice, computerChoice });
    expect(winner).toBe('player');
  });

  it('returns "tie" when computerChoice is equal to playerChoice', () => {
    const playerChoice = 2;
    const computerChoice = 2;
    const winner = useWinner({ playerChoice, computerChoice });
    expect(winner).toBe('tie');
  });
});
