import { useNavigate } from "./hooks";

export default function Link(props) {

  const {to,children} = props;
  const navigate = useNavigate();
  const handlerClick = function(e) {
    e.preventDefault();
    navigate(to);
  }
  return (
    <a onClick={handlerClick}>{children}</a>
  )
}