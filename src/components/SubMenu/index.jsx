import LinkButton from "../LinkButton";

const SubMenu = ({links, className, children}) => {
    return (
        <menu className={className}>
            {links.map((link, index) => (
                <LinkButton key={index} className={className} href={link.href} label={link.label}>
                    {link.children}
                </LinkButton>
            ))}
        </menu>
    );
};

export default SubMenu;