import React from "react";
import { createGlobalStyle } from 'styled-components';
import Page from "../../components/Page";
import Section1 from "./components/section-1"
import Section2 from './components/section-2';
import Section3 from './components/section-3';
import Section4 from './components/section-4';


import "./Dashboard.css"

import HomeImage from '../../assets/img/background.jpg';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;


const Dashboard = () => {

return(
  <Page>
  <div className="App">
    
    <BackgroundImage />

    {/* SECTION 1 */}
    
    {Section1()}
    

    {/* SECTION 2 */}
    {Section2()}

    {/* SECTION 3 */}
    {Section3()}

    {/* SECTION 4 */}
    {Section4()}
    
  </div>
  </Page>
  );
};

export default Dashboard;