import { Board } from '../types/Board';
import { config } from '../config';
import { Robot } from '../types/Robot';
import integrationTests from './integration.json';
import { parseCommand } from '../command/parser';
import { Direction } from '../types/Direction';

const board: Board = {
  ...config.dimensions,
  robots: [],
};
const robot = new Robot(board);
board.robots.push(robot);

describe('integration tests', () => {
  integrationTests.forEach(({ commands, output }) => {
    it('each integration test case should pass', () => {
      commands.forEach((command) => {
        const commandGroup = parseCommand(command);
        if (commandGroup) {
          robot.exec(commandGroup);
        }
      });
      expect({ x: robot.x, y: robot.y, direction: Direction[robot.direction] }).toEqual(output);
    });
  });
});
