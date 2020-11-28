import { useState, useEffect } from "react";
import { GeoCoordinates } from "../location";

const useGeoCoordinates = () => {
  const [position, setPosition] = useState<GeoCoordinates>({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const geo = navigator.geolocation;
    return geo
      ? (() => {
          const watcher = geo.watchPosition(
            (result) => {
              const coordinates = {
                latitude: result.coords.latitude,
                longitude: result.coords.longitude,
              };
              setPosition(coordinates);
              geo.clearWatch(watcher);
            },
            (f) => setError(`${f.code}-${f.message}`)
          );
        })()
      : setError("Cannot retrieve geocoordinates");
  }, []);
  return { ...position, error };
};

export default useGeoCoordinates;
