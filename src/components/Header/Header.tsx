import './Header.sass';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-logo'>
            </div>
            <div className='header-navigation'>
                <ul>
                    <li>All PRODUCTS</li>
                    <li>SOLUTIONS</li>
                    <li>ABOUT</li>
                    <li>SUPPORT</li>
                    <li>Map</li>
                </ul>
            </div>
            <div className='header-container'>
                <div className='header-add-cart'>
                    <ShoppingCartIcon/>
                </div>
                <div className='header-search'><SearchIcon/></div>
            </div>
        </header>
    )
}
export default Header;