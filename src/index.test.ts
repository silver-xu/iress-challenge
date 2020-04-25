import * as index from '.';
import { Robot } from './types/Robot';

describe('index tests', () => {
  let robot: Robot;
  const board = {
    width: 5,
    height: 5,
    robots: [],
  };

  const mockConsoleLog = (console.log = jest.fn());

  beforeEach(() => {
    robot = new Robot(board);
    board.robots = [robot];
  });

  describe('processCommand tests', () => {
    const exec = (Robot.prototype.exec = jest.fn());

    beforeEach(() => {
      jest.resetAllMocks();
    });

    ['PLACE 1,2,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'].forEach((commandText) => {
      it('Valid command should be processed', () => {
        index.processCommand(commandText);
        expect(exec).toHaveBeenCalledTimes(1);
        expect(mockConsoleLog).toHaveBeenCalledWith('Nice one! Next Command');
      });
    });

    ['PLACE 2,NORTH', 'PLACE NORTH', 'UP', 'DOWN', 'ROGER'].forEach((commandText) => {
      it('Invalid command should not be processed', () => {
        index.processCommand(commandText);
        expect(exec).not.toHaveBeenCalled();
        expect(mockConsoleLog).toHaveBeenCalledWith('Not a valid command.');
      });
    });
  });

  describe('robotPrompt tests', () => {
    it('exit command should prompt greeting info and close readline', () => {
      const readline = {
        createInterface: jest.fn().mockReturnValue({
          question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('exit')),
          close: jest.fn().mockImplementationOnce(() => undefined),
        }),
      };

      const mockRl = readline.createInterface();

      index.robotPrompt(mockRl);
      expect(mockConsoleLog).toHaveBeenLastCalledWith('Have a nice day!');
      expect(mockRl.close).toHaveBeenCalledTimes(1);
    });

    it('non-exit command should be processed and prompted again', () => {
      const readline = {
        createInterface: jest.fn().mockReturnValue({
          question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('foo')),
          close: jest.fn().mockImplementationOnce(() => undefined),
        }),
      };
      const processCommandSpy = jest.spyOn(index, 'processCommand');

      const mockRl = readline.createInterface();

      index.robotPrompt(mockRl);
      expect(processCommandSpy).toHaveBeenCalledTimes(1);
    });
  });
});
