const formatPromise = promise => {
  return promise
    .then(res => {
      return [null, res];
    })
    .catch(e => {
      return [e, null];
    });
};

export { formatPromise };
