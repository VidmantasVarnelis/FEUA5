const output = document.getElementById('output');

const getUniversityWithStudents = async () => {
  try {
    const searchParam = new URLSearchParams(location.search);
    const response = await fetch(
      `http://localhost:8080/university/${searchParam.get('id')}`
    );
    const students = await response.json();
    return students;
  } catch (err) {
    console.log(err);
  }
};

const renderUniversityWithStudents = (university) => {
  const container = document.createElement('div');
  const universityName = document.createElement('h1');

  universityName.textContent = university.name;

  university.students.forEach((student) => {
    const name = document.createElement('p');
    const lastName = document.createElement('p');

    name.textContent = student.firstName;
    lastName.textContent = student.lastName;

    container.append(name, lastName);
  });

  container.prepend(universityName);
  output.append(container);
};

document.addEventListener('DOMContentLoaded', async () => {
  const university = await getUniversityWithStudents();
  renderUniversityWithStudents(university[0]);
});
