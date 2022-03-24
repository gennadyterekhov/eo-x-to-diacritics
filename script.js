const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

const transliterationTable = {
  CX: 'Ĉ',
  Cx: 'Ĉ',
  cX: 'Ĉ',
  cx: 'ĉ',

  GX: 'Ĝ',
  Gx: 'Ĝ',
  gX: 'Ĝ',
  gx: 'ĝ',

  HX: 'Ĥ',
  Hx: 'Ĥ',
  hX: 'Ĥ',
  hx: 'ĥ',

  JX: 'Ĵ',
  Jx: 'Ĵ',
  jX: 'Ĵ',
  jx: 'ĵ',

  SX: 'Ŝ',
  Sx: 'Ŝ',
  sX: 'Ŝ',
  sx: 'ŝ',

  UX: 'Ŭ',
  Ux: 'Ŭ',
  uX: 'Ŭ',
  ux: 'ŭ',
};

const transliterate = function(originalText) {
  return originalText.replaceAll(
    /CX|Cx|cX|cx|GX|Gx|gX|gx|HX|Hx|hX|hx|JX|Jx|jX|jx|SX|Sx|sX|sx|UX|Ux|uX|ux/g,
    (match) => transliterationTable[match]
  );
}

const inputHandler = function() {
  outputElement.value = transliterate(inputElement.value);
}

inputElement.addEventListener(
  'input',
  inputHandler
);