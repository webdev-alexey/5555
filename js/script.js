let testArea = document.getElementById("test-area");
let testButton = document.querySelector(".test-body-form-button");

testButton.addEventListener("click", (e) => {
  e.preventDefault();
  testFunc(testArea.value);
});

function testFunc(value) {
  let testBody = document.querySelector(".test-body");
  let resText = value.replace(/ё/gi, "е");

  let newBlock = document.createElement("div");
  let newPar = document.createElement("p");

  newBlock.classList.add("new-block");
  newPar.classList.add("newPar");
  newPar.innerHTML = resText;
  for (var i = 0, l = newPar.childNodes.length; i < l; i++) {
    if (newPar.childNodes[i].hasChildNodes() && newPar.childNodes.length > 1) {
      newPar.childNodes[i].innerHTML = changeQuotes(
        newPar.childNodes[i].innerHTML,
      );
    } else {
      newPar.childNodes[i].textContent = newPar.childNodes[i].textContent
        .replace(/\x27/g, "\x22")
        .replace(/(\w)\x22(\w)/g, "$1\x27$2")
        .replace(/(^)\x22(\s)/g, "$1»$2")
        .replace(/(^|\s|\()"/g, "$1«")
        .replace(/"(\;|\!|\?|\:|\.|\,|$|\)|\s)/g, "»$1");
    }
  }

  newBlock.append(newPar);
  testBody.append(newBlock);
}
