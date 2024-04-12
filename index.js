const { log } = console;

const attempt = 0;
// const retryer = retry(() => {
//   if (++attempt % 2) throw new Error('test');
//   else return attempt;
// }, 2);
// retryer() => 2

function retry(func, attempts) {
  let currentAttempts = 0;
  const retryer = () => {
    try {
      currentAttempts += 1;
      return func();
    } catch {
      if (currentAttempts <= attempts) {
        retryer();
      }
      return attempts;
    }
  };
  return retryer;
}
// throw new Error('Not implemented');

log(
  retry(() => {
    if (0) throw new Error('test');
    else return 'attempt';
  }, 2)()
);

// toString()
//   .replace(/^[^{]*{\s*/, '')
//   .replace(/\s*}[^}]*$/, '');
