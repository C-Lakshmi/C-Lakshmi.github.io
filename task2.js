let data;
let type,headline,date,link,author,content,blog,para,content2,content3,content4;

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
    console.log(content);
    document.getElementById('blog1').style.cursor='pointer';
    
    document.querySelector('#blog1 h1').addEventListener('click',function(e){
        para=document.querySelector("#c1 p");
        para.innerHTML=""+content+"";
        para.style.fontFamily='Arial';
        para.style.fontSize='15px';
        para.style.width='300px';
        para.style.height='80px';
        para.style.border='2px solid black';
        para.style.backgroundColor='white';
        para.style.color='black';
        para.style.position = 'absolute'; // Position it absolutely if needed
        para.style.zIndex = '500px'; // Ensure it appears above other elements
        para.style.marginTop='-200px';
        para.style.marginLeft='60px';
        para.style.borderRadius='7px';
        para.style.padding='5px';
        document.querySelector('#blog1 h1').style.position='relative';
        document.querySelector('#blog1 h1').display='block';
        para.style.display ='block';
        //document.getElementById('img').style.display='block';
        para.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent the event from bubbling up to the 'h1' click listener
            e.target.style.display = 'none';
        });
    })
    
    

    Array.from(data).forEach(function(item){
        if(item.id==3) {
            type=item.type;
            headline=item.headline;
            date=item.date;
            link=item.image;
            author=item.author;
            content2=item.content;
        }
    });
    document.querySelector("#img2").style.backgroundImage="url("+link+")";
    document.querySelector("#img2").style.backgroundSize="250px 430px";
    document.querySelector("#img2 h2").innerHTML=""+headline+"";
    document.querySelector("#img2 .theme2 p").innerHTML=""+date+"";
    document.querySelector("#img2 .but2").textContent=""+type+"";
    x= document.createElement('p'); x.textContent=" By:"+author+"";
    document.querySelector("#img2 h2").appendChild(x);
    x.style.fontFamily='Arial';
    x.style.fontSize='15px';
    x.setAttribute('class','theme');
    document.getElementById('blog2').style.cursor='pointer';
    document.querySelector('#blog2 h2').addEventListener('click',function(f){
        para=document.querySelector("#c2 p");
        console.log(content2);
        para.innerHTML=""+content2+"";
        para.style.fontFamily='Arial';
        para.style.fontSize='15px';
        para.style.width='250px';
        para.style.height='100px';
        para.style.border='2px solid black';
        para.style.backgroundColor='white';
        para.style.color='black';
        para.style.position = 'absolute'; // Position it absolutely if needed
        para.style.zIndex = '500px'; // Ensure it appears above other elements
        para.style.marginTop='-200px';
        para.style.marginLeft='60px';
        para.style.borderRadius='7px';
        para.style.padding='5px';
        document.querySelector('#blog2 h2').style.position='relative';
        document.querySelector('#blog2 h2').display='block';
        para.style.display ='block';
        //document.getElementById('img').style.display='block';
        para.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent the event from bubbling up to the 'h1' click listener
            e.target.style.display = 'none';
        });
    })
    
    Array.from(data).forEach(function(item){
        if(item.id==6) {
            type=item.type;
            headline=item.headline;
            date=item.date;
            link=item.image;
            author=item.author;
            content3=item.content;
        }
    });
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
    document.getElementById('blog3').style.cursor='pointer';
    document.querySelector('#blog3 h3').addEventListener('click',function(f){
        para=document.querySelector("#c3 p");
        para.innerHTML=""+content3+"";
        para.style.fontFamily='Arial';
        para.style.fontSize='15px';
        para.style.width='250px';
        para.style.height='100px';
        para.style.border='2px solid black';
        para.style.backgroundColor='white';
        para.style.color='black';
        para.style.position = 'absolute'; // Position it absolutely if needed
        para.style.zIndex = '500px'; // Ensure it appears above other elements
        para.style.marginTop='-200px';
        para.style.marginLeft='60px';
        para.style.borderRadius='7px';
        para.style.padding='5px';
        document.querySelector('#blog3 h3').style.position='relative';
        document.querySelector('#blog3 h3').display='block';
        para.style.display ='block';
        //document.getElementById('img').style.display='block';
        para.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent the event from bubbling up to the 'h1' click listener
            e.target.style.display = 'none';
        });
    })

    Array.from(data).forEach(function(item){
        if(item.id==8) {
            type=item.type;
            headline=item.headline;
            date=item.date;
            link=item.image;
            author=item.author;
            content4=item.content;
        }
    });
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
    document.getElementById('blog4').style.cursor='pointer';
    document.querySelector('#blog4 h3').addEventListener('click',function(f){
        para=document.querySelector("#c4 p");
        para.innerHTML=""+content4+"";
        para.style.fontFamily='Arial';
        para.style.fontSize='15px';
        para.style.width='250px';
        para.style.height='100px';
        para.style.border='2px solid black';
        para.style.backgroundColor='white';
        para.style.color='black';
        para.style.position = 'absolute'; // Position it absolutely if needed
        para.style.zIndex = '500px'; // Ensure it appears above other elements
        para.style.marginTop='-200px';
        para.style.marginLeft='60px';
        para.style.borderRadius='7px';
        para.style.padding='5px';
        document.querySelector('#blog4 h3').style.position='relative';
        document.querySelector('#blog4 h3').display='block';
        para.style.display ='block';
        //document.getElementById('img').style.display='block';
        para.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent the event from bubbling up to the 'h1' click listener
            e.target.style.display = 'none';
        });
    })
   
    //RIGHT PANEL
    Array.from(data).forEach(function(item){
        if(item.id==2) {
            headline=item.headline;
            date=item.date;
            link=item.image;
        }
    });
    document.getElementById("i1").src=""+link+"";
    document.querySelector("#s1 .one .head").textContent= ""+headline+"";
    document.querySelector("#s1 .one p").textContent=""+date+"";

    Array.from(data).forEach(function(item){
        if(item.id==4) {
            headline=item.headline;
            date=item.date;
            link=item.image;
        }
    });
    document.getElementById("i2").src=""+link+"";
    document.querySelector("#s2 .one .head").textContent= ""+headline+"";
    document.querySelector("#s2 .one p").textContent="" +date+"";
    Array.from(data).forEach(function(item){
        if(item.id==5) {
            headline=item.headline;
            date=item.date;
            link=item.image;
        }
    });
    document.getElementById("i3").src=""+link+"";
    document.querySelector("#s3 .one .head").textContent= ""+headline+"";
    document.querySelector("#s3 .one p").textContent="" +date+"";
    Array.from(data).forEach(function(item){
        if(item.id==7) {
            headline=item.headline;
            date=item.date;
            link=item.image;
        }
    });
    document.getElementById("i4").src=""+link+"";
    document.querySelector("#s4 .one .head").textContent= ""+headline+"";
    document.querySelector("#s4 .one p").textContent="" +date+"";
    const clonedBanner=document.getElementById("s1").cloneNode(true);
    document.getElementById("snippet").appendChild(clonedBanner);
    clonedBanner.setAttribute('id','s5');
    const clone2=document.getElementById("s1").cloneNode(true);
    document.getElementById("snippet").appendChild(clone2);
    clone2.setAttribute('id','s6');
    Array.from(data).forEach(function(item){
        if(item.id==9) {
            headline=item.headline;
            date=item.date;
            link=item.image;
        }
    });
    document.querySelector("#s5 #i1").src=""+link+"";
    document.querySelector("#s5 .one .head").textContent= ""+headline+"";
    document.querySelector("#s5 .one p").textContent="" +date+"";
    Array.from(data).forEach(function(item){
        if(item.id==10) {
            headline=item.headline;
            date=item.date;
            link=item.image;
        }
    });
    document.querySelector("#s6 #i1").src=""+link+"";
    document.querySelector("#s6 .one .head").textContent= ""+headline+"";
    document.querySelector("#s6 .one p").textContent="" +date+"";
    }
    catch(error){
        console.log("ERROR");
    }
}