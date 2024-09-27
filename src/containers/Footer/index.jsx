import Menu from "../../components/Menu";
import aphnIcon from '../../assets/img/brand/aphn_icon.svg';

const Footer = () => {
    
    const links = [
        {
            label: 'ABOUT',
            href: '#'
        },
        {
            label: 'CONTACT',
            href: '#'
        },
        {
            label: 'INSTAGRAM',
            href: '#'
        }
    ]

    const links2 = [
        {
            label: 'READY TO WEAR',
            href: '#'
        },
        {
            label: 'SALE',
            href: '#'
        },
        {
            label: 'SS2024',
            href: '#'
        }
    ]

    const links3 = [
        {
            label: 'RESEARCH',
            href: '#'
        },
        {
            label: 'JOURNAL',
            href: '#'
        }
    ]
    
    return (
        <footer className="footer-index">
            <div className="ten font-14">10</div>
            <div className="quote font-14 clr-lightgray">IT’S NOT ABOUT BEING FIRST<br />IT’S ABOUT BEING CONSISTENT</div>
            <img src={aphnIcon} alt="APHN icon" />
            <div className="menu-1">
                <Menu className="menu-f" links={links} />
            </div>
            <div className="menu-2">
                <Menu className="menu-f" links={links2} />
            </div>
            <div className="menu-3">
                <Menu className="menu-f" links={links3} />
            </div>
            <div className="newsletter-f">
                <p>NEWSLETTER</p>
                <div>
                    <input type="text" name="" id="" placeholder="ENTER YOUR EMAIL" className="input-newsletter" />
                    <input type="submit" name="" value="JOIN" className="input-button" />
                </div>
            </div>
            <div className="copyright font-14">© 2024 APEHAND ( A P H N ) ®</div>
            <div className="privacy"><a href="">PRIVACY POLICY/</a><a href="">SITE CREDITS</a></div>
        </footer>
    );
}

export default Footer;