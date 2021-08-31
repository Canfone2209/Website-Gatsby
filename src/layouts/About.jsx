import React from 'react';

import {
    Img__canfone_logo_white
  } from "../utils/imgloader"
  

  export default function Account({lang}) {

    return(
        <div className="account-login">
      <div className="login-box mx-auto my-auto">
        <div className="pt-12 mt-32">
          <img src={Img__canfone_logo_white} className="mx-auto" alt="" />
        </div>
        <div className="py-10">
          <p className="text-base text-white font-light mb-4 text-center">
            { (lang === "en") ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." : "Gérez vos services Canfone en ligne."}
          </p>
        </div>
      </div>
    </div>
    )
  }