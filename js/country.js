
const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
// loadCountry()


const displayCountry = countries =>{
    
    // for(const country of countries){
        // console.log(country)
        // }
        
        const div = document.getElementById('container')
        countries.forEach(country => {
            const h3 = document.createElement('h3')
            const newDiv = document.createElement('div')
                newDiv.classList.add('country')
             h3.innerHTML = country.name.official;
             newDiv.appendChild(h3)
             const p = document.createElement('p')
             p.innerHTML = country.capital;
             newDiv.appendChild(p)
             div.appendChild(newDiv)

            //  console.log(country)

    })



}