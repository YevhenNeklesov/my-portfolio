import { Link } from "react-router-dom";
import s from "./MainBtn.module.css";

const MainBtn = ({ link, children }) => {
  return (
    <>
      <Link className={s.link} to={link}>
        {children}
      </Link>
    </>
  );
};

export default MainBtn;
