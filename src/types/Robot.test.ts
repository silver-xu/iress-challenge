import { Robot } from './Robot';
import { Direction } from './Direction';

describe('Robot tests', () => {
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

  describe('place method tests', () => {
    it('by passing valid x, y and direction the x, y and direction properties should be correctly set', () => {
      robot.place(1, 2, Direction.EAST);

      expect(robot.x).toEqual(1);
      expect(robot.y).toEqual(2);
      expect(robot.direction).toEqual(Direction.EAST);
    });

    [
      { x: -1, y: 2, direction: Direction.EAST },
      { x: 1, y: -2, direction: Direction.EAST },
      { x: 5, y: 2, direction: Direction.EAST },
      { x: 1, y: 5, direction: Direction.EAST },
    ].forEach(({ x, y, direction }) => {
      it(`by passing x:${x}, y:${y}, direction:${Direction[direction]}, placement should not be out of bounds therefore unsuccessful`, () => {
        robot.place(x, y, direction);
        expect(robot.x).toBeUndefined();
        expect(robot.y).toBeUndefined();
        expect(robot.direction).toBeUndefined();
      });
    });
  });

  describe('left method tests', () => {
    [
      { testDirection: Direction.NORTH, expectedDirection: Direction.WEST },
      { testDirection: Direction.EAST, expectedDirection: Direction.NORTH },
      { testDirection: Direction.SOUTH, expectedDirection: Direction.EAST },
      { testDirection: Direction.WEST, expectedDirection: Direction.SOUTH },
    ].forEach(({ testDirection, expectedDirection }) => {
      it(`${Direction[testDirection]} should become ${Direction[expectedDirection]} after turning left`, () => {
        robot.place(0, 0, testDirection);
        robot.left();
        expect(robot.direction).toEqual(expectedDirection);
      });
    });
  });

  describe('right method tests', () => {
    [
      { testDirection: Direction.NORTH, expectedDirection: Direction.EAST },
      { testDirection: Direction.EAST, expectedDirection: Direction.SOUTH },
      { testDirection: Direction.SOUTH, expectedDirection: Direction.WEST },
      { testDirection: Direction.WEST, expectedDirection: Direction.NORTH },
    ].forEach(({ testDirection, expectedDirection }) => {
      it(`${Direction[testDirection]} should become ${Direction[expectedDirection]} after turning right`, () => {
        robot.place(0, 0, testDirection);
        robot.right();
        expect(robot.direction).toEqual(expectedDirection);
      });
    });
  });

  describe('move method tests', () => {
    const origin = { x: 1, y: 1 };
    [
      {
        placements: {
          ...origin,
          direction: Direction.NORTH,
        },
        expectedCoordinates: {
          x: 1,
          y: 2,
        },
      },
      {
        placements: {
          ...origin,
          direction: Direction.WEST,
        },
        expectedCoordinates: {
          x: 0,
          y: 1,
        },
      },
      {
        placements: {
          ...origin,
          direction: Direction.SOUTH,
        },
        expectedCoordinates: {
          x: 1,
          y: 0,
        },
      },
      {
        placements: {
          ...origin,
          direction: Direction.EAST,
        },
        expectedCoordinates: {
          x: 2,
          y: 1,
        },
      },
    ].forEach(({ placements, expectedCoordinates }) => {
      it('Non-edge placements should move to the next coordinates', () => {
        const { x, y, direction } = placements;
        robot.place(x, y, direction);
        robot.move();

        const { x: expectedX, y: expectedY } = expectedCoordinates;
        expect(robot.x).toEqual(expectedX);
        expect(robot.y).toEqual(expectedY);
      });
    });

    [
      {
        placements: {
          x: 0,
          y: 0,
          direction: Direction.WEST,
        },
        expectedCoordinates: {
          x: 0,
          y: 0,
        },
      },
      {
        placements: {
          x: 0,
          y: 0,
          direction: Direction.SOUTH,
        },
        expectedCoordinates: {
          x: 0,
          y: 0,
        },
      },
      {
        placements: {
          x: 4,
          y: 4,
          direction: Direction.NORTH,
        },
        expectedCoordinates: {
          x: 4,
          y: 4,
        },
      },
      {
        placements: {
          x: 4,
          y: 4,
          direction: Direction.EAST,
        },
        expectedCoordinates: {
          x: 4,
          y: 4,
        },
      },
    ].forEach(({ placements, expectedCoordinates }) => {
      it('Edge placements should move to the next coordinates', () => {
        const { x, y, direction } = placements;
        robot.place(x, y, direction);
        robot.move();

        const { x: expectedX, y: expectedY } = expectedCoordinates;
        expect(robot.x).toEqual(expectedX);
        expect(robot.y).toEqual(expectedY);
      });
    });
  });
});
