/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


console.log("JS welcome !!! ");
// create a HTML elements

//body container
let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
console.log(container.className);







//container sub-div three--header,body,footer
//------------container'r  header Section -----------------
let header = document.createElement('div');
header.classList.add('header');
container.appendChild(header);
console.log(header.className);

//create two div under header
//------------header'r  logo Section -----------------
let logo = document.createElement('div');
logo.classList.add('logo');
header.appendChild(logo);
console.log(logo.className);

let img = document.createElement('img');
img.classList.add('logo-img');
img.src = "img/tomcat.png";
img.alt = "no image";
logo.appendChild(img);
console.log(img.className);



//------------header'r  company-name Section -----------------
let companyName = document.createElement('div');
companyName.classList.add('company-name');
header.appendChild(companyName);
console.log(companyName.className);

let h2 = document.createElement('h2');
h2.classList.add('brand-name');
h2.innerHTML = "Touhid Alam";
companyName.appendChild(h2);
console.log(h2.className);












//------------container'r body Section -----------------
let body = document.createElement('div');
body.classList.add('body');
container.appendChild(body);
console.log(body.className);

//--two sibling Body divs --menu-bar, welcome-dashboard-- into this div-->
//------------body'r menu-bar Section -----------------         
let menuBar = document.createElement('div');
menuBar.classList.add('menu-bar');
body.appendChild(menuBar);
console.log(menuBar.className);

let home = document.createElement('a');
home.classList.add('btn');
var link = document.createTextNode("Home");
home.appendChild(link);
home.title = "Home";
home.href = "index.html";
menuBar.appendChild(home);
console.log(home.className);

let about = document.createElement('a');
about.classList.add('btn');
var link = document.createTextNode("About");
about.appendChild(link);
about.title = "About";
about.href = "about.html";
menuBar.appendChild(about);
console.log(about.className);

let js = document.createElement('a');
js.classList.add('btn');
var link = document.createTextNode("JavaScript");
js.appendChild(link);
js.title = "JS";
js.href = "designWithJs.html";
menuBar.appendChild(js);
console.log(js.className);

let blog = document.createElement('a');
blog.classList.add('btn');
var link = document.createTextNode("Blog");
blog.appendChild(link);
blog.title = "Blog";
blog.href = "#";
menuBar.appendChild(blog);
console.log(blog.className);

let logOut = document.createElement('a');
home.classList.add('btn');
var link = document.createTextNode("logOut");
logOut.appendChild(link);
logOut.title = "logOut";
logOut.href = "#";
menuBar.appendChild(logOut);
console.log(logOut.className);

let contract = document.createElement('a');
contract.classList.add('btn');
var link = document.createTextNode("contract");
contract.appendChild(link);
contract.title = "Home";
contract.href = "#";
menuBar.appendChild(contract);
console.log(contract.className);











//------------body'r welcome dashboard Section three sub div para, imgContainer, para -----------------
let welcome = document.createElement('div');
welcome.classList.add('welcome');
body.appendChild(welcome);
console.log(welcome.className);

let para = document.createElement('div');
para.classList.add('para');
welcome.appendChild(para);
console.log(para.className);

let paraM1 = document.createElement('p');
paraM1.innerHTML = " This Software NOT encourage piracy, which is an act UNLAWFUL, as well as being This Software NOT encourage piracy, which is an act UNLAWFUL, as well as being a lack ofrespect towards those who dedicate time and effort to the development of applications. Tincreased support for quality writing, allied with the book-like convenience and tactiliof smartphones and tablets, means there has never been a better time for reading online. Thremaining task is to make the writing itself a joy to read.";
para.appendChild(paraM1);



let imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');
welcome.appendChild(imgContainer);
console.log(imgContainer.className);

let leftImg = document.createElement('div');
leftImg.classList.add('left-img');
imgContainer.appendChild(leftImg);
console.log(leftImg.className);

let imgBodyImg1 = document.createElement('img');
imgBodyImg1.classList.add('body-img');
imgBodyImg1.src = "img/img6.jpg";
imgBodyImg1.alt = "no image";
leftImg.appendChild(imgBodyImg1);
console.log(imgBodyImg1.className);

let rightImg = document.createElement('div');
rightImg.classList.add('right-img');
imgContainer.appendChild(rightImg);
console.log(rightImg.className);

let imgBodyImg2 = document.createElement('img');
imgBodyImg2.classList.add('body-img');
imgBodyImg2.src = "img/img4.jpg";
imgBodyImg2.alt = "no image";
rightImg.appendChild(imgBodyImg2);
console.log(imgBodyImg2.className);







let para2 = document.createElement('div');
para2.classList.add('para');
welcome.appendChild(para2);
console.log(para2.className);

let paraM2 = document.createElement('p');
paraM2.innerHTML = " This Software NOT encourage piracy, which is an act UNLAWFUL, as well as being This Software NOT encourage piracy, which is an act UNLAWFUL, as well as being a lack ofrespect towards those who dedicate time and effort to the development of applications. Tincreased support for quality writing, allied with the book-like convenience and tactiliof smartphones and tablets, means there has never been a better time for reading online. Thremaining task is to make the writing itself a joy to read.";
para.appendChild(paraM1);
para2.appendChild(paraM2);















//------------container'r  footer Section -----------------
let footer = document.createElement('div');
footer.classList.add('div-footer');
container.appendChild(footer);
console.log(footer.className);

let p = document.createElement('p');
p.classList.add('footer-para');
p.innerHTML = "CopyRight &copy; Touhid Alam 2020";
footer.appendChild(p);
console.log(p.className);