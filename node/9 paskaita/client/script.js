const output = document.getElementById('output');

const getUniversities = async () => {
  try {
    const response = await fetch('http://localhost:8080/universities');
    const universities = await response.json();
    return universities;
  } catch (err) {
    console.log(err);
  }
};

const renderUniversities = (universities) => {
  universities.forEach((university) => {
    const container = document.createElement('div');
    const universityName = document.createElement('h1');
    const universityAddress = document.createElement('span');
    const link = document.createElement('a');

    universityName.textContent = university.name;
    universityAddress.textContent = university.address;
    link.textContent = 'Students';
    link.href = `./students.html?id=${university._id}`;

    container.append(universityName, universityAddress, link);
    output.append(container);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  const universities = await getUniversities();
  renderUniversities(universities);
});
