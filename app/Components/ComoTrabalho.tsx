import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ComoTrabalho() {
    const etapas = [
        {
            etapa: "Entendo",
            descricao: "Analiso as necessidades e objetivos do projeto."
        },
        {
            etapa: "Planejo",
            descricao: "Estruturo a interface e a experiência do usuário."
        },
        {
            etapa: "Desenvolvo",
            descricao: "Construo a solução com tecnologias modernas."
        },
        {
            etapa: "Entrego",
            descricao: "Testo, publico e faço os ajustes necessários."
        },
    ]
    return (
        <div id="comoTrabalho" className="py-8">
            <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faDiagramProject} className="iconeTituloSecao"/>
                <h3 className="tituloSecao">Como eu trabalho</h3>
            </div>

            <div className="etapasTrabalho flex gap-4 mt-4">
                {etapas.map((item, index) => {
                    return(
                        <div key={`etapa${index + 1}`} className="etapaCard w-70 p-4 rounded-xl border-3 border-(--corBorda) flex gap-3">
                            <p className="w-10 h-10 rounded-full flex items-center justify-center bg-(--colorMain) shrink-0">
                                {`0${index + 1}`}
                            </p>
                            <div>
                                <p className="font-bold">{item.etapa}</p>
                                <p>{item.descricao}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}