export const COMPARATORS = {
  больше: {
    label: '>',
    fn: (a, b) => a > b,
  },
  меньше: {
    label: '<',
    fn: (a, b) => a < b,
  },
  равно: {
    label: '=',
    fn: (a, b) => a === b,
  },
  'не меньше': {
    label: '>=',
    fn: (a, b) => a >= b,
  },
  'не больше': {
    label: '<=',
    fn: (a, b) => a <= b,
  },
};
