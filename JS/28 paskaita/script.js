class SoccerPlayersService {
  #API_END_POINT = 'https://parseapi.back4app.com/classes/SoccerPlayers';
  #id = 'uqJ0V5EhLXa3pyzVir6qouTP29gRc8KKx7vWdAx6';
  #key = 'kHkN7tggGst5eoyMVTM8wYINc0XmCFBJTw748hTa';
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
}

{
  /* <tr>
<td></td>
<td></td>
<td></td>
<td></td>
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

      playerName.textContent = player.playerName;
      year.textContent = player.yearOfBirth;
      contactInfo.textContent = player.emailContact;
      attributes.textContent =
        player.attributes.length > 0
          ? player.attributes.join(',')
          : 'No player Attributes';

      row.append(playerName, year, contactInfo, attributes);
      this.#output.append(row);
    });
  }

  async render() {
    if (this.#output) {
      let players = await this.#apiInstance.getAllSoccerPlayers();
      if (players.results && players.results.length > 0) {
        this.#createTableElements(players.results);
      } else {
        document.getElementById('players').textContent =
          'No player data available';
      }
    }
  }
}

new WebsiteData();
