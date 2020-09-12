(function () {
  const form = document.querySelector("form");
  const mssgCard = document.getElementById("message-form");
  const mssgInput = document.getElementById("message-input");
  const linkCard = document.getElementById("link-form");
  const linkInput = document.getElementById("link-input");
  const mssgShowCard = document.getElementById("message-show");

  const { hash } = this.location;

  if (hash) {
    const decoded = atob(hash.replace("#", ""));
    showDecodedMssg(decoded);
  }

  function handleFormSubmit() {
    const encodedMssg = btoa(mssgInput.value);
    showURL(encodedMssg);
  }

  function showURL(encodedMssg) {
    mssgCard.classList.add("hide");
    linkCard.classList.remove("hide");
    linkInput.value = `${this.location}#${encodedMssg}`;
    linkInput.select();
  }

  function showDecodedMssg(decodedMssg) {
    mssgCard.classList.add("hide");
    mssgShowCard.classList.remove("hide");
    mssgShowCard.querySelector("h1").textContent = decodedMssg;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit();
  });
})();
