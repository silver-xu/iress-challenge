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
      board.robots = [robot];
    });

    [
      {
        commandGroup: { command: 'PLACE', args: { x: 0, y: 0, direction: Direction.WEST } },
        expectedArgs: [0, 0, Direction.WEST],
      },
      {
        commandGroup: { command: 'MOVE' },
      },
      {
        commandGroup: { command: 'LEFT' },
      },
      {
        commandGroup: { command: 'RIGHT' },
      },
      {
        commandGroup: { command: 'REPORT' },
      },
    ].forEach(({ commandGroup, expectedArgs }) => {
      it(`For commandGroup ${commandGroup.command}, a corresponding command in Robot should be called accordingly with args`, () => {
        const call = jest.spyOn(robot, commandGroup.command.toLowerCase() as any);
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
