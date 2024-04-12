const { log } = console;

function logger(func, logFunc) {
  return (...args) => {
    const out = `${func.name} ${args.join()} $VAR`;

    logFunc(out.replace('$VAR', 'statrs'));
    const result = func();
    logFunc(out.replace('$VAR', 'statrs'));

    return result;
  };
}

const l = logger(log, log);

log(l(1, 2, 3));
