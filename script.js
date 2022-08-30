document.getElementById('file').addEventListener('change', function selectedFileChanged() {
  if (this.files.length === 0) {
    console.log('No file selected.');
    return;
  };

  const reader = new FileReader();
  reader.onload = function fileReadCompleted() {
    // when the reader is done, the content is in reader.result.
    console.log(reader.result);
    document.getElementById('readResult').innerHTML = reader.result;
  };
  reader.readAsText(this.files[0]);
});
// create new shifted alphabet
const alpha = 'abcdefghijklmnopqrstuvwxyz';
let newAlpha = '';
function shift(n) {
  for (let i=0; i<alpha.length; i++) {
    const offset = (i+n)%alpha.length;
    newAlpha += alpha[offset];
  };
};

// encrypting function
function encode() {
  shift(4);
  console.log(newAlpha);
  let message = document.getElementById('readResult').textContent;
  console.log(message);
  message = message.toLowerCase();
  console.log(message);
  let result = '';
  for (let i=0; i<message.length; i++) {
    const index = alpha.indexOf(message[i]);
    if (index > -1) {
      result += newAlpha[index];
    } else {
      result += ' ';
    }
  }
  console.log(result);
  document.getElementById('cipher').innerHTML = result;
  return result;
}
