import { Link } from "react-router-dom";

const LinkButtonSmall = ({ className, label, href = '#', ...props}) => {
    return (
        <Link {...props} className={`link-button ${className}__link`} to={href}>{label}</Link>
    );
};

export default LinkButtonSmall;