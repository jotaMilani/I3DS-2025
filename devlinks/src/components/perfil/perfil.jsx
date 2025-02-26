import styles from "./pefil.module.css";
const Perfil = ({children, fotoPerfil}) => {
  return (
    <div id={styles.perfil}>
      <img src={fotoPerfil} alt="" />
      <p>{children}</p>
    </div>
  );
};

export default Perfil;
