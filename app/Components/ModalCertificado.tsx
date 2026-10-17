import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

interface ModalCertificadoProps{
    modalVisible: boolean
    imagem: string
    informarClique: () => void
}
export default function ModalCertificado(props: ModalCertificadoProps){
    if (!props.modalVisible) return null

    return (
        <div className="modalCertificadoOverlay">
            <button
                type="button"
                className="modalCertificadoFundo"
                aria-label="Fechar visualização do certificado"
                onClick={props.informarClique}
            />
            <div className="modalCertificadoConteudo" role="dialog" aria-modal="true" aria-label="Certificado">
                <button
                    type="button"
                    className="modalCertificadoFechar"
                    aria-label="Fechar certificado"
                    onClick={props.informarClique}
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
                <Image alt="certificado" src={props.imagem} width={800} height={400} className="modalCertificadoImagem"/>
            </div>
        </div>
    )
}