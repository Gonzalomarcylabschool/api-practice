import { fetchData, getPeopleFromPlanet } from "./utils"

export const pageOnLoad = () => {
  const mainPage = `
    <h1>Star Wars People</h1>
    <p>Check out these dope star wars people</p>
    <div id='planet'></div>
  `
  document.querySelector('#app').innerHTML = mainPage;
}
export const  renderOne = async (url, where) => {
  const data = await fetchData(url);
  console.log(data);
  const swPerson = document.createElement('div');
  swPerson.id = data[0].name;
  swPerson.innerHTML = `
  <p>${data[0].name}</p>
  `
  document.querySelector(where).append(swPerson);
}
export const renderPeopleFromPlanet = async (planet) => {
  const peopleList = await getPeopleFromPlanet(planet);
  // console.log('test:',peopleList);
  peopleList.forEach((each) => {
    renderOne(each, '#planet');
  })
}

export const makeModal = (pokemon) => {
  console.log(pokemon);
  const modalBg = document.createElement('div');
  modalBg.className = 'modal-bg';
  modalBg.style.display = 'flex';
  modalBg.innerHTML =`
      <div class="pokemonCard" style="display: block; color: blue; background-color: rgb(240, 248, 255); padding: 1em; margin: 1em; max-width: 50vw; max-height:80vh; border-radius: 1em;">
      <h3>${capitalizeFirstLetter(pokemon.name)} #0003</h3>
       This pokemon can be found in the following version(s) of the Pokemon games:
        <div class="personInfo">
        </div>
        <div>
        <input class="close" type="submit" value="Close" >
        </div>
        <img src="${pokemon.sprites.other.home.front_default}" alt="picture of venusaur" style="width: 75%; max-width: 300px;">
      </div>`
  getElement('body').appendChild(modalBg);
  getElement('.close').addEventListener('click', (e) => {
    modalBg.parentNode.removeChild(modalBg)
  });
}