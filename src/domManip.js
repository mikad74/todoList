function createDiv(...classes) {
  const myDiv = document.createElement("div");
  for (var i = 0; i < classes.length; i++) {
    myDiv.classList.add(classes[i]);
  }
  return myDiv;
}

export { createDiv };
