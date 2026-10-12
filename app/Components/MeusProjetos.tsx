import { faLaravel, faReact, faTailwindCss, faTypescript } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function MeusProjetos() {
    const projetos = [
        {
            imagem: "/images/printsProjetos/arenaRift.jpg", 
            titulo: "ArenaRift",
            descricao: "Plataforma web de campeonatos de esports desenvolvida com Next.js, TypeScript, Supabase e Tailwind CSS, apresentando listagem dinâmica de torneios e perfil de jogador.",
            plataforma: "Web",
            tecnologias: [
                {
                    icone: <FontAwesomeIcon icon={faReact} />,
                    nome: "React"
                },
                {
                    icone: <Image alt="next" src={"/images/icons/nextJs.png"} width={20} height={20} />,
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
        },

        {
            imagem: "/images/printsProjetos/combatec.jpg",
            titulo: "Combatec",
            descricao: "Aplicativo mobile desenvolvido para o meu TCC, cujo intuito é auxiliar no combate a casos de bullying e discriminação escolar. A plataforma permite que alunos realizem denúncias contra professores, funcionários ou outros alunos.",
            plataforma: "Web",
            tecnologias: [
                {
                    icone: <FontAwesomeIcon icon={faReact} />,
                    nome: "ReactNative"
                },
                {
                    icone: <FontAwesomeIcon icon={faLaravel} />,
                    nome: "Laravel"
                },
                {
                    icone: <FontAwesomeIcon icon={faTailwindCss} />,
                    nome: "MySQL"
                }
            ]
        }
    ]
    return (
        <div id="projetos" className="pt-6">
            <h3 className="text-3xl font-bold">Projetos em que trabalhei</h3>

            <div className="flex gap-4 overflow-x-auto overflow-y-hidden scale-94 origin-left py-2">
                {projetos.map((item, index) => {
                    return (
                        <div key={`card_${index}`} className="w-100  min-h-full rounded-xl border-3 border-[#0d1a2d] flex flex-col hover:scale-101 transition-all duration-300 overflow-hidden">
                            <div className="h-[150px] bg-white relative">
                                <Image alt="imagem"
                                    src={item.imagem}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-3">
                                <p className="px-2 py-1 rounded-xl border border-(--colorMain) w-fit flex items-center text-[0.7rem]">
                                    {item.plataforma}
                                </p>

                                <p className="mt-3 text-lg font-bold">
                                    {item.titulo}
                                </p>
                                <p className="text-sm">
                                    {item.descricao}
                                </p>

                                <div className="flex flex-wrap gap-2 items-center my-3">
                                    {item.tecnologias.map((item, index) => {
                                        return (
                                            <div key={`tecnologia_${item.nome}`} className="px-2 py-1 rounded-xl flex items-center gap-3 w-fit bg-[#0e1c36]">
                                                <div>{item.icone}</div>
                                                <p className="text-[0.7rem]">{item.nome}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="flex flex-1 gap-4 items-end">
                                    <button className="botaoPreenchido">
                                        <p className="px-1">
                                            Ver Projeto
                                        </p>
                                    </button>

                                    <button className="botaoSemFundo">
                                        <p className="px-1">
                                            GitHub
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}