import { useEffect } from "react";
const Popsds =() => {
    useEffect(() => {
        typeof window !== undefined && window?.addEventListener("scroll", () => {
    
            const scrollable =
              document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            var poppup = document.getElementById("poppup");
        
            if (Math.ceil(scrolled) === scrollable) {
              poppup.style.display = "none";
            } else {
              poppup.style.display = "flex";
            }
        
    
          });
      
    }, [])
   
     
    return (
        <div  id="poppup" className="md:visible fixed z-50 bottom-5 right-20 max-w-max invisible md:visible shadow-2xl  bg-white py-5 px-4 rounded-xl">
            <div className="flex flex-row">
            <div><p className="font-jost text-base text-black">Swipe, cook &amp; feel good!</p>
            <p class="font-jost font-semibold text-2xl text-black">Here you go! Download <br />gratis kookinspiratie.</p>
            <div class="flex flex-row">
                <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.SwipeYourBite.application">
                    <img src="/GooglePlay.a08f9a89.webp" alt="google-play-icon" className="mr-3 " /></a>
                    <a target="_blank" rel="noreferrer" href="https://apps.apple.com/nl/app/swipeyourbite/id1532039668">
                <img src="/AppStore.187512ae.webp" alt="app-store-icon" /></a>
                </div>
               
                </div>
            <img src="/popodu.png" alt="charactor-icon" className="h-32 w-auto self-center"></img>
            <img src="/bubblesss.png" alt="speech-bubble" className="absolute -right-10 -top-10"></img>
            <div class="absolute -right-4 -top-6"><div class="relative transform rotate-12">
                <p class="font-jost text-xs font-semibold text-black wr ">Brocoolie!<br /> Gerechten<br /> met<br /> bloemkool!</p>
                </div></div>
        </div>
        </div>
        
    )
}

export default Popsds
