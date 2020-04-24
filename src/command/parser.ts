import { CommandGroup, commandTypes, Args } from '../types/Command';
import { Direction } from '../types/Direction';

const parseArgs = (argsText: string): Args | undefined => {
  const [xStr, yStr, direction] = argsText.split(',');
  const x = parseInt(xStr, 10);
  const y = parseInt(yStr, 10);
  if (isNaN(x) || isNaN(y) || !(direction in Direction)) {
    return undefined;
  }

  return {
    x,
    y,
    direction: Direction[direction],
  };
};

export const parseCommand = (commandText: string): CommandGroup | undefined => {
  const [command, argsText] = commandText.split(' ');
  if (!commandTypes.includes(command)) {
    return undefined;
  }

  if ((command === 'PLACE' && !argsText) || (command !== 'PLACE' && argsText)) {
    return undefined;
  }

  if (!argsText) {
    return { command };
  }

  const args = parseArgs(argsText);
  if (!args) {
    return undefined;
  }

  return {
    command,
    args,
  };
};
