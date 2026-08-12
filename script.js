// Change this if you want a different password.
// Current password: Aadu15
const SECRET_PASSWORD = "Aadu15";

function unlock(){
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("passwordError");
  if(input === SECRET_PASSWORD){
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");
    window.scrollTo(0,0);
    sprinkleHearts(18);
  }else{
    error.textContent = "Not quite, birthday boy ♡ Try the hint!";
    document.getElementById("passwordInput").value = "";
  }
}

document.getElementById("passwordInput").addEventListener("keydown", function(e){
  if(e.key === "Enter") unlock();
});

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function openGift(){
  document.getElementById("secret").classList.remove("hidden");
  sprinkleHearts(30);
  document.getElementById("secret").scrollIntoView({behavior:"smooth", block:"center"});
}

function toggleMusic(){
  const song = document.getElementById("song");
  const btn = document.getElementById("musicButton");
  if(song.paused){
    song.play().then(()=>btn.textContent="Pause Our Song ♫").catch(()=>{
      btn.textContent="Add music/our-song.mp3 first ♫";
    });
  }else{
    song.pause();
    btn.textContent="Play Our Song ♫";
  }
}

function sprinkleHearts(count){
  for(let i=0;i<count;i++){
    const h=document.createElement("div");
    h.textContent=Math.random()>.5?"♡":"♥";
    h.style.position="fixed";
    h.style.left=(Math.random()*100)+"vw";
    h.style.bottom="-30px";
    h.style.zIndex="9999";
    h.style.pointerEvents="none";
    h.style.color=Math.random()>.5?"#bd7f98":"#d99aae";
    h.style.fontSize=(14+Math.random()*24)+"px";
    document.body.appendChild(h);
    const duration=3000+Math.random()*2500;
    h.animate([
      {transform:"translateY(0) rotate(0deg)",opacity:0},
      {transform:"translateY(-45vh) rotate(100deg)",opacity:1},
      {transform:"translateY(-110vh) rotate(260deg)",opacity:0}
    ],{duration,easing:"ease-out"});
    setTimeout(()=>h.remove(),duration);
  }
}
