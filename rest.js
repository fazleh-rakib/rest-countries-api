const loadCountries = ()=>{
   fetch(`https://restcountries.com/v3.1/all`)
   .then(res=> res.json())
   .then(data => displayCountries(data))
}

const displayCountries = (countries)=>{
console.log(countries);
const countriesHTML = countries.map(country =>getContainHTML(country))

const container = document.getElementById('countries')
container.innerHTML = countriesHTML.join(' ')
}


const getContainHTML =(country)=>{
    console.log(country);
    return `
    <div class = "country">
    <p>${country.name.common}</p>
    <img src='${country.flags.png}'>
    </div>
    `
}
loadCountries()