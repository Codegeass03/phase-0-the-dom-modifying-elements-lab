const mainElem = document.querySelector('main#main');
if (mainElem) {
  mainElem.remove();
}
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = 'Vee is the champion';
document.body.appendChild(newHeader);
