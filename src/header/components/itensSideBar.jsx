import { Link } from "react-router-dom";

function ItensSideBar(props) {
  return (
    <Link to={props.link} className="linkNavigate sideBarItens">
      <p>{props.item}</p>
    </Link>
  );
}

export default ItensSideBar;
