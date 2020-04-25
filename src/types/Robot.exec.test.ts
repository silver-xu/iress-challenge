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

    type commandMethodType = 'place' | 'move' | 'left' | 'right' | 'report' | 'exec';

    beforeEach(() => {
      robot = new Robot(board);
      board.robots = [robot];
    });

    [
      {
        commandGroup: { command: 'PLACE', args: { x: 0, y: 0, direction: Direction.WEST } },
        expectedArgs: [0, 0, Direction.WEST],
        methodToCall: 'place',
      },
      {
        commandGroup: { command: 'MOVE' },
        methodToCall: 'move',
      },
      {
        commandGroup: { command: 'LEFT' },
        methodToCall: 'left',
      },
      {
        commandGroup: { command: 'RIGHT' },
        methodToCall: 'right',
      },
      {
        commandGroup: { command: 'REPORT' },
        methodToCall: 'report',
      },
    ].forEach(({ commandGroup, methodToCall, expectedArgs }) => {
      it(`For commandGroup ${commandGroup.command}, a corresponding command in Robot should be called accordingly with args`, () => {
        const call = jest.spyOn(robot, methodToCall as commandMethodType);
        robot.exec(commandGroup);

        if (!expectedArgs) {
          expect(call).toHaveBeenCalledTimes(1);
        } else {
          expect(call).toHaveBeenCalledWith(...expectedArgs);
        }
      });
    });
  });
});
