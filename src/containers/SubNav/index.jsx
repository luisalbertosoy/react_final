import { useLocation } from 'react-router-dom';
import SubMenu from "../../components/SubMenu";

const SubNav = () => {
    const location = useLocation();

    const links = [
        {
            label: 'HOME',
            href: '/',
            children: location.pathname === '/' ? <div className="submenu-active"></div> : null
        },
        {
            label: 'STORE',
            href: '/store',
            children: location.pathname === '/store' ? <div className="submenu-active"></div> : null
        },
        {
            label: 'ABOUT',
            href: '#',
            children: location.pathname === '#' ? <div className="submenu-active"></div> : null
        }
    ]

    return (
        <div className="sub-container">
            <SubMenu links={links} />
        </div>
    );
}

export default SubNav;