"use client"
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import styles from "./Gallery.module.css"
import { useState, useEffect } from 'react';

function Gallery({props}:{props:string[]}) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Detectar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className={styles.gallery}>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
        closeOnTap={false}
        mobileSettings={{
          controls: true,
          showCloseIcon: true,
          download: false,
          rotate: true
        }}
      >
        {
          props.map((img,index) => (
            <a href={img} key={index}>
              <img alt={`foto ${index+1}`} src={img} className={styles.gallery__img}/>
            </a>
          ))
        }
      </LightGallery>
    </div>
  );
}

export default Gallery;