import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import './business-services.css';

const Business = (props) => {
    return (
        <div className="md:flex">
            <div className="package-description md:flex-1 pt-0 px-4 md:pb-4">
            <h2 className="text-4xl font-semibold pt-2 mb-3 text-grey-800 border-b border-gray-500">Title</h2>
            <p className="grey-600 mb-4 text-lg font-semibold">Lorem epsum</p>
            <p className="grey-600 font-light pb-3">All our phone packages come with "same bill always" guarantee!</p>
            <ul className="list-disc ml-12 mr-6">
              <li className="text-sm grey-600">Bring your own number or get a new one</li>
              <li className="text-sm grey-600">Telephone adapter (ATA) included.</li>
              <li className="text-sm grey-600">No Hassle, No Contract</li>
            </ul>
          </div>
          <div className="text-center md:text-left md:border-l md:border-gray-400 md:pl-6 mx-4 my-3 md:pt-3">
          <button
            data-next-page="internet"
            className="shop-internet-btn next-page-btn text-white text-xl font-semi-bold py-3 px-5 rounded-full"
            >
        { "Contact us"}
        </button>
            <div className="text-center pt-3 md:pt-8">
            </div>
          </div>
        </div>
        
    )
}

export default Business;