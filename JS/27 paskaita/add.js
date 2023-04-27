const END_POINT = "https://robust-safe-crafter.glitch.me/";

const form = document.getElementById("add-property");
const messagePara = document.getElementById("message");

const postProperty = async requestBody => {
  try {
    const response = await fetch(END_POINT, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    if (response.ok) {
      messagePara.textContent = data.msg;
    } else {
      messagePara.textContent = data.error;
    }

    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

if (form && messagePara) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const imageInput = e.target.querySelector("[name=image]");
    const priceInput = e.target.querySelector("[name=price]");
    const descriptionInput = e.target.querySelector("[name=description]");
    const cityInput = e.target.querySelector("[name=city]");

    const body = {
      image: imageInput.value,
      city: cityInput.value,
      price: priceInput.value ? parseInt(priceInput.value) : 0,
      description: descriptionInput.value
    };

    postProperty(body);
  });
}
