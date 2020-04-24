import { processCommand } from '.';
import { Robot } from './types/Robot';

describe('index tests', () => {
  let robot: Robot;
  const board = {
    width: 5,
    height: 5,
    robots: [],
  };

  beforeEach(() => {
    robot = new Robot(board);
    board.robots.push(robot);
  });

  describe('processCommand tests', () => {
    const exec = (Robot.prototype.exec = jest.fn());
    const log = (console.log = jest.fn());

    beforeEach(() => {
      jest.resetAllMocks();
    });

    ['PLACE 1,2,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'].forEach((commandText) => {
      it('Valid command should be processed', () => {
        processCommand(commandText);
        expect(exec).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith('Nice one! Next Command');
      });
    });

    ['PLACE 2,NORTH', 'PLACE NORTH', 'UP', 'DOWN', 'ROGER'].forEach((commandText) => {
      it('Invalid command should not be processed', () => {
        processCommand(commandText);
        expect(exec).not.toHaveBeenCalled();
        expect(log).toHaveBeenCalledWith('Not a valid command.');
      });
    });
  });
});
