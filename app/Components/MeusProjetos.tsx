"use client"

import { faLaravel, faReact, faTailwindCss, faTypescript } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft, faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function MeusProjetos() {
    const faixaProjetosRef = useRef<HTMLDivElement>(null)
    const [temOverflow, setTemOverflow] = useState(false)
    const [podeRolarEsquerda, setPodeRolarEsquerda] = useState(false)
    const [podeRolarDireita, setPodeRolarDireita] = useState(false)

    useEffect(() => {
        const faixaProjetos = faixaProjetosRef.current
        if (!faixaProjetos) return

        const atualizarControles = () => {
            const maximoScroll = faixaProjetos.scrollWidth - faixaProjetos.clientWidth
            setTemOverflow(maximoScroll > 1)
            setPodeRolarEsquerda(faixaProjetos.scrollLeft > 1)
            setPodeRolarDireita(maximoScroll - faixaProjetos.scrollLeft > 1)
        }

        const observador = new ResizeObserver(atualizarControles)
        observador.observe(faixaProjetos)
        faixaProjetos.addEventListener("scroll", atualizarControles, { passive: true })
        atualizarControles()

        return () => {
            observador.disconnect()
            faixaProjetos.removeEventListener("scroll", atualizarControles)
        }
    }, [])

    const rolarProjetos = (direcao: -1 | 1) => {
        const faixaProjetos = faixaProjetosRef.current
        const primeiroCard = faixaProjetos?.firstElementChild
        if (!faixaProjetos || !primeiroCard) return

        const espacamento = Number.parseFloat(getComputedStyle(faixaProjetos).columnGap) || 0
        faixaProjetos.scrollBy({
            left: direcao * (primeiroCard.getBoundingClientRect().width + espacamento),
            behavior: "smooth"
        })
    }

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
            ],
            temSite: true,
            linkSite: "https://projeto-arena-rift.vercel.app/",
            linkGitHub: "https://github.com/MestreJoker/ArenaRift"
        },

        {
            imagem: "/images/printsProjetos/combatec.jpg",
            titulo: "Combatec",
            descricao: "Aplicativo mobile desenvolvido para o meu TCC, cujo intuito é auxiliar no combate a casos de bullying e discriminação escolar. A plataforma permite que alunos realizem denúncias contra professores, funcionários ou outros alunos.",
            plataforma: "Mobile",
            tecnologias: [
                {
                    icone: <FontAwesomeIcon icon={faReact} />,
                    nome: "React"
                },
                {
                    icone: <FontAwesomeIcon icon={faLaravel} />,
                    nome: "Laravel"
                },
                {
                    icone: <FontAwesomeIcon icon={faTailwindCss} />,
                    nome: "MySQL"
                }
            ],
            temSite: false,
            linkSite: "",
            linkGitHub: "https://github.com/MestreJoker/Combatec"
        },

        {
            imagem: "/images/printsProjetos/crmComercial.jpg",
            titulo: "CRM Comercial",
            descricao: "Plataforma web de gestão de relacionamento com o cliente (CRM) desenvolvida com Next.js, TypeScript e Tailwind CSS. Focada em produtividade corporativa, a aplicação oferece um painel Kanban interativo para o funil de vendas, cadastro centralizado de clientes, agenda integrada de atividades.",
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
            ],
            temSite: true,
            linkSite: "https://crm-infinity-gds.vercel.app/",
            linkGitHub: "https://github.com/MestreJoker/Crm"
        },

        {
            imagem: "/images/printsProjetos/dashboard.jpg",
            titulo: "Dashboard",
            descricao: "Painel de controle gerencial desenvolvido com foco em visualização de dados e tomada de decisão estratégica. A interface integra gráficos interativos de desempenho, cartões de indicadores-chave e filtros avançados por período e categoria.",
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
            ],
            temSite: true,
            linkSite: "https://dashboard-infinity.vercel.app/",
            linkGitHub: "https://github.com/MestreJoker/dashboard"
        }
    ]
    return (
        <div id="projetos" className="secaoProjetos pt-6">
            <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faCode} className="iconeTituloSecao"/>
                <h3 className="tituloSecao">Projetos em que trabalhei</h3>
            </div>

            <div className="projetosCarrossel">
                <div ref={faixaProjetosRef} className="projetosFaixa flex flex-nowrap gap-4 overflow-x-hidden overflow-y-hidden py-2 w-full">

                {projetos.map((item, index) => {
                    return (
                        <div
                            key={`card_${index}`}
                            className="projetoCard w-100 shrink-0 min-h-full rounded-xl border-3 border-[#0d1a2d] flex flex-col hover:scale-101 transition-all duration-300 overflow-hidden"
                        >
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
                                    {item.temSite &&
                                        <Link href={item.linkSite}
                                            target="_blank">
                                            <button className="botaoPreenchido">
                                                <p className="px-1">
                                                    Ver Projeto
                                                </p>
                                                <FontAwesomeIcon icon={faArrowRight} className="-rotate-30"/>
                                            </button>
                                        </Link>
                                    }


                                    <Link href={item.linkGitHub} target="_blank">
                                        <button className="botaoSemFundo">
                                            <p className="px-1">
                                                GitHub
                                            </p>
                                            <FontAwesomeIcon icon={faArrowRight} className="-rotate-30"/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                {temOverflow && (
                    <>
                        <button
                            type="button"
                            className="projetosSeta projetosSetaEsquerda"
                            aria-label="Mostrar projetos anteriores"
                            title="Projetos anteriores"
                            disabled={!podeRolarEsquerda}
                            onClick={() => rolarProjetos(-1)}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            type="button"
                            className="projetosSeta projetosSetaDireita"
                            aria-label="Mostrar próximos projetos"
                            title="Próximos projetos"
                            disabled={!podeRolarDireita}
                            onClick={() => rolarProjetos(1)}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}