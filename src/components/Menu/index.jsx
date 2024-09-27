import LinkButtonSmall from "../LinkButtonSmall";

const Menu = ({links, className}) => {
    return (
        <menu className={className}>
            {links.map(link => <LinkButtonSmall className={`menu ${className}__menu`} href={link.href} label={link.label} />)}
        </menu>
    );
};

export default Menu;