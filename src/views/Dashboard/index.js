import React from "react";
import { createGlobalStyle } from 'styled-components';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';

import section1 from "./components/section-1"
import section2 from './components/section-2';
import section3 from './components/section-3';
import section4 from './components/section-4';

import "./Dashboard.css"

import HomeImage from '../../assets/img/background.jpg';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

// const currentEpoch = useCurrentEpoch();


const app = () => {
  
return(
  
  <div className="App">
    <BackgroundImage />
    {/* {Number(currentEpoch)} */}
    {/* SECTION 1 */}
    {section1()}

    {/* SECTION 2 */}
    {section2()}

    {/* SECTION 3 */}
    {section3()}

    {/* SECTION 4 */}
    {section4()}
  </div>
  );
};

export default app;