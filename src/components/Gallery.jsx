import ImagesComponent from './ImagesComponent'
function Gallery() {
    const imagesSections = [
        {
            name: 'Kuchyne',
            images: [
                "/images/kuchyne/IMG_01.jpg",
                "/images/kuchyne/IMG_02.jpg",
                "/images/kuchyne/IMG_03.jpg",
                "/images/kuchyne/IMG_04.jpg",
                "/images/kuchyne/IMG_05.jpg",
                "/images/kuchyne/IMG_06.jpg",
                "/images/kuchyne/IMG_07.jpg",
                "/images/kuchyne/IMG_08.jpg",
                "/images/kuchyne/IMG_09.jpg",
                "/images/kuchyne/IMG_10.jpg",
                "/images/kuchyne/IMG_11.jpg",
                "/images/kuchyne/IMG_12.jpg",
                "/images/kuchyne/IMG_13.jpg",
                "/images/kuchyne/IMG_14.jpg",
                "/images/kuchyne/IMG_15.jpg",
                "/images/kuchyne/IMG_16.jpg",
                "/images/kuchyne/IMG_17.jpg",
                "/images/kuchyne/IMG_18.jpg"
            ]
        },
        {
            name: 'Obývacie steny',
            images: [
                "/images/obyvacieSteny/IMG_51.jpg",
                "/images/obyvacieSteny/IMG_52.jpg",
                "/images/obyvacieSteny/IMG_53.jpg",
                "/images/obyvacieSteny/IMG_54.jpg",
                "/images/obyvacieSteny/IMG_55.jpg",
            ]
        },
        {
            name: 'Kúpeľne',
            images: [
                "/images/kupelne/IMG_56.jpg",
                "/images/kupelne/IMG_57.jpg",
                "/images/kupelne/IMG_58.jpg",
                "/images/kupelne/IMG_59.jpg",
                "/images/kupelne/IMG_60.jpg",
                "/images/kupelne/IMG_61.jpg",
                "/images/kupelne/IMG_62.jpg",
                "/images/kupelne/IMG_63.jpg",
            ]
        },
        {
            name: 'Skrine',
            images: [
                "/images/skrine/IMG_25.jpg",
                "/images/skrine/IMG_26.jpg",
                "/images/skrine/IMG_27.jpg",
                "/images/skrine/IMG_28.jpg",
                "/images/skrine/IMG_29.jpg",
                "/images/skrine/IMG_30.jpg",
                "/images/skrine/IMG_31.jpg",
                "/images/skrine/IMG_32.jpg",
                "/images/skrine/IMG_33.jpg",
                "/images/skrine/IMG_34.jpg",
                "/images/skrine/IMG_35.jpg",
                "/images/skrine/IMG_36.jpg",
                "/images/skrine/IMG_37.jpg",
                "/images/skrine/IMG_38.jpg",
                "/images/skrine/IMG_39.jpg",
                "/images/skrine/IMG_40.jpg",
                "/images/skrine/IMG_41.jpg",
                "/images/skrine/IMG_42.jpg",
                "/images/skrine/IMG_43.jpg",
                "/images/skrine/IMG_44.jpg",
                "/images/skrine/IMG_45.jpg",
                "/images/skrine/IMG_46.jpg",
                "/images/skrine/IMG_47.jpg",
                "/images/skrine/IMG_48.jpg",
                "/images/skrine/IMG_49.jpg",
            ]
        },
        {
            name: 'Dvere',
            images: [
                "/images/dvere/IMG_82.jpg",
                "/images/dvere/IMG_83.jpg",
                "/images/dvere/IMG_84.jpg",
                "/images/dvere/IMG_85.jpg",
                "/images/dvere/IMG_86.jpg",
                "/images/dvere/IMG_87.jpg",
                "/images/dvere/IMG_88.jpg",
                "/images/dvere/IMG_90.jpg",
                "/images/dvere/IMG_91.jpg",
                "/images/dvere/IMG_92.jpg",
            ]
        },

        {
            name: 'Iné',
            images: [
                "/images/ine/IMG_64.jpg",
                "/images/ine/IMG_65.jpg",
                "/images/ine/IMG_66.jpg",
                "/images/ine/IMG_67.jpg",
                "/images/ine/IMG_68.jpg",
                "/images/ine/IMG_69.jpg",
                "/images/ine/IMG_70.jpg",
                "/images/ine/IMG_71.jpg",
                "/images/ine/IMG_72.jpg",
                "/images/ine/IMG_73.jpg",
                "/images/ine/IMG_74.jpg",
                "/images/ine/IMG_75.jpg",
                "/images/ine/IMG_76.jpg",
                "/images/ine/IMG_77.jpg",
                "/images/ine/IMG_78.jpg",
                "/images/ine/IMG_79.jpg",
                "/images/ine/IMG_80.jpg",
                "/images/ine/IMG_81.jpg",
            ]
        },

    ]

    return (
        <>
            <div className="grid w-full">
                <div className="grid h-full bg-white/75 px-4 pb-10 md:mx-10 md:py-4 md:pb-20">
                    {imagesSections.map((section) => (
                        <div className="col-span-full grid-rows-5" key={section.name}>
                            <h1 className="my-4 text-center font-extrabold text-black sm:text-xl md:text-2xl">{section.name}</h1>
                                <ImagesComponent
                                    images={section.images}
                                ></ImagesComponent>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Gallery