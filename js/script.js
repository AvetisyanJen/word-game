     let bar=["աշուն","արև","փոթորիկ","գիրք","ուղղակի","անհամբեր","արդուկ","արթուն","սերկևիլ","անօթևան"]
     function random(a){

           return Math.round(Math.random()*a)
     }
     function randomColor(){
           return `rgb(${random(255)},${random(255)},${random(255)})`
     }
     const start_block=document.querySelector(".start-block")
     const start=document.querySelector(".start")
     const words=document.querySelector(".words")
     const txt=document.querySelector(".text")
     const audio=new Audio("81cebf7e45fdef7.mp3")
     const music=new Audio("mixkit-arcade-video-game-bonus-2044.wav")
     const over=new Audio("mixkit-sad-game-over-trombone-471.wav")
     start.onclick=function(){
           start_block.style.display="none"
           startgame()
           audio.play()
     }
     function startgame(){
           createword()
           movewords()
           txt.addEventListener("input",check)
           
     }

     let s2
     function createword(){
           s2= setInterval(function(){
            
                 let div=document.createElement("div")
                 div.innerHTML=bar[random(bar.length-1)]
                 div.style=`
                 position:absolute;
                 top:0;
                 left:${random(words.offsetWidth-100)}px;
                 background:${randomColor()}
                 `
                 div.classList.add("item")
                 words.append(div)
           },5000)

     }
     let s3
     function end(){
           
            const endgame=document.createElement("div")
            endgame.classList.add("gameover")
            const h1game=document.createElement("h1")
            h1game.classList.add("style")
            h1game.innerHTML="GAME OVER"
            
            s3= setInterval(function(){
            const d1=document.querySelectorAll(".gameover")
            for(let el of d1){
            el.style.top=random(400)+"px"
            el.style.left=random(900)+"px"
            el.style.position="absolute"
            }
            words.append(endgame)
            endgame.append(h1game)
      },1000)
     }
     
     let s1
     function movewords(){
           s1=setInterval(function(){
                 const divs=document.querySelectorAll(".item")
                 divs.forEach(el=>{
                       el.style.top=el.offsetTop+1+"px"
                       if(el.offsetTop>=words.offsetHeight-el.offsetHeight){
                        end()
                        over.play()
                        setTimeout(function(){       
                        start_block.style.display="flex"
                        clearInterval(s3)
                        document.querySelectorAll(".gameover").forEach(el=>el.remove())
                        },5000)
                                    
                        audio.pause()
                        clearInterval(s1)
                        clearInterval(s2)
                        txt.removeEventListener("input",check)
                        words.innerHTML=""
                        

                       }
                        
                 })
           },20)
        
     } 
   
      const h1=document.createElement("h1")
      h1.classList.add("guyn")
      let count=0      
      function check(){
            let divs=document.querySelectorAll(".item")
            let val=this.value
            for(let i=0;i<divs.length;i++){
            if(val==divs[i].innerHTML){
            h1.innerHTML=" "
            count++
            count.play()
            divs[i].remove()
            h1.innerHTML=count
            words.append(h1)
            this.value=""
             return 
                        
            }
              
            } 
            
      }