//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);

document.title = "DOM vezba";

let items = document.getElementById("items");
let listItems = document.getElementsByClassName("list-item");

for(let i=0; i < listItems.length; i++)
{
    //listItems[i].style.color = "white";
    if(i%2==0)
    {
        listItems[i].style.backgroundColor = "#FDE3FF";
    }
    else listItems[i].style.backgroundColor = "#E3FCFF";
}

document.getElementById("lista").textContent = "Nesto";

listItems[3].textContent = "neki item";

//querySelector
document.querySelector("#paragraf p").style.backgroundColor = "#E9E3FF";

//parentNode
console.log(items.parentNode);
items.parentNode.style.backgroundColor="#FFFAE3";

//parentElement
console.log(items.parentElement);

//childNodes
console.log(items.childNodes);
items.childNodes[1].style.backgroundColor="lightblue";

//siblings
console.log(items.previousElementSibling);
items.previousElementSibling.style.color="#1324BF"
console.log(items.nextElementSibling);
items.nextElementSibling.style.color="#67996D"

let drugiElement=document.getElementsByClassName("list-item")[1];
drugiElement.parentElement.previousElementSibling.style.color="brown"
