import { Direction } from './Direction';
import { RobotCoordinates } from './RobotCoordinates';
import { Board } from './Board';
import { CommandGroup } from './Command';

export class Robot {
  private _x: number;
  private _y: number;
  private _direction: Direction;
  private _placed: boolean;
  private _board: Board;

  constructor(board: Board) {
    this._placed = false;
    this._board = board;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get direction(): Direction {
    return this._direction;
  }

  public left(): void {
    if (!this._placed) {
      return;
    }
    this._direction += 1;

    if (this._direction > 4) {
      this._direction = 1;
    }
  }

  public right(): void {
    if (!this._placed) {
      return;
    }

    this._direction -= 1;
    if (this._direction === 0) {
      this._direction = 4;
    }
  }

  public move(): void {
    if (!this._placed) {
      return;
    }

    const { x: xMovement, y: yMovement } = Robot._movingMatrix[Direction[this._direction]];
    if (this._isOutOfBound(this._x + xMovement, this._y + yMovement)) {
      return;
    }
    this._x += xMovement;
    this._y += yMovement;
  }

  public place(x: number, y: number, direction: Direction): void {
    if (this._isOutOfBound(x, y)) {
      return;
    }

    this._x = x;
    this._y = y;
    this._direction = direction;
    this._placed = true;
  }

  public report(): void {
    console.log(`Output: ${this._x},${this._y},${Direction[this._direction]}`);
  }

  public exec(commandGroup: CommandGroup): void {
    switch (commandGroup.command) {
      case 'PLACE':
        const { x, y, direction } = commandGroup.args;
        this.place(x, y, direction);
        break;
      case 'MOVE':
        this.move();
        break;
      case 'LEFT':
        this.left();
        break;
      case 'RIGHT':
        this.right();
        break;
      case 'REPORT':
        this.report();
        break;
    }
  }

  private _isOutOfBound(x: number, y: number): boolean {
    const { width, height } = this._board;

    const xOutOfBounds = x < 0 || x >= width;
    const yOutOfBounds = y < 0 || y >= height;

    if (xOutOfBounds || yOutOfBounds) {
      return true;
    }

    return false;
  }

  private static _movingMatrix: { [direction in keyof typeof Direction]: RobotCoordinates } = {
    NORTH: {
      x: 0,
      y: 1,
    },
    WEST: {
      x: -1,
      y: 0,
    },
    SOUTH: {
      x: 0,
      y: -1,
    },
    EAST: {
      x: 1,
      y: 0,
    },
  };
}
