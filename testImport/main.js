import createButton from "./button.js";

const addButton = (elemId) => {
  const targetElem = elemId ? document.getElementById(elemId) : document.html;
  const buttonElem = createButton();
  document.body.insertBefore(buttonElem, targetElem);
};
