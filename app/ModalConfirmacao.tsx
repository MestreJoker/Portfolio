'use client'

interface ModalConfirmacaoProps {
    modalVisible: boolean
    baixarPDF: () => void
    informarClique: () => void
}

export default function ModalConfirmacao(props: ModalConfirmacaoProps) {
    if (!props.modalVisible) return null

    const confirmarDownload = () => {
        props.baixarPDF()
        props.informarClique()
    }

    return (
        <div className="modalCertificadoOverlay">
            <button
                type="button"
                className="modalCertificadoFundo"
                aria-label="Fechar confirmação de download"
                onClick={props.informarClique}
            />
            <div className="modalConfirmacaoConteudo" role="dialog" aria-modal="true" aria-labelledby="modalConfirmacaoPergunta">
                <p id="modalConfirmacaoPergunta" className="text-lg font-medium">
                    Deseja baixar o PDF do resultado do vestibular da Fatec de 2025?
                </p>
                <div className="mt-6 flex justify-center gap-3">
                    <button type="button" className="botaoPreenchido cursor-pointer" onClick={confirmarDownload}>
                        Sim
                    </button>
                    <button type="button" className="botaoSemFundo cursor-pointer" onClick={props.informarClique}>
                        Não
                    </button>
                </div>
            </div>
        </div>
    )
}