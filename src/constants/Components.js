const backgrounds = {
  'boomparis': () => import("@demo/Backgrounds/BoomparisDemo"),
  'rejouice': () => import("@demo/Backgrounds/RejouiceDemo"),
};

export const componentMap = {
  ...backgrounds,
};
