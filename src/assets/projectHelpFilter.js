import React, {useState} from "react";
import { Faq } from "../components/projectHelpFaq";
import { faq } from "../assets/faq";


export function ProjectHelpFilter() {

    const [isFiltered, setIsFiltered] = useState(false);
    const [sideFilterData, setSideFilterData] = useState([]);
    const [filteredValue, setFilteredValue] = useState('');
    const [masterData, setMasterData] = useState(faq);

    const onFilter = (e) => {
        let value = e.target.value
        setIsFiltered(false);
        if(!(value === null || value === '')){
            setIsFiltered(!(value === null || value === ''));
            const pattern = /^[A-Za-z0-9]+$/;
            if (pattern.test(value)) {
                setFilteredValue(value);
                sideFiltered(value);
            }
        }
        console.log('value',value)
        console.log('is Searched ', isFetched);
    }
    const getContactList = () => {
        let id = [];
        let cList = [];
        console.log(filterData);
        filterData.forEach(data=>{
            data.contacts.forEach(contact=>{
                if(id.indexOf(contact.id)<=-1){
                    id.push(contact.id);
                    cList.push(contact);
                }
            })
        });
        console.log("======contatcList======",contactList);
        return cList;
       
    }
    const sideFiltered = (value)=>{
        let sideFilteredValues= masterData.filter(o => 
            Object.keys(o).some(k => `${o[k]}`.toLowerCase().includes(value.toLowerCase()))
            );
        setSideFilterData(sideFilteredValues)
        }

    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            {(isFiltered && sideFilterData.length<=0)?<div>No Matches found</div>:<></>}
            <div className="mt-4">
                <Faq fetched={isFiltered && sideFilterData.length>0} displayData={(isFiltered && sideFilterData.length>0)?sideFilterData:masterData} contactList={getContactList()}/>
            </div>
        </div>
    )
    
}