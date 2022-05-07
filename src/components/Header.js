//assigns the header name for each page using props
//makes this re-usable
import {useState, useEffect} from 'react';

function Header(props){
 return (<header id='header-prop'> {props.text} </header>
 );
}

export default Header;