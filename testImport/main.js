import createButton from "./button.js";

const addButton = (elemId) => {
  const targetElem = elemId
    ? document.getElementById(elemId)
    : document.body.firstElementChild;
  const targetParent = targetElem.parentNode;
  const buttonElem = createButton();

  targetParent.insertBefore(buttonElem, targetElem);
};
