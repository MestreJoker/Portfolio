import "@fortawesome/fontawesome-svg-core/styles.css";
import { faReact, faTailwindCss, faTypescript } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faBriefcase, faGraduationCap, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function InformacoesPrincipais() {
    const tecnologias = [
        {
            icone: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
            nome: "React"
        },
        {
            icone: <Image alt="next" src={"/images/icons/nextJs.png"} width={20} height={20}/>,
            nome: "Next"
        },
        {
            icone: <FontAwesomeIcon icon={faTypescript} color="#3178c6" />,
            nome: "TypeScript"
        },
        {
            icone: <FontAwesomeIcon icon={faTailwindCss} color="#38bdf8" />,
            nome: "Tailwind CSS"
        },
    ]

    const informacoes = [
        {
            icone: <FontAwesomeIcon icon={faLocation}/> ,
            texo: "São Paulo - SP"
        },
        {
            icone: <FontAwesomeIcon icon={faGraduationCap} /> ,
            texo: "ADS - Cruzeiro do Sul"
        },
        {
            icone: <FontAwesomeIcon icon={faBriefcase} />,
            texo: "Front-end Developer"
        }
    ]
    return (
        <div className="flex gap-6 items-center border-b border-gray-700 pb-6">
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
                        return (
                            <div key={`card_${item.nome}`} className="px-2 py-1 rounded-xl flex items-center gap-3 w-fit bg-[#0e1c36]">
                                <div>{item.icone}</div>
                                <p>{item.nome}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="flex gap-4">
                    <button className="botaoPreenchido flex items-center">
                        <p className="text-md px-2 py-1">Ver meus projetos</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                    <button className="botaoSemFundo flex items-center gap-2">
                        Quero um Projeto
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="flex gap-5">
                    {informacoes.map((item, index) => {
                        return(
                            <div key={`informacao_${index}`} className="flex items-center gap-2 text-gray-400 text-sm">
                                {item.icone}
                                {item.texo}
                            </div>
                        )
                    })}

                </div>
            </div>

            {/*Metade à direita*/}
            <div className="w-fit border-b-3 border-[#4a4af04b] rounded-lg">
                <Image alt="imagemPrinciapl" src={'/images/imagemPrincipal.png'} width={550} height={200} />
            </div>
        </div>
    )
}