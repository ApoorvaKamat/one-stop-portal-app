import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import '../style/search.css';

export const SearchBar = ({onSearch}) => {
    return(
    <div className={`input-group searchBar`} onChange={e => onSearch(e)}>
        <Button className='bg-subhead'><Icon.Search></Icon.Search></Button>
        <input type="text" className="p-2 form-control" placeholder="Search..."/>
     </div>
    );
}
