import { Link } from "react-router-dom";
import logoImage from '../../../assets/img/logo.png';
import './Header.scss'
import '../../../assets/styles/global.scss'

export function Header() {
  return (
    <div className="header-container" >
      <img className="logo" src={logoImage} alt="Logo da ESA" />
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/legacy">Nosso legado</Link>
        <Link className="link" to="/">Resultado social</Link>
        <Link className="link" to="/">Programa</Link>
        <Link className="link" to="/">Equipe</Link>
      </nav>
      <nav>
        <a className="socialMedia" href="tel:+5511960820411" target="_parent" title="Whatsapp" rel="noopener">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/whatsapp.png" alt="Icone do Whatsapp"/>
        </a>
        <a className="socialMedia" href="http://www.instagram.com.br/institutoesa" target="_parent" title="Instagram" rel="noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" alt="Icone do Instagram"/>
        </a>
        <a className="socialMedia" href="mailto:esa.espacosocialdoamparo@gmail.com" target="_parent" title="Email" rel="noopener">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/email.png" alt="Icone do Email"/>
        </a>
      </nav>
    </div>
  );
}