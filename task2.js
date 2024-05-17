let data;
let type,headline,date,link,author,content;

fetchData();

async function fetchData(){
    try{
    let response= await fetch("https://coding-week-2024-api.onrender.com/api/data");
    data=await response.json();
    Array.from(data).forEach(function(item){
        if(item.id==1) {
            type=item.type;
            headline=item.headline;
            date=item.date;
            link=item.image;
            author=item.author;
            content=item.content;
        }
    });
    console.log(link);
    document.querySelector("#img").style.backgroundImage="url("+link+")";
    document.querySelector("#img").style.backgroundSize="430px 400px";
    document.querySelector("#img h1").innerHTML=""+headline+"";
    document.querySelector(".theme p").innerHTML=""+date+"";
    document.querySelector("#img button").innerHTML=""+type+"";
    let x= document.createElement('pre'); x.textContent="   By : "+author+"";
    document.querySelector("#img").appendChild(x);
    x.style.fontFamily='Arial'

    }
    catch(error){
        console.log("ERROR");
    }
}