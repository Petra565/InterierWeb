import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ImagesComponent({ images, alt }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const lightboxSlides = images.map((src) => ({
        src: `/images/full${src}`,
    }));

    return (
        <>
            <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 md:grid-cols-5">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={`/images/thumbs${src}`}
                        alt={`${alt + "_" + i}`}
                        className="cursor-pointer rounded shadow-xl shadow-black/50 transition-transform duration-300 hover:scale-105"
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    />
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={lightboxSlides}
            />
        </>
    );
}

export default ImagesComponent;