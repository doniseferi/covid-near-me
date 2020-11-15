import {useState, useEffect} from 'react';
import { GeoCoordinates } from '../location';

const useGeoCoordinates = () => {
  const [position, setPosition] = useState<GeoCoordinates>();
  const [error, setError] = useState<string|null>(null);
 
  useEffect(() => {
    const geo = navigator.geolocation;
    return !geo 
    ? setError('Cannot retrieve geocoordinates')
    : (() => {
      const watcher = geo.watchPosition(
        result => setPosition({
        latitude: result.coords.latitude, 
        longitude: result.coords.longitude}), 
        f => setError(`${f.code}-${f.message}`));
        return () => geo.clearWatch(watcher);
      })()
    }, []);
    return {...position, error}
}

export default useGeoCoordinates;
