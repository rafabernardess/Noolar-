import { Link } from "react-router-dom";

function ItensNavBar(props) {
  return (
    <Link to={props.link} hrefLang={props.url}className="linkNavigate navBarItens">
      <p>{props.item}</p>
    </Link>
  );
}

export default ItensNavBar;
