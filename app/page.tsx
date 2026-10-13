import Header from "./Components/Header";
import InformacoesPrincipais from "./Components/InformacoesPrincipais";
import MeusProjetos from "./Components/MeusProjetos";
import ExperienciasProfissionais from "./Components/ExperienciasProfissionais";
import ComoTrabalho from "./Components/ComoTrabalho";

export default function Home() {
  return (
    <div className="paginaPrincipal">
      <Header />
      <main className="conteudoPrincipal p-8">
        <InformacoesPrincipais />
        <MeusProjetos />
        <ExperienciasProfissionais />
        <ComoTrabalho />
      </main>
    </div>
  );
}
