import React, {useState} from "react";
import { SearchBar } from "../components/search";
import { Faq } from "../components/projectHelpFaq";
import { faq } from "../assets/faq";

export function ProjectHelp() {

    const [isFetched, setIsFetched] = useState(false);
    const [masterData, setMasterData] = useState(faq);
    const [filterData, setFilterData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const onSearch = (e) => {
        let value = e.target.value
        setIsFetched(false);
        if(!(value === null || value === '')){
            setIsFetched(!(value === null || value === ''));
            const pattern = /^[A-Za-z0-9]+$/;
            if (pattern.test(value)) {
            setSearchValue(value);
            filterList(value);
            }
        }
        console.log('value',value)
        console.log('is Searched ', isFetched);
    }
    const filterList = (value)=>{
        let filteredValues= masterData.filter(o =>
            Object.keys(o).some(k => `${o[k]}`.toLowerCase().includes(value.toLowerCase())));
        setFilterData(filteredValues)
      }
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 mb-4">
                <SearchBar onSearch={onSearch}/>
            </div>
            {(isFetched && filterData.length<=0)?<div>No Matches found</div>:<></>}
            <div className="mt-4">
                <Faq fetched={isFetched && filterData.length>0} displayData={(isFetched && filterData.length>0)?filterData:masterData}/>
            </div>
        </div>
    )
}