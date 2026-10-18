'use client'

import { faArrowLeft, faArrowRight, faAward, faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ModalConfirmacao from "../ModalConfirmacao"
import ModalCertificado from "./ModalCertificado"

export default function MinhasConquistas() {
    const [showModalCertificado, setShowModalCertificado] = useState<boolean>(false)
    const [showModalConfirmacao, setShowModalConfirmacao] = useState<boolean>(false)
    const [imagemModal, setImagemModal] = useState<string>("")
    const [pdfSelecionado, setPdfSelecionado] = useState<string>("")
    const faixaConquistasRef = useRef<HTMLDivElement>(null)
    const [temOverflow, setTemOverflow] = useState(false)
    const [podeRolarEsquerda, setPodeRolarEsquerda] = useState(false)
    const [podeRolarDireita, setPodeRolarDireita] = useState(false)

    useEffect(() => {
        const faixaConquistas = faixaConquistasRef.current
        if (!faixaConquistas) return

        const atualizarControles = () => {
            const maximoScroll = faixaConquistas.scrollWidth - faixaConquistas.clientWidth
            setTemOverflow(maximoScroll > 1)
            setPodeRolarEsquerda(faixaConquistas.scrollLeft > 1)
            setPodeRolarDireita(maximoScroll - faixaConquistas.scrollLeft > 1)
        }

        const observador = new ResizeObserver(atualizarControles)
        observador.observe(faixaConquistas)
        faixaConquistas.addEventListener("scroll", atualizarControles, { passive: true })
        atualizarControles()

        return () => {
            observador.disconnect()
            faixaConquistas.removeEventListener("scroll", atualizarControles)
        }
    }, [])

    useEffect(() => {
        const algumModalAberto = showModalCertificado || showModalConfirmacao
        if (!algumModalAberto) return

        const overflowBody = document.body.style.overflow
        const overflowDocumento = document.documentElement.style.overflow
        document.body.style.overflow = "hidden"
        document.documentElement.style.overflow = "hidden"

        const fecharComEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowModalCertificado(false)
                setShowModalConfirmacao(false)
            }
        }

        window.addEventListener("keydown", fecharComEscape)

        return () => {
            document.body.style.overflow = overflowBody
            document.documentElement.style.overflow = overflowDocumento
            window.removeEventListener("keydown", fecharComEscape)
        }
    }, [showModalCertificado, showModalConfirmacao])

    function exibirModal(imagem: string) {
        setShowModalCertificado(true)
        setImagemModal(imagem)
    }

    function solicitarDownloadPdf(caminhoPdf: string) {
        setPdfSelecionado(caminhoPdf)
        setShowModalConfirmacao(true)
    }

    function baixarPdf(caminhoPdf: string) {
        const link = document.createElement('a')
        link.href = caminhoPdf
        link.download = caminhoPdf.split('/').pop() || 'documento.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    function rolarConquistas(direcao: -1 | 1) {
        const faixaConquistas = faixaConquistasRef.current
        const primeiroCard = faixaConquistas?.firstElementChild
        if (!faixaConquistas || !primeiroCard) return

        const espacamento = Number.parseFloat(getComputedStyle(faixaConquistas).columnGap) || 0
        faixaConquistas.scrollBy({
            left: direcao * (primeiroCard.getBoundingClientRect().width + espacamento),
            behavior: "smooth"
        })
    }

    const conquistas = [
        {
            imagem: "/images/conquistas/fatec.jpg",
            titulo: "Vestibular Fatec 2025",
            descricao: "31° lugar (de mais de 1.100 candidatos aptos) no primeiro semestre de 2025 na Fatec de São Paulo para o curso de ADS (o mais concorrido), embora tenha optado pela Cruzeiro do Sul.",
            isPdf: true,
            pdfUrl: "/Resultado Fatec 2025 - 1° Semestre.pdf"
        },
        {
            imagem: "/images/conquistas/obmep2023.jpg",
            titulo: "OBMEP 2023",
            descricao: "Menção honrosa pelo meu desempenho na segunda fase da 18° Olimpíada Brasileira de Matemática",
            isPdf: false
        },
        {
            imagem: "/images/conquistas/obmep2021.jpg",
            titulo: "OBMEP 2021",
            descricao: "Menção honrosa pelo meu desempenho na segunda fase da 16° Olimpíada Brasileira de Matemática",
            isPdf: false
        },
        {
            imagem: "/images/conquistas/obmep2019.jpg",
            titulo: "OBMEP 2019",
            descricao: "Menção honrosa pelo meu desempenho na segunda fase da 15° Olimpíada Brasileira de Matemática",
            isPdf: false
        }
    ]

    return (
        <div id="conquistas" className="mt-8 relative">
            <div className="flex gap-2 items-center mb-4">
                <FontAwesomeIcon icon={faTrophy} className="iconeTituloSecao" />
                <h3 className="tituloSecao">Minhas Conquistas</h3>
            </div>

            <div className="projetosCarrossel">
                <div ref={faixaConquistasRef} className="projetosFaixa flex flex-nowrap gap-6 overflow-hidden py-2 w-full">
                    {conquistas.map((item) => (
                        <div
                            key={item.titulo}
                            className="projetoCard w-100 shrink-0 min-h-full rounded-xl border-3 border-[#0d1a2d] flex flex-col hover:scale-101 transition-all duration-300 overflow-hidden cursor-pointer"
                            onClick={() => {
                                if (item.isPdf && item.pdfUrl) {
                                    solicitarDownloadPdf(item.pdfUrl)
                                } else {
                                    exibirModal(item.imagem)
                                }
                            }}
                        >
                            <div className="h-[150px] bg-white relative">
                                <Image
                                    alt={item.titulo}
                                    src={item.imagem}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{item.titulo}</h3>
                                <p className="mt-3">{item.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {temOverflow && (
                    <>
                        <button
                            type="button"
                            className="projetosSeta projetosSetaEsquerda"
                            aria-label="Mostrar conquistas anteriores"
                            title="Conquistas anteriores"
                            disabled={!podeRolarEsquerda}
                            onClick={() => rolarConquistas(-1)}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            type="button"
                            className="projetosSeta projetosSetaDireita"
                            aria-label="Mostrar próximas conquistas"
                            title="Próximas conquistas"
                            disabled={!podeRolarDireita}
                            onClick={() => rolarConquistas(1)}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </>
                )}
            </div>

            <ModalCertificado imagem={imagemModal} modalVisible={showModalCertificado} informarClique={() => setShowModalCertificado(false)} />
            <ModalConfirmacao
                modalVisible={showModalConfirmacao}
                baixarPDF={() => baixarPdf(pdfSelecionado)}
                informarClique={() => setShowModalConfirmacao(false)}
            />
        </div>
    )
}