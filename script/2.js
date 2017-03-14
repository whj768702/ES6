'use strict';

//单一参数的单行箭头函数
const fn = foo=>`${foo} world`;
console.log(fn('hello')); //hello world

//多参数的单行箭头函数
const fn2 = (arg1, arg2)=>`${arg1} ${arg2}`;
console.log(fn2('hello', 'world'));//hello world

//多行箭头函数,包单一参数和多参数
const fn3 = foo=>{
    return `${foo} world`;
};
console.log(fn3('hello'));//hello world

const fn4 = (arg1, arg2)=>{
    return `${arg1} ${arg2}`;
};
console.log(fn4('hello', 'world'));//hello world

//无参数箭头函数
const fn5 = ()=>'hello world';
console.log(fn5());//hello world


