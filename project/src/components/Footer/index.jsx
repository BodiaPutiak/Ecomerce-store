import './index.scss';

function Footer() {
    return (
        <footer>
            <div className="news-letter-container">
                <h1>Newsletter</h1>
                <form action="">
                    <input type="email" placeholder='your@emali.com'/>
                    <button type='submit'>SUBSCRIBE</button>
                </form>
                
            </div>
            <div className="footer-nav">
                <ul>
                    <li>About</li>
                    <li>Store locator</li>
                    <li>FAQs</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;