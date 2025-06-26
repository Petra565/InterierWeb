import React from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
function ImagesComponent({ images }) {

    return (
        <>
            <div className="grid">
                <SlideshowLightbox className="grid grid-cols-3 place-items-center gap-4 sm:grid-cols-4 md:grid-cols-5" showThumbnails theme="lightbox">
                {images.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`image ${index + 1}`}
                            className="h-auto w-full cursor-pointer rounded shadow-md"
                        />
                ))}
                </SlideshowLightbox>
    </div>
        </>
    )
}
export default ImagesComponent