const createButton = (elemId) => {
  const wrapper = document.createElement("div");
  wrapper.id = "button-wrapper";
  const button = document.createElement("button");
  button.textContent = "Send Auth";
  return wrapper.appendChild(button);
};

export default createButton;
