'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    { texto: "Início", slug: "inicio" },
    { texto: "Projetos", slug: "projetos" },
    { texto: "Experiência", slug: "experiencia" },
    { texto: "Certificados", slug: "certificados" },
    { texto: "Como eu trabalho", slug: "comoTrabalho" },
];

export default function Header() {
    const [paginaAtual, setPaginaAtual] = useState<number>(0)

    useEffect(() => {
        const atualizarPaginaAtual = () => {
            const alturaCabecalho = document.querySelector(".cabecalho")?.getBoundingClientRect().height ?? 0
            const limiteAtivo = alturaCabecalho + 24
            let indiceAtivo = 0

            links.forEach((item, index) => {
                const secao = document.getElementById(item.slug)
                if (secao && secao.getBoundingClientRect().top <= limiteAtivo) {
                    indiceAtivo = index
                }
            })

            const chegouAoFim = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
            setPaginaAtual(chegouAoFim ? links.length - 1 : indiceAtivo)
        }

        window.addEventListener("scroll", atualizarPaginaAtual, { passive: true })
        window.addEventListener("resize", atualizarPaginaAtual)
        atualizarPaginaAtual()

        return () => {
            window.removeEventListener("scroll", atualizarPaginaAtual)
            window.removeEventListener("resize", atualizarPaginaAtual)
        }
    }, [])

    return (
        <header className="cabecalho bg-[#020913] px-10 py-3 w-full border-b border-gray-700 flex items-center justify-between fixed z-1">
            <p className="marcaCabecalho text-(--colorMain) text-2xl font-bold">
                {`</>`} <span className="text-white">Gabriel</span> Gomes
            </p>

            <div className="linksCabecalho flex gap-6">
                {links.map((item, index) => {
                    return (
                        <Link key={`link_${item.slug}`} href={`#${item.slug}`}
                            className={`font-bold text-sm border-b-2
                        ${paginaAtual == index ? ("border-(--colorMain)") : ("border-transparent")}`}
                            aria-current={paginaAtual === index ? "location" : undefined}
                            onClick={() => setPaginaAtual(index)}>
                            {item.texto}
                        </Link>
                    )
                })}
            </div>

            <a
                href="https://wa.me/5511953822219"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="cabecalhoAcao botaoPreenchido">
                    Vamos conversar
                </button>
            </a>

        </header>
    )
}