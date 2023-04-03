const loadData=() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res=> res.json())
    .then (data => displayCountry(data))
}

const displayCountry=(countries) =>{
    console.log(countries);
    const container = document.getElementById('container');
   const allCountries= countries.map(country => countryHtml(country));
   
   container.innerHTML = allCountries.join(' ');
}

const countryHtml = country =>{
    return`
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src=${country.flags.png}>
        </div>
    `

}
loadData();