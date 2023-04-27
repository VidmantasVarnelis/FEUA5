const guestsOutput = document.querySelector('.guests');
const vipCheckbox = document.getElementById('vip-checkbox');
const nameFilter = document.getElementById('name-filter');

const getGuestList = async () => {
  try {
    const response = await fetch('https://magnetic-melon-yam.glitch.me');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

{
  /* 
	<div class="guest">
	<img src="https://picsum.photos/200/300" alt="" />
	<div class="content">
		<h2>Vidmantas</h2>
		<div class="grid-container">
			<span>City: 0</span>
			<span>City: 0</span>
			<span>City: 0</span>
		</div>
	</div>
*/
}
const createGuests = (guests) => {
  guestsOutput.textContent = '';
  guests.forEach((guest) => {
    const containerEl = document.createElement('div');
    const imageEl = document.createElement('img');
    const contentEl = document.createElement('div');
    const headingEl = document.createElement('h2');
    const gridContainerEl = document.createElement('div');
    const cityEl = document.createElement('span');
    const colorEl = document.createElement('span');
    const vipEl = document.createElement('span');

    // Defining elements attributes and values
    containerEl.classList.add('guest');

    imageEl.src = guest.image;
    imageEl.alt = 'Guest Image';

    contentEl.classList.add('content');

    headingEl.textContent = guest.name;

    gridContainerEl.classList.add('grid-container');
    colorEl.textContent = `Favorite color: ${guest.fav_color}`;
    cityEl.textContent = `From: ${guest.city}`;
    vipEl.textContent = `Vip status: ${guest.vip ? 'VIP' : 'Not a VIP member'}`;

    // Appending created elements
    gridContainerEl.append(cityEl, colorEl, vipEl);
    contentEl.append(headingEl, gridContainerEl);
    containerEl.append(imageEl, contentEl);

    // output
    guestsOutput.append(containerEl);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  const guestList = await getGuestList();
  createGuests(guestList);
  // guestList.filter((guest) => guest.vip)
  const vipGuests = guestList.filter((guest) => {
    if (guest.vip) {
      return true;
    } else {
      return false;
    }
  });

  vipCheckbox.addEventListener('change', (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      createGuests(vipGuests);
    } else {
      createGuests(guestList);
    }
  });
  nameFilter.addEventListener('input', (event) => {
    const filteredGuests = guestList.filter((guest) => {
      if (guest.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    createGuests(filteredGuests);
  });
});
