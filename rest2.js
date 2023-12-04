const loadCountriiiies = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => showCountry(data));
};

const showCountry = (countries) => {
  console.log(countries);
  const CountriiesHTML = countries.map((country) => countryHTMl(country));
  const container = document.getElementById("countries");
  container.innerHTML = CountriiesHTML.join(' ');
};
const countryHTMl = (country) => {
  console.log(country, "html");
  return `
    
    <div class='country'>
    <h2>${country.name.common}</h2>
    <img src='${country.flags.png}'>
    </div>
    `;
};
loadCountriiiies();
