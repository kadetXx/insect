export const flattenObj = (object: any): any[] => {
  // reduce throgh the object
  const result = Object.keys(object).reduce(function (array, current) {
    // check if the current value is an object
    const isObj =
      typeof object[current] === "object" && object[current] !== null;

    // if it is an object
    if (isObj) {
      // pass it through the function again recursively
      const values = flattenObj(object[current]);

      // and then add the result to the cummulative array
      return array.concat(values as any);
    } else {
      // if it isn't an object, just concat to cummulative array
      return array.concat(object[current]);
    }
  }, []);

  return result;
};

export default flattenObj;
