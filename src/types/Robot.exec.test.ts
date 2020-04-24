import { Direction } from './Direction';
import { Robot } from './Robot';

describe('Robot tests', () => {
  describe('exec method tests', () => {
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

    [
      {
        commandGroup: { command: 'PLACE', args: { x: 0, y: 0, direction: Direction.WEST } },
        expectToCall: Robot.prototype.place = jest.fn(),
        expectedArgs: [0, 0, Direction.WEST],
      },
      {
        commandGroup: { command: 'MOVE' },
        expectToCall: Robot.prototype.move = jest.fn(),
      },
      {
        commandGroup: { command: 'LEFT' },
        expectToCall: Robot.prototype.left = jest.fn(),
      },
      {
        commandGroup: { command: 'RIGHT' },
        expectToCall: Robot.prototype.right = jest.fn(),
      },
      {
        commandGroup: { command: 'REPORT' },
        expectToCall: Robot.prototype.report = jest.fn(),
      },
    ].forEach(({ commandGroup, expectToCall, expectedArgs }) => {
      it(`For commandGroup ${commandGroup.command}, a corresponding command in Robot should be called accordingly with args`, () => {
        robot.exec(commandGroup);

        if (!expectedArgs) {
          expect(expectToCall).toHaveBeenCalledTimes(1);
        } else {
          expect(expectToCall).toHaveBeenCalledWith(...expectedArgs);
        }
      });
    });
  });
});
