const END_POINT = "https://robust-safe-crafter.glitch.me/";

const state = [];

const filterKlaipeda = document.getElementById("filter-klaipeda");

filterKlaipeda.addEventListener("click", () => {
  const filteredProps = state.filter(prop => prop.city === "Klaipeda");

  console.log("remaining state: ", state);

  renderCards(filteredProps);
});

const renderCards = cardsData => {
  const outputContainer = document.getElementById("cards");

  // Early return if container was not found
  if (!outputContainer) {
    return;
  }

  outputContainer.innerHTML = "";

  cardsData.forEach(property => {
    // Card parent container (.card)
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const image = document.createElement("img");
    image.src = property.image;

    // .card-content
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("card-content");

    // .card-price
    const price = document.createElement("p");
    price.classList.add("card-price");
    price.textContent = `€ ${property.price}`;

    contentContainer.append(price);
    // .card-city
    const city = document.createElement("p");
    city.classList.add("card-city");
    city.textContent = property.city;

    contentContainer.append(city);
    // .card-description

    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = property.description;

    contentContainer.append(description);
    // Finishing up

    cardContainer.append(image, contentContainer);

    // Adding to outputContainer
    outputContainer.append(cardContainer);
  });

  console.log("From util: ", cardsData);
};

const fetchProperties = async () => {
  try {
    const response = await fetch(END_POINT);

    const data = await response.json();

    if (response.ok) {
      data.forEach(prop => state.push(prop));
    }

    renderCards(data);
  } catch (err) {
    console.error(err);
  }
};

fetchProperties();
