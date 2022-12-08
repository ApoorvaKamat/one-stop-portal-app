import React, {useEffect, useState} from "react";
import NewsCard from "./card"
import { ContactCard } from "./contactCard";
import "../style/projectHelpFaq.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { set } from "core-js/core/dict";
import { Button } from "react-bootstrap";


export function Faq(props) {
  const [inputValue,setInputValue] = useState('');
  const [isExtfilter, setIsExtFilter] = useState(false);
  const [filterByAuthors,setFilterByAuthor] = useState(props.displayData);
  useEffect(()=>{
    if(isExtfilter){
      setFilterdata();
    }
    
  })
  const filterDate = [
                  {
                    name:'From',
                    placeholder:'mm/dd/yyy'
                  },
                  {
                    name:'To',
                    placeholder:'mm/dd/yyy'
                  },
                ]
  const filter = [
    {
      name:'Author',
      placeholder:'Enter Author Name'
    },
    {
      name:'Division',
      placeholder:'Enter Division'
    },
  ]
  const options = ['Apoorva Kamat','Sajal Suhane', 'Anusri Yarlagadda','Yatharth Singhal','Jin Ryong Kim','Yash Pratapwar'].sort();
  const handleButtonClick = () => {
    setFilterdata();
    setIsExtFilter(true);
  }
  const handleClearClick = () => {
    setInputValue('');
    setFilterByAuthor([]);
    setIsExtFilter(false);
  }
  const setFilterdata =()=>{ 
   let data= props.displayData.filter(o => 
     Object.keys(o.contacts).some(k => (o.contacts[k].name.includes(inputValue)))
     );
     setFilterByAuthor(data);};
     
  console.log('************',props.contactList.filter(o=>o.name.includes(inputValue)))
  return (
    <div className={`d-flex flex-row vh-100`}>
        <div className={`d-flex flex-column border-end border-dark w-25 min-width-15`}>
            <h4 className="bg-subhead py-2 text-white m-0 mh-10">FILTERS</h4>
            <div className="d-flex flex-column m-4">
              <h2 className="text-start m-2">Post From</h2>
              <div className={`d-flex flex-column text-start my-2 justify-content-between`}>
                  <div className="m-2 text-start">Author</div>
                  <Autocomplete
                      id='Author'
                      className="w-100"
                      options={options}
                      renderInput={(params) =>
                        <TextField {...params} label='Type/Select Author' variant="outlined" />}
                        inputValue={inputValue}
                        onInputChange={(e,nValue)=>{
                          setIsExtFilter(false)
                          setInputValue(nValue)
                        }}
                    />
                </div>
              <Button className={`mt-2 ${!!inputValue?'active':'disabled'}`} onClick={handleButtonClick}>Filter</Button>
              <Button className="mt-2" onClick={handleClearClick}>Clear All Filters</Button>
            </div>
        </div>
        <div className={`d-flex flex-column border-end border-dark ${props.fetched?"min-width-50 mw-50":"w-75"}`}>
            <h4 className=" bg-subhead py-2 text-white mh-10">{props.fetched || isExtfilter ?"DISCUSSIONS":"FREQUENTLY ASKED QUESTIONS (FAQ)"}</h4>
            <NewsCard data={isExtfilter?filterByAuthors:props.displayData}/>
        </div>
        {
            <div className={`d-flex flex-column border-end border-dark min-width-30`}>
              <h4 className=" bg-subhead py-2 text-white mh-10 w-100">MEET THE EXPERTS</h4>
              <ContactCard data={isExtfilter?props.contactList.filter(o=>o.name.includes(inputValue)): props.contactList} />
            </div>
          }
    </div>
  );
}