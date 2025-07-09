import ImagesComponent from './ImagesComponent'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
function Gallery() {
    const imagesSections = [
        {
            name: 'Kuchyne',
            images: [

                "/kuchyne/IMG_01.jpg",
                "/kuchyne/IMG_02.jpg",
                "/kuchyne/IMG_03.jpg",
                "/kuchyne/IMG_04.jpg",
                "/kuchyne/IMG_05.jpg",
                "/kuchyne/IMG_06.jpg",
                "/kuchyne/IMG_07.jpg",
                "/kuchyne/IMG_08.jpg",
                "/kuchyne/IMG_09.jpg",
                "/kuchyne/IMG_10.jpg",
                "/kuchyne/IMG_11.jpg",
                "/kuchyne/IMG_12.jpg",
                "/kuchyne/IMG_13.jpg",
                "/kuchyne/IMG_14.jpg",
                "/kuchyne/IMG_15.jpg",
                "/kuchyne/IMG_16.jpg",
                "/kuchyne/IMG_17.jpg",
                "/kuchyne/IMG_18.jpg",
                "/kuchyne/IMG_19.jpg",
                "/kuchyne/IMG_20.jpg",
                "/kuchyne/IMG_21.jpg",
                "/kuchyne/IMG_22.jpg"
            ]
        },

        {
            name: 'Obývacie steny',
            images: [
                "/obyvacieSteny/IMG_01.jpg",
                "/obyvacieSteny/IMG_02.jpg",
                "/obyvacieSteny/IMG_03.jpg",
                "/obyvacieSteny/IMG_04.jpg",
                "/obyvacieSteny/IMG_05.jpg",
                "/obyvacieSteny/IMG_06.jpg",
                
            ]
        },

        {
            name: 'Kúpeľne',
            images: [
                "/kupelne/IMG_01.jpg",
                "/kupelne/IMG_02.jpg",
                "/kupelne/IMG_03.jpg",
                "/kupelne/IMG_04.jpg",
                "/kupelne/IMG_05.jpg",
                "/kupelne/IMG_06.jpg",
                "/kupelne/IMG_07.jpg",
                "/kupelne/IMG_08.jpg",
               
            ]
        },

        {
            name: 'Skrine',
            images: [
                "/skrine/IMG_01.jpg",
                "/skrine/IMG_02.jpg",
                "/skrine/IMG_03.jpg",
                "/skrine/IMG_04.jpg",
                "/skrine/IMG_05.jpg",
                "/skrine/IMG_06.jpg",
                "/skrine/IMG_07.jpg",
                "/skrine/IMG_08.jpg",
                "/skrine/IMG_09.jpg",
                "/skrine/IMG_10.jpg",
                "/skrine/IMG_11.jpg",
                "/skrine/IMG_12.jpg",
                "/skrine/IMG_13.jpg",
                "/skrine/IMG_14.jpg",
                "/skrine/IMG_15.jpg",
                "/skrine/IMG_16.jpg",
                "/skrine/IMG_17.jpg",
                "/skrine/IMG_18.jpg",
                "/skrine/IMG_19.jpg",
                "/skrine/IMG_20.jpg",
                "/skrine/IMG_21.jpg",
                "/skrine/IMG_22.jpg",
                "/skrine/IMG_23.jpg",
                "/skrine/IMG_24.jpg",
                "/skrine/IMG_25.jpg",
               
            ]
        },

        {
            name: 'Dvere',
            images: [
                "/dvere/IMG_01.jpg",
                "/dvere/IMG_02.jpg",
                "/dvere/IMG_03.jpg",
                "/dvere/IMG_04.jpg",
                "/dvere/IMG_05.jpg",
                "/dvere/IMG_06.jpg",
                "/dvere/IMG_07.jpg",
               
            ]
        },

        {
            name: 'Iné',
            images: [
                "/ine/IMG_01.jpg",
                "/ine/IMG_02.jpg",
                "/ine/IMG_03.jpg",
                "/ine/IMG_04.jpg",
                "/ine/IMG_05.jpg",
                "/ine/IMG_06.jpg",
                "/ine/IMG_07.jpg",
                "/ine/IMG_08.jpg",
                "/ine/IMG_09.jpg",
                "/ine/IMG_10.jpg",
                "/ine/IMG_11.jpg",
                "/ine/IMG_12.jpg",
                "/ine/IMG_13.jpg",
                "/ine/IMG_14.jpg",
                "/ine/IMG_15.jpg",
                "/ine/IMG_16.jpg",
                "/ine/IMG_17.jpg",
                "/ine/IMG_18.jpg",
                "/ine/IMG_19.jpg",
               
            ]
        },

    ]

    return (
        <>
            <div className="grid w-full pb-8">
                <div className="grid bg-white/75">
                    {imagesSections.map((section, index) => (
                        <Disclosure
                            key={section.name}
                            defaultOpen={index === 0}
                        >
                            {({ open }) => (
                                <div>
                                    <Disclosure.Button className="relative flex w-full cursor-pointer items-center border-t-1 border-black/10 px-8 py-4 text-black">
                                        <span className="absolute left-1/2 -translate-x-1/2 md:text-xl">
                                            {section.name}
                                        </span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`ml-auto bi bi-chevron-down text-black transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </Disclosure.Button>

                                    <DisclosurePanel
                                        className={`transition-all duration-300 col-span-full p-4 overflow-hidden ${open ? "opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="p-4">
                                            <ImagesComponent images={section.images} />
                                        </div>
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                    ))}

                </div>
            </div >
        </>
    )
}

export default Gallery