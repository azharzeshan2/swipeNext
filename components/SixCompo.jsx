function SixCompo() {
  return (
      <section className=" m-auto mb-32">
    <div className=" container px-5 py-5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden relative  ">
        <img src="/section-six.png" alt="" className="object-contain object-center h-full w-full" />
      </div>
      <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden relative">
        <h1  className="font-jost font-semibold text-4xl text-black mb-6  text-center lg:text-left xl:text-left md:text-left">Foodbloggers unite!</h1>
        <p className="font-jost text-lg text-black mb-2 text-center xl:text-left lg:text-left md:text-left">
          Samen staan we sterker. Wij helpen jouw positieve bijdrage aan de
          planeet te vergroten. Doe je mee?
        </p>
       
          <form action="" className="mb-4 w-4/5 mx-auto sm:mx-0">
           <div className="flex flex-col mb-4">
           <label className="font-jost text-lg text-left"  htmlFor="hed1">Je voor & achternaam</label>
            <input className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1" type="text" />
           </div>
           <div className="flex flex-col mb-4">
           <label className="font-jost text-lg text-left"  htmlFor="hed1">Je e-mailadres</label>
            <input className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1" type="text" />
           </div>
           <div className="flex flex-col mb-4">
           <label className="font-jost text-lg text-left"  htmlFor="hed1">Je telefoonnummer (optioneel)</label>
            <input className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1" type="text" />
           </div> <div className="flex flex-col mb-4">
           <label className="font-jost text-lg text-left" htmlFor="hed1">URL van je blog</label>
            <input className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1" type="text" />
           </div>
           <div className="flex flex-col mb-4">
           <button className="w-full mb-5 sm:mb-0 mt-10 bg-button rounded-full py-3 sm:py-6 
            px-5 font-jost font-semibold text-xl text-white flex flex-row justify-between 
             items-center outline-none focus:ring-1 bg-red-200">Neem contact op
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
           </button>
            </div>
           </form>
        </div>
    
    </div>
    </section>
  );
}

export default SixCompo;
