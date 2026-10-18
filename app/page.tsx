import Header from "./Components/Header";
import InformacoesPrincipais from "./Components/InformacoesPrincipais";
import MeusProjetos from "./Components/MeusProjetos";
import ExperienciasProfissionais from "./Components/ExperienciasProfissionais";
import ComoTrabalho from "./Components/ComoTrabalho";
import MeusCertificados from "./Components/MeusCertificados";
import Footer from "./Components/Footer";
import MinhasConquistas from "./Components/MinhasConquistas";

export default function Home() {
  return (
    <div className="paginaPrincipal">
      <Header />
      <main className="conteudoPrincipal p-8">
        <InformacoesPrincipais />
        <MeusProjetos />
        <ExperienciasProfissionais />
        <MeusCertificados />
        <MinhasConquistas />
        <ComoTrabalho />
      </main>
      <Footer />
    </div>
  );
}
