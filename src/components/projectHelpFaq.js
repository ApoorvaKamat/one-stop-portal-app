import React, {useState} from "react";
import NewsCard from "./card"
import { ContactCard } from "./contactCard";
import "../style/projectHelpFaq.css";


export function Faq(props) {
  const [contactData, setContactData] = useState([]);
  let index = 0;
  const getContactData = () => {
    return props.displayData
  }
  console.log("isFethched",props.displayData);
  return (
    <div className={`d-flex flex-row vh-100`}>
        <div className={`d-flex flex-column border-end border-dark w-25 ${props.fetched?"min-width-15":""}`}>
            <h4 className="bg-subhead py-2 text-white m-0 mh-10">FILTERS</h4>
            <div className="d-flex flex-column m-4">
              <h2 className="text-start m-2">Date</h2>
              <div className={`d-flex ${props.fetched?"flex-column":"flex-row"} text-start my-2 justify-content-between`}>
                <div className="m-2 text-start">From</div>
                <input type="text" className={`form-control ${props.fetched?"w-100":"w-50"} text-start`} placeholder="mm/dd/yyyy" aria-label="From" />
              </div>
              <div className={`d-flex ${props.fetched?"flex-column":"flex-row"} text-start my-2 justify-content-between`}>
                <div className="m-2 text-start">To</div>
                <input type="text" className={`form-control ${props.fetched?"w-100":"w-50"} text-start`} placeholder="mm/dd/yyyy" aria-label="To" />
              </div>
              <div className={`d-flex ${props.fetched?"flex-column":"flex-row"} text-start my-2 justify-content-between`}>
                <div className="m-2 text-start">Author</div>
                <input type="text" className={`form-control ${props.fetched?"w-100":"w-50"} text-start`} placeholder="Enter Author Name" aria-label="Author" />
              </div>
              <div className={`d-flex ${props.fetched?"flex-column":"flex-row"} text-start my-2 justify-content-between`}>
                <div className="m-2 text-start">Division</div>
                <input type="text" className={`form-control ${props.fetched?"w-100":"w-50"} text-start`} placeholder="Enter Division" aria-label="Division" />
              </div>
            </div>
        </div>
        <div className={`d-flex flex-column border-end border-dark ${props.fetched?"min-width-50 mw-50":"w-75"}`}>
            <h4 className=" bg-subhead py-2 text-white mh-10">{props.fetched?"DISCUSSIONS":"FREQUENTLY ASKED QUESTIONS (FAQ)"}</h4>
            <NewsCard data={props.displayData}/>
        </div>
        {props.fetched?
            <div className={`d-flex flex-column border-end border-dark min-width-30`}>
              <h4 className=" bg-subhead py-2 text-white mh-10 w-100">MEET THE EXPERTS</h4>
              <ContactCard data={props.contactList} />
            </div>
          : 
          <></>}
    </div>
  );
}