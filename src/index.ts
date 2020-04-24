import { createInterface } from 'readline';

import { config } from './config';
import { Board } from './types/Board';
import { Robot } from './types/Robot';
import { parseCommand } from './command/parser';

const board: Board = {
  ...config.dimensions,
  robots: [],
};
const robot = new Robot(board);
board.robots.push(robot);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = () => {
  rl.question('Please enter a Toy Robot command: ', (commandText) => {
    if (commandText == 'exit') {
      console.log('Have a nice day!');
      return rl.close();
    }
    const commandGroup = parseCommand(commandText);
    if (commandGroup) {
      robot.exec(commandGroup);
      console.log('Nice one! Next Command');
    } else {
      console.log('Not a valid command.');
    }

    prompt();
  });
};

prompt();
