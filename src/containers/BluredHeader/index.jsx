import LinkButton from "../../components/LinkButton";

const BluredHeader = () => {

    const links = [
        {
            label: '( A P H N ) ®',
            href: '/'
        }
    ]

    return (
        <div className="menu-bg">
            <nav className="nav-container-bg">
                <LinkButton className="n1" links={links} />
            </nav>
        </div>
    );
};

export default BluredHeader;