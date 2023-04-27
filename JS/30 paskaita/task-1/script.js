// https://parse-dashboard.back4app.com/apps/ API sukurtas per cia

class SoccerPlayersService {
  #API_END_POINT = 'https://parseapi.back4app.com/classes/SoccerPlayers';
  #id = '0Y2zhsWn6k0K6xihYL3Rtk7Ryu2yLnuPkavHVHJW';
  #key = 'tboXSFNioTZXzvOQ1kardRg9MrHdV3bbfmOpW1RZ';
  async getAllSoccerPlayers() {
    try {
      const response = await fetch(this.#API_END_POINT, {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': this.#id,
          'X-Parse-REST-API-Key': this.#key,
          'Content-Type': 'application/json',
        },
      });
      const allPlayers = await response.json();
      return allPlayers;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteSoccerPlayer(id) {
    try {
      const response = await fetch(`${this.#API_END_POINT}/${id}`, {
        method: 'DELETE',
        headers: {
          'X-Parse-Application-Id': this.#id,
          'X-Parse-REST-API-Key': this.#key,
        },
      });
      const responseData = await response.json();
      return responseData;
    } catch (err) {
      console.log(err);
    }
  }

  async updateSoccerPlayer(id, data) {
    try {
      const response = await fetch(`${this.#API_END_POINT}/${id}`, {
        method: 'PUT',
        headers: {
          'X-Parse-Application-Id': this.#id,
          'X-Parse-REST-API-Key': this.#key,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedPlayer = await response.json();
      return updatedPlayer;
    } catch (err) {
      console.log(err);
    }
  }
}

{
  /* <tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>
	<button>Delete</button>
</td>
</tr> */
}

class WebsiteData {
  #apiInstance;
  #output;
  constructor() {
    this.#output = document.getElementById('output');
    this.#apiInstance = new SoccerPlayersService();
    this.render();
  }

  #createTableElements(players) {
    players.forEach((player) => {
      const row = document.createElement('tr');
      const playerName = document.createElement('td');
      const year = document.createElement('td');
      const contactInfo = document.createElement('td');
      const attributes = document.createElement('td');
      const actionsCell = document.createElement('td');
      const deleteBtn = document.createElement('button');
      const updateBtn = document.createElement('button');

      playerName.textContent = player.playerName;
      year.textContent = player.yearOfBirth;
      contactInfo.textContent = player.emailContact;
      attributes.textContent =
        player.attributes.length > 0
          ? player.attributes.join(',')
          : 'No player Attributes';
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.marginRight = '.5rem';
      updateBtn.textContent = 'Update';

      // addEventListeners
      deleteBtn.addEventListener('click', async () => {
        const response = await this.#apiInstance.deleteSoccerPlayer(
          player.objectId
        );
        if (response) {
          row.remove();
        }
      });

      updateBtn.addEventListener('click', async () => {
        const formContainer = document.querySelector('.update-form-container');
        if (formContainer) {
          formContainer.classList.remove('hidden');
          const form = formContainer.querySelector('form');
          form.reset();
          if (form) {
            form.addEventListener('submit', async (event) => {
              event.preventDefault();
              const newAttributes = [];
              const yearValue = event.target.year.value;
              const attributesEl = event.target.querySelectorAll(
                'input[name="attributes"]'
              );
              attributesEl.forEach((el) => {
                if (el.checked) {
                  newAttributes.push(el.value);
                }
              });

              if (isNaN(yearValue) || yearValue.length !== 4) {
                return alert('Year is not valid!');
              }

              const data = {
                playerName: event.target.name.value,
                yearOfBirth: Number(event.target.year.value),
                emailContact: event.target.email.value,
                attributes: newAttributes,
              };

              // Updating player
              const updatedPlayer = await this.#apiInstance.updateSoccerPlayer(
                player.objectId,
                data
              );
              if (updatedPlayer.updatedAt) {
                playerName.textContent = data.playerName;
                year.textContent = data.yearOfBirth;
                contactInfo.textContent = data.emailContact;
                attributes.textContent =
                  data.attributes.length > 0
                    ? data.attributes.join(',')
                    : 'No player Attributes';
                formContainer.classList.add('hidden');
              }
            });
          }
        }
      });

      // Appending
      actionsCell.append(deleteBtn, updateBtn);
      row.append(playerName, year, contactInfo, attributes, actionsCell);
      this.#output.append(row);
    });
  }

  async render() {
    if (this.#output) {
      let players = await this.#apiInstance.getAllSoccerPlayers();

      if (players.results && players.results.length > 0) {
        this.#createTableElements(players.results);
      } else {
        // document.getElementById('players').textContent =
        //   'No player data available';
      }
    }
  }
}

new WebsiteData();

// const responses = await Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/users'),
//   fetch('https://jsonplaceholder.typicode.com/todos'),
// ]);
// responses.map(async (response) => {
//   const data = await response.json();
//   console.log(data);
// });
// console.log(responses);
