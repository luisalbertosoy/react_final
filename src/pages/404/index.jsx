import { Link } from "react-router-dom";
import MainButton from "../../components/MainButton";

const Error404 = () => {
    return (
        <section className="container-notfound">
            <div className="notfound_title">400</div>
            <div className="notfound-link-container">
                <p>Error, the page you are looking for is not found.</p>
                <Link to="/" className="notfound-link">
                    <MainButton label={"BACK TO HOME"} />
                </Link>
            </div>
        </section>
    );
};

export default Error404;