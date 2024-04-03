'use client';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import styles from './ContactUsMap.module.css';
import { inter } from '@/utils/fonts';
import { useState } from 'react';
import { contactUsItems } from './contactUsItems';
import {
  mapStyles,
  center,
  markerPosition,
  mapContainerStyle,
  iconUrl,
} from '@/utils/map';

const ContactUsMap = () => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true);

  const toggleInfoWindowClick = () => setIsInfoWindowOpen(!isInfoWindowOpen);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCFu2436NGhyXMBwq8mLiAhsl_SSYYRhvI',
  });

  return (
    <div className={styles.contactUsImgWrap}>
      {isLoaded && (
        <GoogleMap
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
              position: window.google.maps.ControlPosition.TOP_RIGHT,
            },
          }}
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={17.1}
          onClick={toggleInfoWindowClick}
        >
          <Marker
            options={{ icon: iconUrl }}
            onClick={toggleInfoWindowClick}
            position={markerPosition}
          />

          {isInfoWindowOpen && (
            <InfoWindow
              position={markerPosition}
              options={{
                disableAutoPan: true,
                pixelOffset: new window.google.maps.Size(0, -45),
                minWidth: 174,
              }}
            >
              <div className={styles.contactUsLocationWrap}>
                <p
                  className={`${styles.contactUsLocationText} ${styles.address} ${inter.className}`}
                >
                  Magirus-Deutz-Str. 12 89077 Ulm
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
      <div className={styles.contactUsAddressMainWrap}>
        <div className={styles.contactUsAddressWrap}>
          <h3 className={styles.contactUsTitle}>Adresse</h3>
          <p
            className={`${styles.contactUsLink} ${styles.address} ${inter.className}`}
          >
            Magirus-Deutz-Str. 12
            <br className={styles.contactUsBr} />
            89077 Ulm
          </p>
        </div>
        <ul className={styles.contactUsList}>
          {contactUsItems.map(({ text, title, href }) => (
            <li key={title} className={styles.contactUsItem}>
              <h3 className={styles.contactUsTitle}>{title}</h3>
              <a
                className={`${styles.contactUsLink} ${inter.className}`}
                href={href}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactUsMap;
