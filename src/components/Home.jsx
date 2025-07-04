function Home() {
    return (
        <>
            <div className="relative h-full object-center sm:relative">
                <img className="mx-auto my-6 h-40 w-40 rounded-full
                                 sm:absolute sm:top-[6%] sm:left-1/2 sm:mx-0 sm:my-0 sm:h-52 sm:w-52 sm:-translate-x-1/2 sm:transform
                                   md:h-56 md:w-56
                                      xl:h-64 xl:w-64"
                    src="../../images/logo.jpg"></img>
                <div className="flex h-full flex-col gap-6 pb-10">
                    <div className="mx-4 place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-white
                                    sm:absolute sm:top-[35%] sm:left-1/20 sm:w-4/10
                                      md:top-[35%]
                                       lg:top-1/2 lg:w-3/10 lg:-translate-y-1/2 lg:transform">
                        <ul className="text-md list-inside list-disc leading-6 subpixel-antialiased
                                          sm:text-xl sm:leading-8
                                                        lg:text-2xl lg:leading-10">
                            <li>nábytok na mieru</li>
                            <li>kuchynské linky</li>
                            <li>šatníkové skrine</li>
                            <li>obývacie steny</li>
                            <li>detské izby</li>
                        </ul>
                    </div>

                    <div className="mx-4 place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-white
                                    sm:absolute sm:top-[35%] sm:right-1/20 sm:w-4/10
                                      md:top-[35%]
                                        lg:top-1/2 lg:w-3/10 lg:-translate-y-1/2 lg:transform">
                        <ul className="text-md list-inside list-disc leading-6 subpixel-antialiased
                                        sm:text-xl sm:leading-8
                                            md:leading-8
                                                lg:text-2xl lg:leading-10">
                            <li>podlahy</li>
                            <li>žalúzie</li>
                            <li>siete proti hmyzu</li>
                            <li>servis okien</li>
                            <li>montáž dverí</li>
                        </ul>
                    </div>
                    <p className=" mb-4 w-full bg-black/50 p-4 text-justify text-white sm:absolute sm:bottom-[10%] md:bottom-[8%] md:p-6 md:text-lg lg:p-6 xl:bottom-[6%] xl:left-1/2 xl:w-[88%] xl:-translate-x-1/2 xl:transform xl:rounded-xl xl:border xl:border-white xl:text-xl 2xl:bottom-[8%]">
                        Nábytok na mieru je to, čo doladí vaše vysnívané bývanie do dokonalosti.
                        Či už ide o vstavané skrine, malé skrinky pod umývadlo v kúpelni alebo komplikovanú kuchyňu, v ktorej bude radosť variť a samozrejme,
                        aj radosť sa na ňu pozerať.
                        Nezabúdame na oddychovú zónu, ktorej neodmysliteľnou súčasťou je obývacia stena, ani na pracovnú zónu, kde komfort zabezpečí ideálny pracovný stôl.
                        Skrátka, predstavivosti sa medze nekladú.
                        Skúsený stolár sa svojím precíznym prístupom postará nielen o kvalitný nábytok, ale vďaka dlhoročnej praxi aj o servis okien.
                    </p>
                </div>

               
            </div>
        </>
    )
}

export default Home