import { Robot } from './Robot';

export interface Board {
  width: number;
  height: number;
  robots: Robot[];
}
