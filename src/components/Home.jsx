function Home() {
    return (
        <>
            <div className="relative object-center sm:relative sm:h-[calc(100vh-100px)]">
                <img className="mx-auto my-6 h-40 w-40 rounded-full
                                 sm:absolute sm:top-2 sm:left-1/2 sm:mx-0 sm:my-0 sm:h-40 sm:w-40 sm:-translate-x-1/2 sm:transform
                               md:top-6 md:h-40 md:w-40
                                   lg:top-[10%] lg:h-60 lg:w-60
                                      xl:h-60 xl:w-60"
                    src="../../images/logo.jpg"></img>
                <div className="flex h-full flex-col gap-6 pb-10">
                    <div className="mx-4 place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-white
                                    sm:absolute sm:top-[29%] sm:left-1/20 sm:w-4/10
                                      md:top-[32%]
                                       lg:top-[40%] lg:w-3/10 lg:-translate-y-1/2 lg:transform">
                        <ul className="text-md list-inside list-disc leading-6 subpixel-antialiased
                                          sm:text-xl sm:leading-6
md:leading-6
                                                        lg:text-xl lg:leading-8">
                            <li>nábytok na mieru</li>
                            <li>kuchynské linky</li>
                            <li>šatníkové skrine</li>
                            <li>obývacie steny</li>
                            <li>detské izby</li>
                        </ul>
                    </div>

                    <div className="mx-4 place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-white
                                    sm:absolute sm:top-[29%] sm:right-1/20 sm:w-4/10
                                      md:top-[32%]
                                        lg:top-[40%] lg:w-3/10 lg:-translate-y-1/2 lg:transform">
                        <ul className="text-md list-inside list-disc leading-6 subpixel-antialiased
                                        sm:text-xl sm:leading-6
                                            md:leading-6
                                                lg:text-xl lg:leading-8">
                            <li>podlahy</li>
                            <li>žalúzie</li>
                            <li>siete proti hmyzu</li>
                            <li>servis okien</li>
                            <li>montáž dverí</li>
                        </ul>
                    </div>
                    <p className=" mb-4 w-full bg-black/50 p-4 text-justify text-white sm:absolute sm:bottom-[6%] md:text-md md:bottom-[6%] md:p-6 lg:p-6 xl:bottom-[6%] xl:left-1/2 xl:w-[88%] xl:-translate-x-1/2 xl:transform xl:rounded-xl xl:border xl:border-white xl:text-xl 2xl:bottom-[8%]">
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