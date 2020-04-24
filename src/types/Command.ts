import { Direction } from './Direction';

export const commandTypes = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];
export type CommandType = typeof commandTypes[number];

export interface CommandGroup {
  command: CommandType;
  args?: Args;
}

export interface Args {
  x: number;
  y: number;
  direction: Direction;
}
