import "./Legacy.scss";
import { CardGoals } from './CardGoals/index';

export function Legacy() {
  return (
    <div className="containerMainLegacy">
      <div className="containerContentLegacy">
        <h2 className="legacyTitle">Legado</h2>
        <p className="legacyDescription">A partir de uma linguagem cênica, inovadora, simples e objetiva, o ESA atua de forma multidisciplicar na  prevenção, educação, apoio e encaminhamento, aos possíveis transtornos psicossociais identificados.</p>
        <div className="containerCardGoals">
          <CardGoals 
            title="Objetivos"
            url="https://img.icons8.com/ios/50/000000/goal.png"
            text="Promover ações preventivas no âmbito psicológico e social dos jovens atendidos, a partir da percepção aprofundadasensível dos conflitos internos;"
            alt="Icone de alvo"
          />
          <CardGoals 
            title="Ações"
            url="https://img.icons8.com/ios/50/000000/goal.png"
            text="Estimular ações educativas de conscientização e aprimoramento no desenvolvimento humano;"
            alt="Icone de alvo"
          />
         <CardGoals 
            title="Acolhimento"
            url="https://img.icons8.com/ios/50/000000/goal.png"
            text="Apoiar, acolher e incentivar a integração social de forma significativa e saudável;"
            alt="Icone de alvo"
          />
         <CardGoals 
            title="Acolhimento"
            url="https://img.icons8.com/ios/50/000000/goal.png"
            text="Apoiar, acolher e incentivar a integração social de forma significativa e saudável;"
            alt="Icone de alvo"
          />
        </div>
        <a className="legacyPdf" href="../assets/img/programa-psicossocial.pdf" download>Saiba mais sobre o projeto.</a>
      </div>
    </div>
  );
}