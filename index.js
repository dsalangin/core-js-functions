const { log } = console;

function hiHello() {
  console.log('hello world');
}

function getFunctionBody(func) {
  return func.toString();
  // return Function.prototype.toString.call(func);
}

log(getFunctionBody(hiHello));

// toString()
//   .replace(/^[^{]*{\s*/, '')
//   .replace(/\s*}[^}]*$/, '');
