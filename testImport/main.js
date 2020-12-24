import createButton from "./button.js";

const addButton = (elemId) => {
  const targetElem = elemId
    ? document.getElementById(elemId)
    : document.body.firstElementChild;
  const targetParent = targetElem.parentNode;
  const buttonElem = createButton();

  console.log("targetParent: %o", targetParent);
  console.log("targetElem: %o", targetElem);
  console.log("buttonElem: %o", buttonElem);

  targetParent.insertBefore(buttonElem, targetElem);
};
console.log("Calling addButton()");
addButton();
