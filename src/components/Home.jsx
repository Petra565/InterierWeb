import TextArea from './TextArea'
function Home() {
    return (
        <>
            <div className="relative h-full">
                <img className="absolute top-20 left-1/2 h-64 w-64 -translate-x-1/2 transform rounded-full" src="../../images/logo.jpg"></img>
                <div className="absolute top-1/7 left-1/20 z-10 w-1/4 place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-white">
                    <ul className="list-inside list-disc text-2xl leading-10 subpixel-antialiased">
                        <li>nábytok na mieru</li>
                        <li>kuchynské linky</li>
                        <li>šatníkové skrine</li>
                        <li>obývacie steny</li>
                        <li>detské izby</li>
                    </ul>
                </div>
                <div className="absolute top-1/7 right-1/20 z-10 w-1/4 place-items-center rounded-xl border-1 border-white bg-black/50 p-4 text-left text-white">
                    <ul className="list-inside list-disc text-2xl leading-10 subpixel-antialiased">
                        <li>podlahy</li>
                        <li>žalúzie</li>
                        <li>siete proti hmyzu</li>
                        <li>servis okien</li>
                        <li>montáž dverí</li>
                    </ul>
                </div>
                <div className="absolute bottom-1/10 font-['Ephesis'] left-1/2 z-10 -translate-x-1/2 transform p-4 text-[8rem]  text-white text-shadow-black text-shadow-lg md:whitespace-nowrap">Kvalita z malej dielne.
                </div>
            </div>
        </>
    )
}

export default Home