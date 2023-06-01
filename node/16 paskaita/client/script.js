const BASE_URL = 'http://localhost:8080';

const output = document.getElementById('output');

const fetchAllCompanies = async () => {
  try {
    const companies = (await fetch(`${BASE_URL}/company`)).json();
    return companies;
  } catch (err) {
    console.log(err);
  }
};

const deleteCompanyById = async (id) => {
  try {
    const response = (
      await fetch(`${BASE_URL}/company/${id}`, {
        method: 'DELETE',
      })
    ).json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

const renderCompanies = (companies) => {
  companies.forEach((company) => {
    const container = document.createElement('div');
    const image = document.createElement('img');
    const heading = document.createElement('h1');
    const deleteButton = document.createElement('button');

    image.src = company.logo_url || 'https://picsum.photos/600/600';
    image.alt = 'Company Logo';

    heading.textContent = company.company_name;

    deleteButton.textContent = 'Delete Company';

    deleteButton.addEventListener('click', async () => {
      await deleteCompanyById(company.id);
      container.remove();
    });

    container.append(image, heading, deleteButton);
    output.append(container);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  const companies = await fetchAllCompanies();
  renderCompanies(companies);
});
