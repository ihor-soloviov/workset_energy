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

type ContactUsItem = {
  title: string;
  text: string;
  href: string;
};

const ContactUsMap = () => {
  const contactUsItems: ContactUsItem[] = [
    {
      title: 'E-Mail',
      text: 'office@work-set.eu',
      href: 'mailto:office@work-set.eu',
    },
    {
      title: 'Telefon-Nr.',
      text: '+49-73-114-613-210',
      href: 'tel:+4973114613210',
    },
  ];
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true);

  const toggleInfoWindowClick = () => setIsInfoWindowOpen(!isInfoWindowOpen);

  const iconUrl = 'https://i.imgur.com/mWKQgrV.png';

  const mapStyles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text',
      stylers: [
        {
          saturation: 15,
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 48.39848723783039,
    lng: 9.958575374301466,
  };

  const markerPosition = {
    lat: 48.39862973533884,
    lng: 9.958661221747017,
  };

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
