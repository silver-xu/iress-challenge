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

describe('integration tests', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot(board);
    board.robots = [robot];
  });

  integrationTests.forEach(({ test, commands, output }) => {
    it(`${test} test case should pass`, () => {
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
