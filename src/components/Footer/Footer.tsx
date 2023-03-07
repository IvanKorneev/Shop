import './Footer.sass';
import {dataFooter} from '../healpers/data-footer'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-logo'>
                <div>Footo</div>
                <span>Sign up for texts to be notified about our best offers on the perfect gifts.</span>
            </div>
            {dataFooter.map(data => {
                return (
                    <div key={data.id} className='footer-container'>
                        <span className='footer-label'>{data.label}</span>
                        {data.value.map(item=>{
                            return(
                                <ul key={item}>
                                    <li className='footer-item'>{item}</li>
                                </ul>
                            )
                        })}
                    </div>
                )
            })}
        </footer>
    )
};
export default Footer;
