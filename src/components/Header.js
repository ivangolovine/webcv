//assigns the header name for each page using props
//makes this re-usable
function Header(props){
    return (<header> {props.text} </header>
    );
}

export default Header;