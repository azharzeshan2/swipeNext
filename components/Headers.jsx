
const Headers = () => {
    return (
      <div className="bg-hero-pattern bg-no-repeat bg-center w-full h-screen  bg-cover p-10 ">
        <div className="flex  m-auto  xl:w-96 ">
           <div>
            <img
              src="/logo.png"
              className=" flex  m-auto   mb-5 items-center"
            />
            <h1 className="xl:m-auto xl:text-5xl xl:pt-16 xl:w-10/12 text-2xl md:text-4xl md:m-auto md:w-8/12 md:mt-2 leading-snug text-center font-semibold  sm:m-auto text-tcolor mt-12">
              Swipe voor een verse portie{" "}
              <span className="text-primary font-patrick font-bold"> kockinspiratie</span>!
            </h1>
            <div className="hidden xl:block md:block  xl:m-auto xl:w-11/12 justify-center text-lg pt-10 md:font-black-700 md:m-auto md:w-10/12  text-center leading-loose font-medium text-tcolor      ">
              Swipe Your Bite bundelt de lekkerste vega recepten van het web in
              één app. Van kleurrijke curry tot smakelijke stoofpot. Simpel,
              gezond en razendsnel op tafel.
               We like!{" "}
              <span className="font-bold">
                {" "}
                Download de app en laat je verrassen.{" "}
              </span>
            </div>
            <div className="flex justify-center sm:mt-8 mt-16 ">
              <button
                type="button"
                className=" flex bg-red-200 sm:p-5 p-2 md:p-2 xl:p-5 text-white font-bold rounded-full	"
              >
                Download de app
                <span className="ml-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default Headers;
  