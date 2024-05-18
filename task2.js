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
    console.log(type);
    document.querySelector("#img").style.backgroundImage="url("+link+")";
    document.querySelector("#img").style.backgroundSize="430px 430px";
    document.querySelector("#img h1").innerHTML=""+headline+"";
    document.querySelector(".theme p").innerHTML=""+date+"";
    document.querySelector("#img button").innerHTML=""+type+"";
    let x= document.createElement('span'); x.textContent=" By : "+author+"";
    document.querySelector("#img h1").appendChild(x);
    x.style.fontFamily='Arial'
    x.style.fontSize='15px';
    x.setAttribute('class','theme');
    //document.querySelector("#img").innerHTML+="By : "+author+"";

    Array.from(data).forEach(function(item){
        if(item.id==3) {
            type=item.type;
            headline=item.headline;
            date=item.date;
            link=item.image;
            author=item.author;
            content=item.content;
        }
    });
    console.log(type);
    document.querySelector("#img2").style.backgroundImage="url("+link+")";
    document.querySelector("#img2").style.backgroundSize="250px 430px";
    document.querySelector("#img2 h2").innerHTML=""+headline+"";
    document.querySelector(".theme p").innerHTML=""+date+"";
    document.querySelector("#img2 .but2").textContent=""+type+"";
    x= document.createElement('p'); x.textContent=" By:"+author+"";
    document.querySelector("#img2 h2").appendChild(x);
    x.style.fontFamily='Arial';
    x.style.fontSize='15px';
    x.setAttribute('class','theme');

    Array.from(data).forEach(function(item){
        if(item.id==6) {
            type=item.type;
            headline=item.headline;
            date=item.date;
            link=item.image;
            author=item.author;
            content=item.content;
        }
    });
    console.log(author);
    document.querySelector("#coffee").style.backgroundImage="url("+link+")";
    document.querySelector("#coffee").style.backgroundSize="200px 205.5px";
    document.querySelector("#coffee h3").innerHTML=""+headline+"";
    document.querySelector("#coffee .theme2 p").innerHTML=""+date+"";
    document.querySelector("#coffee .but2").innerHTML=""+type+"";
    x= document.createElement('span'); x.textContent=" By : "+author+"";
    document.querySelector("#coffee h3").appendChild(x);
    x.style.fontFamily='Arial';
    x.style.fontSize='15px';
    x.setAttribute('class','theme');

    Array.from(data).forEach(function(item){
        if(item.id==8) {
            type=item.type;
            headline=item.headline;
            date=item.date;
            link=item.image;
            author=item.author;
            content=item.content;
        }
    });
    console.log(author);
    document.querySelector("#sci").style.backgroundImage="url("+link+")";
    document.querySelector("#sci").style.backgroundSize="200px 205.5px";
    document.querySelector("#sci h3").innerHTML=""+headline+"";
    document.querySelector("#sci .theme2 p").innerHTML=""+date+"";
    document.querySelector("#sci .but2").innerHTML=""+type+"";
    x= document.createElement('span'); x.textContent="  By : "+author+"";
    document.querySelector("#sci h3").appendChild(x);
    x.style.fontFamily='Arial';
    x.style.fontSize='15px';
    x.style.marginRight='15px';
    x.setAttribute('class','theme');
   
    }
    catch(error){
        console.log("ERROR");
    }
}