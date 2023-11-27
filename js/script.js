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
  newPar.textContent = resText;

  newBlock.append(newPar);
  testBody.append(newBlock);
}
