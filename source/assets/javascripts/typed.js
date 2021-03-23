import Typed from 'typed.js';

const initTyped = () => {
  new Typed('#element', {
    strings: ["To my projects"],
    typeSpeed: 40,
    loop: true,
    startDelay: 30,
    backSpeed: 10,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  });
}

export { initTyped };
