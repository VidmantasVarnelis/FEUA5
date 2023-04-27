class SoccerPlayersService {
  #API_END_POINT = 'https://parseapi.back4app.com/classes/SoccerPlayers';
  #id = '0Y2zhsWn6k0K6xihYL3Rtk7Ryu2yLnuPkavHVHJW';
  #key = 'tboXSFNioTZXzvOQ1kardRg9MrHdV3bbfmOpW1RZ';
  async createSoccerPlayer(data) {
    try {
      const response = await fetch(this.#API_END_POINT, {
        method: 'POST',
        headers: {
          'X-Parse-Application-Id': this.#id,
          'X-Parse-REST-API-Key': this.#key,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const createdPlayer = await response.json();
      return createdPlayer;
    } catch (err) {
      console.log(err);
    }
  }
}

const formEl = document.getElementById('add-player');
if (formEl) {
  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    const attributes = [];
    const yearValue = event.target.year.value;
    const attributesEl = event.target.querySelectorAll(
      'input[name="attributes"]'
    );
    attributesEl.forEach((el) => {
      if (el.checked) {
        attributes.push(el.value);
      }
    });

    if (isNaN(yearValue)) {
      return alert('Year is not valid!');
    }

    const data = {
      playerName: event.target.name.value,
      yearOfBirth: Number(event.target.year.value),
      emailContact: event.target.email.value,
      attributes: attributes,
    };

    const apiInstance = new SoccerPlayersService();
    const player = await apiInstance.createSoccerPlayer(data);
    if (player.objectId) {
      location.replace('./');
    } else {
      alert('Player is not created!');
    }
  });
}

// Task
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// Create a website with api data
