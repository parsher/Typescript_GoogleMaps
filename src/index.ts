import { User } from "./User";
import { Company } from "./Company";
// import red from './User';
import { CustomMap } from './CustomMap';


const user = new User();
const company = new Company();
const customMap = new CustomMap('map');


customMap.addMarker(company);
customMap.addMarker(user);

