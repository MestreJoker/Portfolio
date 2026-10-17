'use client'

import { faAward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"
import ModalCertificado from "./ModalCertificado"

export default function MeusCertificados() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [imagemModal, setImagemModal] = useState<string>("")

    function exibirModal(imagem: string){
        setShowModal(true)
        setImagemModal(imagem)
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
        }
    ]
    return (
        <div className="mt-8 relative">
            <div className="flex gap-2 items-center mb-4">
                <FontAwesomeIcon icon={faAward} className="iconeTituloSecao" />
                <h3 className="tituloSecao">Meus Certificados</h3>
            </div>
            <div className="flex gap-6">
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

            <ModalCertificado imagem={imagemModal} modalVisible={showModal} informarClique={() => setShowModal(false)}/>
        </div>
    )
}