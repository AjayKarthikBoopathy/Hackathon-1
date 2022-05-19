var form=document.createElement("form");
form.setAttribute("id","myform");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","eg-bulbasaur");
input.setAttribute("id","endpoint"); //here
input.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("class","btn btn-info");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
document.body.append(form);

//code here create the div with id confirmed, recovered, deaths here
let nam=document.createElement("div");
nam.setAttribute("id","na");
document.body.append(nam); 

let abi=document.createElement("div");
abi.setAttribute("id","ab");
document.body.append(abi); 

let wei=document.createElement("div");
wei.setAttribute("id","we");
document.body.append(wei); 



//here

var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var endpoint=document.getElementById("endpoint").value; //(Type1:Extracting) taking (value) to variable and console
console.log(endpoint);
var url=`https://pokeapi.co/api/v2/pokemon/${endpoint}`;

pokemon(url);
});

async function pokemon(url){
let response=await fetch(url);
console.log(response);
let data=await response.json();
console.log(data);
console.log(data.name);
console.log(data.abilities[0].ability.name);
console.log(data.weight);

//for(var i=0;i<51;i++){
//   console.log(results[0].name);
//}



//here
let na=document.getElementById("na");
let ab=document.getElementById("ab");
let we=document.getElementById("we");


na.innerHTML=" ";  //for refreshing the values
na.append(`Name : ${data.name}`); //(Type2:Printing) giving result to variable and append

ab.innerHTML=" ";
ab.append(`Ability : ${data.abilities[0].ability.name}`);

we.innerHTML=" ";
we.append(`Weight : ${data.weight}`);
//

}