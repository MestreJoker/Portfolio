import Image from "next/image"
export default function ExperienciasProfissionais() {
    const experiencias = [
        {
            logo: "/images/logoEmpresas/reciclo.png",
            cargo: "Desenvolvedor Front-end (Jovem Aprendiz)",
            empresa: "Reciclo Inteligência Ambiental",
            periodo: "02/2026 - atual",
            tarefas: [
                "Desenvolvimento e reestruturação de interfaces web para sistemas de gerenciamento.",
                "Uso de React/Next.Js, TypeScript e Tailwind CSS.",
                "Apoio no controle e diagnóstico de ativos de hardware."
            ]
        }
    ]
    return(
        <div className="flex flex-col">
            {experiencias.map((item, index) => {
                return (
                    <div key={`experiencia${index + 1}`} className="flex p-3 rounded-xl border-3 border-[#0d1a2d]">
                        <div className="flex gap-4 pr-10 border-r border-gray-700">
                            <Image alt={`logo${index + 1}`} src={item.logo} width={90} height={40}/>

                            <div>
                                <p className="text-xl font-bold">{item.empresa}</p>
                                <p>{item.cargo}</p>
                                <p className="text-gray-500">{item.periodo}</p>
                            </div>
                        </div>

                        <div className="my-auto">
                            <ul className="list-disc list-inside pl-10 text-sm">
                                {item.tarefas.map((item, index) => (
                                    <li key={`tarefa${index + 1}`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}