function ThirdCompo() {
    return (
        <div className="mt-10">
        <h1 className=" xl:text-4xl text-xl md:text-2xl font-bold text-tcolor text-center ">Jouw snelle vega receptenmachine</h1>
            <div className="xl:flex  grid md:flex items-center justify-center space-x-4 xl:mx-28 my-8 mx-8 xl:my-8">
                <div className="  grid border shadow-2xl border-t-2 p-5 justify-items-center rounded-xl my-2	">
                    <img src="/first-img.png" alt="" />
                    <h1 className="xl:text-2xl font-bold text-tcolor mt-2  text-center">Alle recepten op één plek</h1>
                    <p className="text-center text-lg font-medium mt-2">
                    We werken samen met nieuwe en bekende foodblogs. Samen creëren we één groot platform vol kookinspiratie.
                    </p>
                </div>
                <div className="grid border border-t-2 shadow-2xl p-5 justify-items-center text-center	rounded-xl my-2	">
                    <img src="/second_image.png" alt="" />
                    <h1 className="xl:text-2xl font-bold text-tcolor mt-2 ">Ontdek nieuwe gerechten</h1>
                    <p className="text-center text-lg font-medium mt-2">
                    Verras je smaakpapillen eens met een nieuw recept. Daar hoef je alleen maar even kort voor te swipen. Simpel.
                    </p>
                </div>
                <div className=" grid border border-t-2 p-5	 shadow-2xl justify-items-center  text-center rounded-xl  my-2	">
                    <img src="/first-img.png" alt="" />
                    <h1 className="xl:text-2xl font-bold text-tcolor mt-2">1, 2, 3, aan tafel!</h1>
                    <p className="text-center text-lg font-medium mt-2">
                    Uitdagingen in de keuken? No thanks. Liever simpel, snel en supersmakelijk. Minder koken, meer tafelen!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ThirdCompo
