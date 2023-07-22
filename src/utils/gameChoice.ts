export interface IGameChoice {
  id: number;
  img: string;
  name: string;
}

export const gameChoice = [
  { id: 0, img: 'assets/icon-scissors.png', name: 'scissors' },
  { id: 1, img: 'assets/icon-paper.png', name: 'paper' },
  { id: 2, img: 'assets/icon-rock.png', name: 'rock' },
  { id: 3, img: 'assets/icon-lizard.png', name: 'lizard' },
  { id: 4, img: 'assets/icon-spock.png', name: 'spock' }
];
