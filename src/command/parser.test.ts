import { Direction } from '../types/Direction';
import { parseCommand } from './parser';

describe('commandParser tests', () => {
  [
    {
      commandText: 'PLACE 0,0,EAST',
      expectedCommand: {
        command: 'PLACE',
        args: {
          x: 0,
          y: 0,
          direction: Direction.EAST,
        },
      },
    },
    {
      commandText: 'MOVE',
      expectedCommand: {
        command: 'MOVE',
      },
    },
    {
      commandText: 'LEFT',
      expectedCommand: {
        command: 'LEFT',
      },
    },
    {
      commandText: 'RIGHT',
      expectedCommand: {
        command: 'RIGHT',
      },
    },
    {
      commandText: 'REPORT',
      expectedCommand: {
        command: 'REPORT',
      },
    },
  ].forEach(({ commandText, expectedCommand }) => {
    it(`Valid command text ${commandText} should be parsed into valid command`, () => {
      const command = parseCommand(commandText);
      expect(command).toEqual(expectedCommand);
    });
  });

  [
    'PLACE a,0,EAST',
    'PLACE 0,b,EAST',
    'PLACE 0,b',
    'PLACE WEST',
    'PLACE SOUTH',
    'PLACE 0,0',
    'PLACE',
    'LEFT 0,0,EAST',
    'MAP',
    'place',
    'left',
  ].forEach((commandText) => {
    it('Invalid command text should be parsed into undefined', () => {
      const command = parseCommand(commandText);
      expect(command).toBeUndefined();
    });
  });
});
