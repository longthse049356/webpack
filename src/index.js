import moment from "moment";
import {add} from "./add";

function hello(){
    console.log(moment().format('LL'));
   console.log( add(1,2));
}

hello()