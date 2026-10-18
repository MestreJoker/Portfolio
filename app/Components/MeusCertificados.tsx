'use client'

import { faArrowLeft, faArrowRight, faAward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ModalCertificado from "./ModalCertificado"

export default function MeusCertificados() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [imagemModal, setImagemModal] = useState<string>("")
    const faixaCertificadosRef = useRef<HTMLDivElement>(null)
    const [temOverflow, setTemOverflow] = useState(false)
    const [podeRolarEsquerda, setPodeRolarEsquerda] = useState(false)
    const [podeRolarDireita, setPodeRolarDireita] = useState(false)

    useEffect(() => {
        const faixaCertificados = faixaCertificadosRef.current
        if (!faixaCertificados) return

        const atualizarControles = () => {
            const maximoScroll = faixaCertificados.scrollWidth - faixaCertificados.clientWidth
            setTemOverflow(maximoScroll > 1)
            setPodeRolarEsquerda(faixaCertificados.scrollLeft > 1)
            setPodeRolarDireita(maximoScroll - faixaCertificados.scrollLeft > 1)
        }

        const observador = new ResizeObserver(atualizarControles)
        observador.observe(faixaCertificados)
        faixaCertificados.addEventListener("scroll", atualizarControles, { passive: true })
        atualizarControles()

        return () => {
            observador.disconnect()
            faixaCertificados.removeEventListener("scroll", atualizarControles)
        }
    }, [])

    useEffect(() => {
        if (!showModal) return

        const overflowBody = document.body.style.overflow
        const overflowDocumento = document.documentElement.style.overflow
        document.body.style.overflow = "hidden"
        document.documentElement.style.overflow = "hidden"

        const fecharComEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setShowModal(false)
        }

        window.addEventListener("keydown", fecharComEscape)

        return () => {
            document.body.style.overflow = overflowBody
            document.documentElement.style.overflow = overflowDocumento
            window.removeEventListener("keydown", fecharComEscape)
        }
    }, [showModal])

    function exibirModal(imagem: string){
        setShowModal(true)
        setImagemModal(imagem)
    }

    function rolarCertificados(direcao: -1 | 1) {
        const faixaCertificados = faixaCertificadosRef.current
        const primeiroCard = faixaCertificados?.firstElementChild
        if (!faixaCertificados || !primeiroCard) return

        const espacamento = Number.parseFloat(getComputedStyle(faixaCertificados).columnGap) || 0
        faixaCertificados.scrollBy({
            left: direcao * (primeiroCard.getBoundingClientRect().width + espacamento),
            behavior: "smooth"
        })
    }

    const certificados = [
        {
            imagem: "/images/certificados/certificadoEtec.jpeg",
            curso: "Desenvolvimento de Sistemas MTEC",
            instituicao: "ETEC de Guaianazes",
            conclusao: 2024,
            descricao: "Curso técnico integrado ao ensino médio. Nesse curso, desenvolvi as minhas principais habilidades de programação, desde os fundamentos da lógica, até assuntos mais complexos relacionados a diversas linguagens."
        },
        {
            imagem: "/images/certificados/certificadoSenai.jpg",
            curso: "Desenvolvimento de Apps Android",
            instituicao: "SEBRAE/SENAI",
            conclusao: 2022,
            descricao: "Curso técnico presencial onde aprendi a desenvolver aplicativos para dispositivos android através do Android Studio, além de aprimorar a minha lógica de programação."
        },
        {
            imagem: "/images/certificados/certificadoMacroByte2.jpg",
            curso: "Informática Avançada",
            instituicao: "MacroByte",
            conclusao: 2023,
            descricao: "Curso técnico presencial onde aprendi ferramentas de informática com uma complexidade maior do que as do curso básico, através dos módulos: Photoshop, Flash, Corel Draw e Programação ."
        },
        {
            imagem: "/images/certificados/certificadoMacroByte1.jpg",
            curso: "Informática",
            instituicao: "MacroByte",
            conclusao: 2022,
            descricao: "Curso técnico presencial onde aprendi os principais fundamentos da informática, através dos módulos: Windows, Word, PowerPoint, Excel, Acess, Internet e Hardware."
        },
        {
            imagem: "/images/certificados/certificadoIngles.jpg",
            curso: "Inglês Técnico",
            instituicao: "MacroByte",
            conclusao: 2022,
            descricao: "Formação que proporcionou a base para o desenvolvimento da leitura e escrita em inglês. Utilizo essa capacitação no dia a dia para interpretação de documentações técnicas, leitura de artigos de programação, escrita de código e navegação em fóruns de desenvolvedores."
        }
    ]
    return (
        <div id="certificados" className="mt-8 relative">
            <div className="flex gap-2 items-center mb-4">
                <FontAwesomeIcon icon={faAward} className="iconeTituloSecao" />
                <h3 className="tituloSecao">Meus Certificados</h3>
            </div>
            <div className="projetosCarrossel">
                <div ref={faixaCertificadosRef} className="projetosFaixa flex flex-nowrap gap-6 overflow-hidden py-2 w-full">
                {certificados.map((item, index) => {
                    return (
                        <div
                            key={`card_${index}`}
                            className="projetoCard w-100 shrink-0 min-h-full rounded-xl border-3 border-[#0d1a2d] flex flex-col hover:scale-101 transition-all duration-300 overflow-hidden cursor-pointer"
                        
                        onClick={() => exibirModal(item.imagem)}>
                            <div className="h-[150px] bg-white relative">
                                <Image alt="imagem"
                                    src={item.imagem}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{item.curso}</h3>
                                <div className="flex justify-between">
                                    <p>{item.instituicao}</p>
                                <p className="text-sm w-fit px-2 rounded-full border border-(--colorMain) flex">{item.conclusao}</p>
                                </div>
                                <p className="mt-3">{item.descricao}</p>
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
                            aria-label="Mostrar certificados anteriores"
                            title="Certificados anteriores"
                            disabled={!podeRolarEsquerda}
                            onClick={() => rolarCertificados(-1)}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            type="button"
                            className="projetosSeta projetosSetaDireita"
                            aria-label="Mostrar próximos certificados"
                            title="Próximos certificados"
                            disabled={!podeRolarDireita}
                            onClick={() => rolarCertificados(1)}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </>
                )}
            </div>

            <ModalCertificado imagem={imagemModal} modalVisible={showModal} informarClique={() => setShowModal(false)}/>
        </div>
    )
}