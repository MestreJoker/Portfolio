import "@fortawesome/fontawesome-svg-core/styles.css";
import { faReact, faTailwindCss, faTypescript } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function InformacoesPrincipais() {
    const tecnologias = [
        {
            icone: <FontAwesomeIcon icon={faReact} />,
            nome: "React"
        },
        {
            icone: <FontAwesomeIcon icon={faReact} />,
            nome: "Next"
        },
        {
            icone: <FontAwesomeIcon icon={faTypescript} />,
            nome: "TypeScript"
        },
        {
            icone: <FontAwesomeIcon icon={faTailwindCss} />,
            nome: "Tailwind CSS"
        },
    ]
    return (
        <div className="flex gap-6 items-center">
            {/*Metade à esquerda*/}
            <div className="flex-[1.2] flex flex-col gap-5">
                <div className="px-3 py-1 bg-[#0e1c36] rounded-2xl text-white w-fit">Olá, eu sou</div>

                <div>
                    <p className="text-6xl font-bold">
                        Gabriel <span className="text-(--colorMain)">Gomes</span>
                    </p>
                    <p className="text-5xl font-bold">
                        Desenvolvedor <span className="text-(--colorMain)">Front-end</span>
                    </p>
                </div>

                <p className="text-lg">
                    Crio interfaces modernas, responsivas e funcionais para aplicações web, unindo design e tecnologia para transformar ideias em soluções reais
                </p>

                <div className="flex w-full justify-start gap-3">
                    {tecnologias.map((item, index) => {
                        return(
                            <div key={`card_${item.nome}`} className="px-2 py-1 rounded-xl flex items-center gap-3 w-fit bg-[#0e1c36]">
                                <div>{item.icone}</div>
                                <p>{item.nome}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="flex">
                    <button className="botaoPreenchido">
                        <p className="text-lg">Ver meus projetos</p>
                    </button>
                </div>
            </div>

            {/*Metade à direita*/}
            <div className="flex-1">
                <Image alt="imagemPrinciapl" src={'/images/imagemPrincipal.jpg'} width={450} height={200} />
            </div>
        </div>
    )
}