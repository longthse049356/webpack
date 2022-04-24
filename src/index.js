import {add} from "./libs/add";
import {sayHello} from "./libs/hello";
import _ from 'lodash';
import './libs/image';

console.log(_.size([1,2,3,4,5]))

function hello(){
   console.log( add(1,2));
}

hello();

sayHello();

const PI = 3.14;
console.log(`PI is :${PI}`);