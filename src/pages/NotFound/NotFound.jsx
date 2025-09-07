import notFoundImg from "../../assets/404.webp";
import Menu from "../../components/Menu/Menu";
import s from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={s.container}>
      <Menu />
      <img src={notFoundImg} className={s.img} alt="404" />
    </div>
  );
}
