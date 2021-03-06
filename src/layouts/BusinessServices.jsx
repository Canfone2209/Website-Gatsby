import React from "react"
import FAChat from "../components/fa-chat"
import CanMap from "../components/canfone-map"
import PageHeader from "../components/page-header"
import LandingSection from "components/landing-section"
import Business from '../components/business-services';


export default function BusinessServices ({intro, section, lang, business}) {
  console.log(business.nodes[0].data.business_group[0].business_title[0].text);
  return <>
    <div className="header-phone">

    
      <PageHeader
        title2={business.nodes[0].data.business_group[0].business_title[0].text}
        title3={business.nodes[0].data.business_group[0].business_desc[0].text}
        // serviceType={ (lang === "en") ? "Loren Epsum consectetur adipiscing elit" : "Bienvenue à Paris"}
        // price={"$" + intro.start_price}
      />
    </div>


    <FAChat lang={lang}/>
    {/* <CanMap lang={lang}/> */}
    <Business />
    <Business />

    <div className="px-4 md:px-8 pt-6 md:pt-16 pb-10 md:pb-24">
      {/* <LandingSection type={2} section_data={section[0]} />  */}
    <div className="">
    
  
    </div>
    </div>
  </>
}