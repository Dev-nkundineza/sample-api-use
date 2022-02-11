const getRandom = Math.floor(Math.random() * (250 - 1) + 1);
console.log(getRandom)

const img = document.querySelector('.img')
const header5 = document.querySelector('.h5')
const population = document.querySelector('.p1')
const capital = document.querySelector('.p')

//second country
const img2 = document.querySelector('.img2')
const h5 = document.querySelector('.header5')
const pop = document.querySelector('.p2')
const city = document.querySelector('.p3')

// neighbour 

const neighbour = document.querySelector('.neighbourImage')
const neighbour2 = document.querySelector('.neighbourImage1')

const getCountry = async(getRandom) => {

    const countryName = await fetch('https://restcountries.com/v2/all')
    const resultName = await countryName.json()

    const countryToDisplay = resultName[getRandom].name

    const displayCounty = await fetch(`https://restcountries.com/v3.1/name/${countryToDisplay}`)
    const data = await displayCounty.json()
    console.log(data)

    img.setAttribute('src', data[0].flags.png)
    header5.innerHTML = `country name: ${data[0].name.common}`
    capital.innerHTML = `Capital City:${data[0].capital[0]}`
    population.innerHTML = `population:${data[0].population}`

    // second country

    const countryToDisplay2 = resultName[Math.floor(getRandom / 2)].name
    const displayCounty2 = await fetch(`https://restcountries.com/v3.1/name/${countryToDisplay2}`)
    const data2 = await displayCounty2.json()
    img2.setAttribute('src', data2[0].flags.png)
    h5.innerHTML = `country name: ${data2[0].name.common}`
    city.innerHTML = `Capital City:${data2[0].capital[0]}`
    pop.innerHTML = `population:${data2[0].population}`
    neighbour.setAttribute('src', data[0].coatOfArms.png)
    neighbour2.setAttribute('src', data2[0].coatOfArms.png)




}
getCountry(getRandom);
const button = document.querySelector('.button')
button.addEventListener('Click', location.reload)