console.log("Made with love for Leen💖")
document.addEventListener("DOMContentLoaded",()=>{
    const btn=
    document.getElementById("reveal-btn");
        const hiddenMsg =
        document.getElementById("hidden-msg");

        if (btn &&hiddenMsg) {
            btn.addEventListener("click", ()=>{
                hiddenMsg.classList.toggle("show");
            });
        }
});

document.addEventListener("mousemove", (e)=>{
    if
    (document.body.classList.contains("gallery-page"))
    {
        const heart=document.createElement("div");
        heart.innerText="💖"
        heart.classList.add("heart");
        heart.style.left = e.pageX + "px";
        heart.style.top = e.pageY = "px";
        document.body.appendChild(heart);

        setTimeout(()=> {
            heart.remove();
        }, 2000);
    }
});