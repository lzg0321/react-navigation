const POP = 'Navigation/POP';
const POP_TO_TOP = 'Navigation/POP_TO_TOP';
const PUSH = 'Navigation/PUSH';
const RESET = 'Navigation/RESET';
const REPLACE_WITH_ANIMATION = 'Navigation/REPLACE_WITH_ANIMATION';
const REPLACE = 'Navigation/REPLACE';
const COMPLETE_TRANSITION = 'Navigation/COMPLETE_TRANSITION';

const pop = payload => ({
  type: POP,
  ...payload,
});

const popToTop = payload => ({
  type: POP_TO_TOP,
  ...payload,
});

const push = payload => ({
  type: PUSH,
  ...payload,
});

const reset = payload => ({
  type: RESET,
  ...payload,
});

const replace = payload => ({
  type: REPLACE,
  ...payload,
});

const replaceWithAnimation = payload => ({
  type: REPLACE_WITH_ANIMATION,
  ...payload,
});

const completeTransition = payload => ({
  type: COMPLETE_TRANSITION,
  ...payload,
});

export default {
  POP,
  POP_TO_TOP,
  PUSH,
  RESET,
  REPLACE,
  REPLACE_WITH_ANIMATION,
  COMPLETE_TRANSITION,

  pop,
  popToTop,
  push,
  reset,
  replace,
  replaceWithAnimation,
  completeTransition,
};
