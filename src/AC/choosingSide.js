import { CHOOSE_X, CHOOSE_0, RESET } from '../constants';

export const chooseX = () => (
  {
    type   : CHOOSE_X
  }
);

export const choose0 = () => (
   {
    type   : CHOOSE_0
  }
);

export const reset = () => (
  {
    type   : RESET
  }
);