 export const sortData = (array: any[], comparator: (a: any, b: any) => number) => {
  if (!Array.isArray(array) || array.length === 0) {
    return array;
  }
  const stabilizedArray = array.map((el, index) => [el, index] as [any, number]);
  stabilizedArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedArray.map((el) => el[0]);
};

