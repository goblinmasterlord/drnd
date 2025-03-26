import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { motion } from 'framer-motion';

const officeLocation = {
  lat: 47.489843,
  lng: 19.084853
};

const mapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  scrollwheel: true,
  mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID,
  styles: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4c6b50" }],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#e6ebe6" }],
    },
  ],
};

export default function GoogleMapSection() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: "beta",
    libraries: ['marker'],
  });

  if (loadError) {
    return (
      <div className="w-full h-full min-h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="text-gray-500">Térkép betöltése sikertelen</div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full min-h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Térkép betöltése...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
    >
      <GoogleMap
        zoom={16}
        center={officeLocation}
        mapContainerClassName="w-full h-full min-h-[400px]"
        options={mapOptions}
        onLoad={(map) => {
          try {
            // Create the marker using the new AdvancedMarkerElement
            const { AdvancedMarkerElement } = google.maps.marker;
            
            // Create a pin element
            const pinElement = document.createElement('div');
            pinElement.innerHTML = `
              <svg viewBox="0 0 24 24" width="40" height="40" fill="#4c6b50" stroke="white" stroke-width="2">
                <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
            `;

            new AdvancedMarkerElement({
              map,
              position: officeLocation,
              content: pinElement,
              title: "Dr. Nagy Donát Ügyvédi Iroda"
            });
          } catch (error) {
            console.error('Error creating marker:', error);
          }
        }}
      />
    </motion.div>
  );
} 