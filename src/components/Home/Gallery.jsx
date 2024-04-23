import React from 'react'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

const images = [
  { src: '/gallery/solar2024-1.webp', width: 300, height: 200 },
  { src: '/gallery/solar2024-2.webp', width: 300, height: 200 },
  { src: '/gallery/solar2024-3.webp', width: 300, height: 200 },
  { src: '/gallery/solar2024-4.webp', width: 300, height: 200 },
  { src: '/gallery/solar2024-5.webp', width: 300, height: 200 },
  { src: '/gallery/solar2024-6.webp', width: 300, height: 200 },
  { src: '/gallery/solar2024-7.webp', width: 300, height: 200 },
  { src: '/gallery/solar2024-8.webp', width: 300, height: 169 },
  { src: '/gallery/solar2024-9.webp', width: 300, height: 169 },
  { src: '/gallery/solar2024-10.webp', width: 300, height: 169 },
  { src: '/gallery/solar2024-11.webp', width: 300, height: 169 },
  { src: '/gallery/solar2024-12.webp', width: 300, height: 169 },
]

const Gallery = () => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images.map((image, index) => (
        <figure key={index} data-src={image.src} className='gallery-item'>
          <img
            src={image.src}
            className='img-gallery'
            width={image.width}
            style={{ objectFit: 'cover' }}
            height={200}
            loading='lazy'
            alt='Solar Storage MEXICO 2024'
          />
        </figure>
      ))}
    </LightGallery>
  )
}

export { Gallery }
