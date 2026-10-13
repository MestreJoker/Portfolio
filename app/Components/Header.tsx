'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [paginaAtual, setPaginaAtual] = useState<number>(0)

    const links = [
        { texto: "Início", slug: "inicio" },
        { texto: "Projetos", slug: "projetos" },
        { texto: "Soluções para Negócios", slug: "solucoes-para-negocios" },
        { texto: "Experiência", slug: "experiencia" },
        { texto: "Sobre", slug: "sobre" },
        { texto: "Contato", slug: "contato" },
    ];

    return(
        <header className="cabecalho bg-[#020913] px-10 py-3 w-full border-b border-gray-700 flex items-center justify-between fixed z-1">
            <p className="marcaCabecalho text-(--colorMain) text-2xl font-bold">
                {`</>`} <span className="text-white">Gabriel</span> Gomes
            </p>

            <div className="linksCabecalho flex gap-6">
                {links.map((item, index) => {
                    return(
                        <Link key={`link_${item.slug}`} href={`#${item.slug}`}
                        className={`font-bold text-sm border-b-2
                        ${paginaAtual == index ? ("border-(--colorMain)") : ("border-transparent")}`}
                        onClick={() => setPaginaAtual(index)}>
                            {item.texto}
                        </Link>
                    )
                })}
            </div>

            <button className="cabecalhoAcao botaoPreenchido">
                Vamos conversar
            </button>
        </header>
    )
}