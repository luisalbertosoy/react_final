import { Link } from "react-router-dom";

const Card = ({img, title, classname, price, color, category, id, tag}) => {

    return (
        <div className="item">
            <div className="item__picture">
                <Link to={`/detail/${id}`}>
                    <img className="item__picture--img item__picture--img--1" src={img.front} alt={`${title} - Front`} />
                    <img className="item__picture--img item__picture--img--2" src={img.back} alt={`${title} - Back`} />
                </Link>
            </div>
            <div className="item__name">{title}</div>
            <div className="item__info">
                <div className="item__price">${price} US</div>
                <div className={`item__color ${color}`}></div>
            </div>
        </div>
    );
}

export default Card;