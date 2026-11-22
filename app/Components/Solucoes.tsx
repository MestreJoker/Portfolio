"use client"

import { faLaravel, faReact, faTailwindCss, faTypescript } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft, faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Solucoes() {
    const faixaSolucoesRef = useRef<HTMLDivElement>(null)
    const [temOverflow, setTemOverflow] = useState(false)
    const [podeRolarEsquerda, setPodeRolarEsquerda] = useState(false)
    const [podeRolarDireita, setPodeRolarDireita] = useState(false)

    useEffect(() => {
        const faixaSolucoes = faixaSolucoesRef.current
        if (!faixaSolucoes) return

        const atualizarControles = () => {
            const maximoScroll = faixaSolucoes.scrollWidth - faixaSolucoes.clientWidth
            setTemOverflow(maximoScroll > 1)
            setPodeRolarEsquerda(faixaSolucoes.scrollLeft > 1)
            setPodeRolarDireita(maximoScroll - faixaSolucoes.scrollLeft > 1)
        }

        const observador = new ResizeObserver(atualizarControles)
        observador.observe(faixaSolucoes)
        faixaSolucoes.addEventListener("scroll", atualizarControles, { passive: true })
        atualizarControles()

        return () => {
            observador.disconnect()
            faixaSolucoes.removeEventListener("scroll", atualizarControles)
        }
    }, [])

    const rolarSolucoes = (direcao: -1 | 1) => {
        const faixaSolucoes = faixaSolucoesRef.current
        const primeiroCard = faixaSolucoes?.firstElementChild
        if (!faixaSolucoes || !primeiroCard) return

        const espacamento = Number.parseFloat(getComputedStyle(faixaSolucoes).columnGap) || 0
        faixaSolucoes.scrollBy({
            left: direcao * (primeiroCard.getBoundingClientRect().width + espacamento),
            behavior: "smooth"
        })
    }

    const solucoes = [
        {
            imagem: "/images/printsSolucoes/pizzaria.jpg",
            titulo: "Pizzarias",
            descricao: "Cardápio digital, relatórios e controle de pedidos e clientes",
            linkSite: "https://bella-massa-aps.vercel.app/",
        },
    ]

    return (
        <div id="solucoes" className="secaoSolucoes pt-6">
            <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faCode} className="iconeTituloSecao" />
                <h3 className="tituloSecao">Soluções para Negócios</h3>
            </div>

            <div className="solucoesCarrossel">
                <div ref={faixaSolucoesRef} className="solucoesFaixa flex flex-nowrap gap-4 overflow-x-hidden overflow-y-hidden py-2 w-full">
                    {solucoes.map((item, index) => {
                        return (
                            <div
                                key={`card_${index}`}
                                className="solucaoCard w-60 shrink-0 rounded-xl border-2 border-[#0d1a2d] flex flex-col hover:scale-101 transition-all duration-300 overflow-hidden"
                            >
                                <div className="h-[110px] bg-white relative">
                                    <Image
                                        alt={item.titulo}
                                        src={item.imagem}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 p-2.5">
                                    <p className="text-sm font-bold leading-snug">
                                        {item.titulo}
                                    </p>
                                    <p className="mt-1 text-sm leading-relaxed line-clamp-4">
                                        {item.descricao}
                                    </p>

                                    <Link href={item.linkSite} target="_blank">
                                    <div className="flex items-center gap-1 mt-2 text-[#9292fa] hover:text-[#6666f5]">
                                        <p>Ver demonstração</p>
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </div>
                                </Link>
                                </div>

                                
                            </div>
                        )
                    })}
                </div>

                {temOverflow && (
                    <>
                        <button
                            type="button"
                            className="solucoesSeta solucoesSetaEsquerda"
                            aria-label="Mostrar soluções anteriores"
                            title="Soluções anteriores"
                            disabled={!podeRolarEsquerda}
                            onClick={() => rolarSolucoes(-1)}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            type="button"
                            className="solucoesSeta solucoesSetaDireita"
                            aria-label="Mostrar próximas soluções"
                            title="Próximas soluções"
                            disabled={!podeRolarDireita}
                            onClick={() => rolarSolucoes(1)}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}