export interface IGameChoice {
  id: number;
  uri: any;
  name: string;
  color: string;
  position: {
    x: number;
    y: number;
  };
}

export const gameChoice = [
  {
    id: 0,
    uri: require('../../assets/icon-scissors.png'),
    name: 'scissors',
    color: 'orange',
    position: { x: 100, y: -20 }
  },
  {
    id: 1,
    uri: require('../../assets/icon-paper.png'),
    name: 'paper',
    color: 'blue',
    position: { x: 240, y: 80 }
  },
  {
    id: 2,
    uri: require('../../assets/icon-rock.png'),
    name: 'rock',
    color: 'red',
    position: { x: 180, y: 240 }
  },
  {
    id: 3,
    uri: require('../../assets/icon-lizard.png'),
    name: 'lizard',
    color: 'purple',
    position: { x: 0, y: 240 }
  },
  {
    id: 4,
    uri: require('../../assets/icon-spock.png'),
    name: 'spock',
    color: 'cyan',
    position: { x: -40, y: 80 }
  }
];
