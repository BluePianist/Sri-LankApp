import React from 'react';
import { G, Path } from 'react-native-svg';
 
// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }
 
export default {
    SortArrows: <G><Path d="M0 45h90L45 0 0 45z"/><Path d="M0 55h90l-45 45L0 55z"/></G>,
    Tick: {
        svg: <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z"/>,
        viewBox: '0 0 50 50',
    },
    User:{
        svg: <Path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/>,
        viewBox:'0 0 448 512',
    },
    Temple:{
        svg: <Path fill="currentColor" d="M496 352h-16V240c0-8.8-7.2-16-16-16h-16v-80c0-8.8-7.2-16-16-16h-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16S96 7.2 96 16v112H80c-8.8 0-16 7.2-16 16v80H48c-8.8 0-16 7.2-16 16v112H16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h80V352h32V224h32v-96h32v96h-32v128h-32v160h80v-80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v80h80V352h-32V224h-32v-96h32v96h32v128h32v160h80c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zM232 176c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v48h-48zm56 176h-64v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"></Path>,
        viewBox: '0 0 512 512',
    },
    Tree:{
        svg: <Path fill="currentColor" d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"></Path>,
        viewBox:'0 0 384 512',
    },
    Beach:{
        svg: <Path fill="currentColor" d="M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z"></Path>,
        viewBox:'0 0 640 512',
    },
}