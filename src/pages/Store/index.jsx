import WrapperItemList from "../../components/WrapperItemList";

const Store = () => {
    return (
        <section class="product-listing">
            <div class="pl-info">
                <div class="pl-title font-20">
                    <h1>READY TO WEAR</h1>
                </div>
                <div class="pl-filters">
                    <p>FILTERS</p>
                    <a href="">TOPS</a>
                    <a href="">BOTTOMS</a>
                    <a href="">ACCESORIES</a>
                    <a href="">ACTIVE</a>
                </div>
            </div>
            <WrapperItemList />
        </section>
    );
};

export default Store;