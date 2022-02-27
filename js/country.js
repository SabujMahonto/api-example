
const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
// loadCountry()


const displayCountry = countries =>{

        const div = document.getElementById('container')
        countries.forEach(country => {
            // const h3 = document.createElement('h3')
            const newDiv = document.createElement('div')
                newDiv.classList.add('country');

                newDiv.innerHTML = `
                <h3>${country.name.common}</h3>
                <p>${country.name.official}</P>
                <button onclick="loadCountryInfo('${country.name.official}')">Details</button>

                `;
             div.appendChild(newDiv)

            //  console.log(country)
    })

}

// detail btn click to load country information 
const loadCountryInfo = name =>{
    const url = 'https://restcountries.com/v3.1/name/united'
         fetch("url")
        //  .than(res => res.json())
        //  .than(data => console.log(data))
    console.log(name)
}



