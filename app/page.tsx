import Image from "next/image";
import Header from "./Components/Header";
import InformacoesPrincipais from "./Components/InformacoesPrincipais";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main className="p-8">
        <InformacoesPrincipais />
      </main>
    </div>
  );
}
