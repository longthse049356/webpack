import {add} from './add'
import moment from "moment";

const main = () => {
    console.log(add(2, 3));
    console.log(moment().format('LL'))
}

main();