import React from "react";
import './NavbarSearch.css'
import {BiSearch} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../../store/slices/searchSlice/searchSlice";

function NavbarSearch() {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()
    return(
        <div className="navbarSearch">
            <span><BiSearch color="#8e8e93" size='25px' /></span><input type='text' value={search} onChange={(e) => dispatch(setSearch(e.target.value))} placeholder='Search' />
        </div>
    )
}

export default NavbarSearch