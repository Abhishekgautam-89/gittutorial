/*  Head and Body are the child elements of root element of htm tag.
h1 element is child node of the head element.
input type text and button both are the child nodes of body element, which has name attributes and value attributes, connected to input type elements as a node. 
Inner text responds to styling, whereas textcontent doesnot.
*/
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// document.title='123';
// console.log(document.all);
// document.all[10].textContent='Hello World';
// document.getElementById('header-title').innerText='Hello';
// const header = document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000';
const addItem = document.getElementsByClassName('title');
// console.log(addItem);
addItem[0].style.fontWeight='bold';
addItem[0].style.color='green';
