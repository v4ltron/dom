//ispise dokument kao objekat u konzoli
//console.dir(document);

//ispise domain dokumenta
//console.dir(document.domain);

//ispise ime sajta
//console.dir(document.title);

//promeni ime sajta
document.title="DOM vezba"

//ispise sve html elemente
//console.log(document.all);

//ispise 6. html element
//console.log(document.all[6]);

//console.log(document.forms[0]);

let items =document.getElementById("items");
//console.log(items);
let listItems=document.getElementsByClassName("list-item");
console.log(listItems);

//listItems[2].textContent="nesto drugo"

for(let i=0; i<listItems.length;i++){
    if(i%2==0){
        listItems[i].style.backgroundColor="#FBE3FF";
    }
    else listItems[i].style.backgroundColor="#DDFAFF";
}