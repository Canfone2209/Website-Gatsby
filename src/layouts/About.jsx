import React from 'react';
import PageHeader from '../components/page-header';
import LandingSection from "components/landing-section"


  export default function About(props) {
    console.log(props);
    return(
      <div className="header-phone">
          <PageHeader
            title2={props.about.data.title.text}
            title3={props.about.data.desc.text}
          />

          <div className="px-4 md:px-8 pt-6 md:pt-16 pb-10 md:pb-24">
          {/* <LandingSection type={2} section_data={section[0]} /> */}
        </div>
      </div>
    )
  }