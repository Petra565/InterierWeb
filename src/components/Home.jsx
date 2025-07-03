function Home() {
    return (
        <>
            <div className="relative h-full object-center sm:relative">
                <img className="mx-auto my-6 h-40 w-40 rounded-full
                                 sm:absolute sm:top-[6%] sm:left-1/2 sm:mx-0 sm:my-0 sm:h-52 sm:w-52 sm:-translate-x-1/2 sm:transform
                                   md:h-56 md:w-56
                                      xl:h-64 xl:w-64"
                    src="../../images/logo.jpg"></img>
                <div className="flex h-full flex-col gap-4 px-4 pb-10">
                    <div className="place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-white
                                    sm:absolute sm:top-[45%] sm:left-1/20 sm:w-4/10
                                       lg:top-1/2 lg:w-3/10 lg:-translate-y-1/2 lg:transform">
                        <ul className="text-md list-inside list-disc leading-6 subpixel-antialiased
                                          sm:text-xl
                                                    md:leading-8
                                                        lg:text-2xl lg:leading-10">
                            <li>nábytok na mieru</li>
                            <li>kuchynské linky</li>
                            <li>šatníkové skrine</li>
                            <li>obývacie steny</li>
                            <li>detské izby</li>
                        </ul>
                    </div>
                    <div className="my-1 sm:hidden mx-auto w-max block font-['Ephesis'] text-[2.5rem]  text-white text-shadow-black text-shadow-lg whitespace-nowrap
                                       ">Kvalita z malej dielne.
                    </div>
                    <div className="place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-white
                                    sm:absolute sm:top-[45%] sm:right-1/20 sm:w-4/10
                                        lg:top-1/2 lg:w-3/10 lg:-translate-y-1/2 lg:transform">
                        <ul className="text-md list-inside list-disc leading-6 subpixel-antialiased
                                        sm:text-xl
                                            md:leading-8
                                                lg:text-2xl lg:leading-10">
                            <li>podlahy</li>
                            <li>žalúzie</li>
                            <li>siete proti hmyzu</li>
                            <li>servis okien</li>
                            <li>montáž dverí</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home