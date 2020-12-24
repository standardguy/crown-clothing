const createButton = () => {
  const wrapper = document.createElement("div");
  wrapper.id = "button-wrapper";
  const button = document.createElement("button");
  button.textContent = "Send Auth";
  wrapper.appendChild(button);
  return wrapper;
};

export default createButton;
