import LinkButton from "../LinkButton";

const MainMenu = ({links, className, children}) => {
    return (
        <menu className={className}>
            {links.map((link, index) => (
                <li>
                    <LinkButton key={link.href || index} className={className} href={link.href} label={link.label}>
                        {link.children}
                    </LinkButton>
                </li>
            ))}
        </menu>
    );
};

export default MainMenu;