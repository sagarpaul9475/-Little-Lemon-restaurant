import Logo from '../assets/Logo.svg'


function Header(){
    return (
        <div>
            <header>
                <img src={Logo} alt="" />
            </header>
        </div>
    )
}

export default Header;