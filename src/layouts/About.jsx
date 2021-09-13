import React from 'react';
import PageHeader from '../components/page-header';
import LandingSection from "components/landing-section"


  export default function About(props) {
    console.log(props);
    return(
      <div className="header-phone">
        <div className="">


        </div>
        <p>{props.about.data.title.text}</p>
          <p>{props.about.data.desc.text}</p>
          {/* <PageHeader
            title2={intro.intro_title[0].text}
            title3={intro.intro_subtitle[0].text}
            serviceType={ (lang === "en") ? "Know more about Canfone" : "En savoir plus sur Canfone"}
            price={"$" + intro.start_price}
          /> */}

          {/* <div className="px-4 md:px-8 pt-6 md:pt-16 pb-10 md:pb-24">
          <LandingSection type={2} section_data={section[0]} />
        </div> */}
      </div>
    )
  }