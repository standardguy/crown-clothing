import createButton from "./button.js";

const addButton = (elemId) => {
  const targetElem = elemId ? document.getElementById(elemId) : document.body;
  const buttonElem = createButton();
  targetElem.parentNode.insertBefore(buttonElem, targetElem);
};
