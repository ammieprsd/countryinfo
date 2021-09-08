// Stappenplan

// 1. Referentie naar een echte HTML opslaan
// 2. Een functie klaarzetten die afgevuurd mag worden op het event
// 3. Event kiezen waar naar geluisters mag worden ('click')
// 4. Eventlisteners inrichten

// const button = document.getElementById('special-button');
// console.log(button);

        //--functie zonder parameter en argument--
        // function handleClick() {
        //     console.log('you clicked me')
        // }
        //
        // button.addEventListener('click', handleClick)

// //--functie met parameter en argument--
// function handleClick(name) {
//     console.log(`you clicked me ${name}`);
// }
//
// button.addEventListener('click', ()=> {
//     handleClick('Amrish')
// })

    // ----------Zonder event
// const input = document.getElementById('firstName');
//
// function handleInput() {
//     console.log("Hello World")
// }
//
// input.addEventListener("keydown", handleInput);
    // ------------


// ----------met event
// const input = document.getElementById('firstName');
//
// function handleInput(event) {
//     console.log(event.target.value); // Het intypte wordt gelogd
// }
//
// input.addEventListener("keydown", (event) => {
//     handleInput(event)
// });
// -------------------------------------------------------------------------


//--API--

// STAPPENPLAN

// 1. Asynchrone functie (async)
// 2. Try/catch blok
// 3. Het daarwerkelijke request maken

// STAPPENPLAN Axios gebruiken
// 1. package.json aanmaken met npm init
// 2. axios installeren
// 3. axios script toevoegen aan onze HTML (dit hoeft bij React niet meer)



const dataFetchButton = document.getElementById("data-fetch-button");
// console.log(dataFetchButton)


async function fetchData() {
    try{
        // request maken
        // const result = await axios.get('https://restcountries.eu/rest/v2/all');
        const result = await axios.get('https://restcountries.eu/rest/v2/name/Belgium?fullText=true');
        console.log(result.data);
        console.log(`${result.data[0].name} is situated in ${result.data[0].subregion}. It has a population of ${result.data[0].population} people`);
        console.log(`The capital city is ${result.data[0].capital}`);
    } catch(error) {
        console.error(error)
    }
}

dataFetchButton.addEventListener('click', fetchData);


const inputField = document.getElementById('belgium');
inputField.addEventListener('keydown', (event) => {
    fetchData(event)
})







