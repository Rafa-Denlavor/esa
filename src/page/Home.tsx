import membersImage from '../assets/img/IMG_8765.jpg';
import { Header } from '../components/Header/Header';
import '../assets/styles/Home.scss';

export function Home() {
  return (
    <>
      <Header />
      <div className="container-home">
        <img className="membersImage" src={membersImage} alt="Integrantes do ESA" />
        <article className="container-text">
          <h1 className="title">ESA</h1>
          <p className="subtitle">Espaço Social do Amparo</p>
        </article>
      </div>
    </>
  );
}