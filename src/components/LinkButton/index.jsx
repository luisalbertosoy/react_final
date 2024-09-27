import { Link } from 'react-router-dom';

const LinkButton = ({ links = [], className, label, href = '#', img, children, ...props }) => {
    if (links.length > 0) {
        return (
            <>
                {links.map((link, index) => (
                    <Link key={index} {...props} className={`link-button-n ${className}`} to={link.href}>
                        {link.label}
                    </Link>
                ))}
            </>
        );
    }

    return (
        <Link {...props} className={`link-button-n ${className}`} to={href}>
            {children && children}
            {label}
        </Link>
    );

};

export default LinkButton;
