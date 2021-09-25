function FooterLast() {
    return (
        <footer class="bg-blue-100">
            <div className="container pt-12 mx-auto pb-10 px-8 sm:px-0 flex items-start md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-2">
                    <img src="/logo.png" alt="" />
                    <p className="max-w-sm mt-2 font-jost text-lg text-black text-center md:text-base md:pr-8 sm:text-left">Swipe Your Bite bundelt de lekkerste vega recepten van het web in één app. Swipe en creëer je persoonlijke receptenboek.</p>
                    
                    <div className="flex flex-row items-end justify-center sm:justify-start my-4">
                        <h1  className="font-jost font-bold text-base mt-3 mr-3">Vlog je ons al?</h1>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pages/category/Food---Beverage/Swipeyourbite-100910614905544/">
                            <img src="/fbpng.png" alt="facebook-icon" className="object-contain mr-2" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/swipeyourbite/">
                            <img src="/insta.png" alt="instagram-icon" className="object-contain mr-2" />
                            </a>
                     </div>         
                </div>
                <div className="flex-1 md:-ml-16 md:-mt-20">
                     <h2 class="font-jost font-semibold text-xl mb-5 md:text-base   ">Contact</h2>
                     <div class="flex flex-row items-center my-2"><img src="/email.png" alt="email-icon" class="object-contain mr-2" /><a href="mailto:info@swipeyourbite.nl"><p className="my-auto md:text-sm md:mr-8">info@swipeyourbite.nl</p></a></div>
                     <div class="flex flex-row my-2"><img src="/phone.png" alt="email-icon" class="object-contain mr-2" /><a href="tel:06-83 56 28 69"><p className="md:text-sm md:mr-8">06-83 56 28 69</p></a></div>
                     </div>
                     <div class="flex-1  md:-mt-8 mb-4">
                         <h2 class="font-jost font-semibold text-xl mb-5 md:text-base">Links</h2>
                         <div class="flex flex-row my-2 hover:underline">
                             <a href="/terms-of-service" target="_blank"><p class="my-auto">Terms of Use</p></a>
                             </div>
                             <div class="flex flex-row items-center my-2 hover:underline">
                                 <a href="/privacy-policy" target="_blank">
                                     <p class="my-auto">Privacy Policy</p>
                                     </a></div>
                                     <div class="flex flex-row my-2 hover:underline">
                                         <a href="/cookie-policy" target="_blank">
                                             <p class="my-auto">Cookies Policy</p>
                                             </a></div>
                           </div>
                           <div class="flex-1">
                               <h2 class="font-jost font-semibold text-xl md:text-base">Download SwipeYourBite op</h2>
                               <div class="flex flex-row flex-wrap justify-start items-center mt-4">
                                   <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.SwipeYourBite.application">
                                       <img className="mr-2 w-32 h-12" src="/GooglePlay.png" alt="google-play-icon" /></a>
                                       <a target="_blank" rel="noreferrer" href="https://apps.apple.com/nl/app/swipeyourbite/id1532039668">
                                           <img className="mr-2 w-32 h-12"  src="/AppStore.png"  alt="app-store-icon" /></a>
                                           </div>
                                           </div>     
            </div>
            <p class="font-jost font-bold text-sm text-center pb-4 mb-0">© Copyright 2021. Swipe Your Bite. Alle rechten voorbehouden. Privacy Policy &amp; Algemene voorwaarden.</p>
        </footer>
    )
}

export default FooterLast
