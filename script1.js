//For list of 50 pokemons
var form=document.createElement("form");
form.setAttribute("id","myform");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","type-pokemon");
input.setAttribute("id","endpoint"); //here
input.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("class","btn btn-info");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
document.body.append(form);

//code here create the div with id hs here
let nam=document.createElement("div");
nam.setAttribute("id","na");
document.body.append(nam); 

let nam1=document.createElement("div");
nam1.setAttribute("id","na1");
document.body.append(nam1); 

let nam2=document.createElement("div");
nam2.setAttribute("id","na2");
document.body.append(nam2); 

let nam3=document.createElement("div");
nam3.setAttribute("id","na3");
document.body.append(nam3); 

let nam4=document.createElement("div");
nam4.setAttribute("id","na4");
document.body.append(nam4); 







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
var url=`https://pokeapi.co/api/v2/${endpoint}`; //pokemon

pokemon(url);
});

async function pokemon(url){
let response=await fetch(url);
console.log(response);
let data=await response.json();
console.log(data);
console.log(data.results[0].name);


var result1="";
for(var i=0;i<=16;i++){
  if(i<16){
   result1=result1 + (data.results[i].name) + ", ";
  }
  else{
    result1=result1 + (data.results[i].name);  
  }
}
console.log(result1);
/*
var result2="";
for(var i=14;i<=27;i++){
  if(i<27){
   result2=result2 + (data.results[i].name) + ", ";
  }
  else{
    result2=result2 + (data.results[i].name);  
  }
}
console.log(result2);

var result3="";
for(var i=28;i<=41;i++){
  if(i<41){
   result3=result3 + (data.results[i].name) + ", ";
  }
  else{
    result3=result3 + (data.results[i].name);  
  }
}
console.log(result3);

var result4="";
for(var i=31;i<=40;i++){
  if(i<40){
   result4=result4 + (data.results[i].name) + ", ";
  }
  else{
    result4=result4 + (data.results[i].name);  
  }
}
console.log(result4); */





//here
let na=document.getElementById("na");
let na1=document.getElementById("na1");
let na2=document.getElementById("na2");
let na3=document.getElementById("na3");
let na4=document.getElementById("na4");




na.innerHTML=" "; 
na.append(`Poke'Mons :`);

na1.innerHTML=" "; 
na1.append(`${result1}`);

na2.innerHTML=" "; 
na2.append(`${result2}`);

na3.innerHTML=" "; 
na3.append(`${result3}`);

na4.innerHTML=" "; 
na4.append(`${result4}`);





}