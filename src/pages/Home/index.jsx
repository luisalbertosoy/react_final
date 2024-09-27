import HeroSpace from "../../components/HeroSpace";
import WrapperItemList from "../../components/WrapperItemList";
import LinkButton from "../../components/LinkButton";

const Home = () => {

    const links = [
        {
            label: 'VIEW ALL',
            href: '/store',
        }
    ]

    return (
        <main className='main-container'>
            <HeroSpace />
            <section className="trend-products">
                <div className="trend-info">
                    <div className="season font-90">S/S</div>
                    <div className="year font-90">24</div>
                    <div className="btn-container">
                        <LinkButton links={links} />
                    </div>
                </div>
                <WrapperItemList limit={4} />
            </section>
        </main>
    );
};

export default Home;