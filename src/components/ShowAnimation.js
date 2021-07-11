import {useEffect} from 'react';
import { useLocation } from 'react-router-dom'

/* Code taken from https://stackoverflow.com/questions/63817826/react-js-framer-motion-animate-only-on-initial-page-load */

export const useIntro = () => {

const location = useLocation()
const urlPath = location.pathname
const storage = window.localStorage;
const currTimestamp = Date.now();
const timestamp = JSON.parse(storage.getItem(`timestamp${urlPath}`) || '1000');

const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

const hasTimePassed = currTimestamp - timestamp > timeLimit;

useEffect(() => {
    hasTimePassed ? 
        storage.setItem(`timestamp${urlPath}`, currTimestamp.toString()) 
        : 
        storage.setItem(`timestamp${urlPath}`, timestamp.toString());
}, [currTimestamp, hasTimePassed, storage, timestamp, urlPath]);

return hasTimePassed;
};

export default useIntro;

