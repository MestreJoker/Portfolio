import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

interface ModalCertificadoProps{
    modalVisible: boolean
    imagem: string
    informarClique: () => void
}
export default function ModalCertificado(props: ModalCertificadoProps){
    return(
        <div className="">
            
            {props.modalVisible && 
                <div className="fixed inset-0 bg-black/50 transition-opacity z-100 flex flex-col overflow-hidden p-5">
                    <FontAwesomeIcon icon={faX} className=" ml-auto text-2xl cursor-pointer hover:text-red-500 transition-all"
                    onClick={() => props.informarClique()}/>
                    <Image alt="certificado" src={props.imagem} width={800} height={400} className="mx-auto"/>
                </div>
            }
        </div>
    )
}