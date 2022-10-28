const btns=document.querySelectorAll(".parent > div");
const noOfGifts=Math.sqrt(btns.length)+1;
let giftOpend=0;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        show(btn)
    });
})

function show(btn){
    btn.querySelector("span").style.display="none";
    btn.querySelector("img").style.display="block";
    if(btn.querySelector("img").getAttribute("alt")=="danger"){

        setTimeout(()=>{
            document.querySelector(".message").innerHTML="You Lost💀";
            document.querySelector(".message-Container").style.display="flex";
        },100)
        setTimeout(()=>{
            makeGrid();
        },1500)
        setTimeout(()=>{
            document.querySelector(".message-Container").style.display="none";
        },3000)
    }
    if(btn.querySelector("img").getAttribute("alt")=="gift"){
        giftOpend++;
        if(giftOpend==noOfGifts-1){
            setTimeout(()=>{
                document.querySelector(".message").innerHTML="Winner🏆";
                document.querySelector(".message-Container").style.display="flex";
            },200)
            setTimeout(()=>{
                makeGrid();
            },1500)
            setTimeout(()=>{
                document.querySelector(".message-Container").style.display="none";
            },2000)
        }
    }
    
}

function makeGrid(){
    giftOpend=0;
    btns.forEach((btn)=>{
            btn.querySelector("img").setAttribute("alt","");
            btn.querySelector("span").style.display="block";
            btn.querySelector("img").style.display="none";
    })
    let count=0;
    console.log("no"+noOfGifts);
    while(count != noOfGifts){
        const index=Math.floor(Math.random()*btns.length);
        if(count<noOfGifts-1 && btns[index].querySelector("img").getAttribute("alt")==""){
            btns[index].querySelector("img").setAttribute("src","gift.png");
            btns[index].querySelector("img").setAttribute("alt","gift");
            console.log(index);
            count++;
        }
        else if(count==noOfGifts-1 && btns[index].querySelector("img").getAttribute("alt")==""){
            btns[index].querySelector("img").setAttribute("src","warning.jpg");
            btns[index].querySelector("img").setAttribute("alt","danger");
            count++;
        }
    }
    
    btns.forEach((btn)=>{
        if(btn.querySelector("img").getAttribute("alt")==""){
            btn.querySelector("img").setAttribute("src","wrong.jpg");
            btn.querySelector("img").setAttribute("alt","miss");
        }
    })

}

makeGrid();