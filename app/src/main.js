import './style.css'
import { pageOnLoad, renderPeopleFromPlanet } from './utils/render'

const main = () => {
 pageOnLoad();
 renderPeopleFromPlanet("1");
}

main();