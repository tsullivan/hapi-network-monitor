/*
 * Sum up values in a accumulutor object with the next values
 * @param {String} property The property of the objects to roll up
 * @param {Object} accum The accumulator object
 * @param {Object} next The object containing next values
 */
function sumAccumulate(property, accum, next) {
  const accumProp = accum[property];
  const nextProp = next[property];
  if (Object.prototype.toString.call(nextProp) === '[object Object]') {
    const newProps = {};
    for (const innerKey in nextProp) {
      if (nextProp.hasOwnProperty(innerKey)) {
        const tempAccumProp = accumProp || {};
        newProps[innerKey] = sumAccumulate(innerKey, tempAccumProp, nextProp);
      }
    }
    return Object.assign({}, accumProp, newProps);
  } else {
    const previous = accumProp || 0; // treat null / undefined as 0
    const nextVal = nextProp || 0;
    return previous + nextVal; // perform sum
  }
}

module.exports = {
  sumAccumulate
};
