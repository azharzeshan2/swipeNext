import { useEffect } from "react";
function PopUpMB() {
  useEffect(() => {
    typeof window !== undefined && window?.addEventListener("scroll", () => {

        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        var poppup2 = document.getElementById("poppup2");
    
        if (Math.ceil(scrolled) === scrollable) {
          poppup2.style.display = "none";
        } else {
          poppup2.style.display = "flex";
        }
    

      });
  
}, [])
  return (
    <div id="poppup2" class="visible fixed z-50 bottom-5 left-5 max-w-max visible md:invisible shadow-popup  bg-white py-3 px-4 rounded-xl">
      <div class="flex flex-col ">
        <div>
          <p class="font-jost font-bold text-sm text-black mb-1">
            Swipe, cook &amp; feel good!
          </p>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default PopUpMB;
