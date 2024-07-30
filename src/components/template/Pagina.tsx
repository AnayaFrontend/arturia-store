import Cabecalho from './Cabecalho'

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Cabecalho />
            <main
                className={`
                    flex-1 w-full max-w-[1200] mx-auto bg-slate-200
                    ${props.className ?? ''} py-10
                `}
            >
                <div className="grid lg:grid-cols-1 gap-4">
                    {props.children}
                </div>
            </main>
            <footer>
                <div className='w-full flex justify-center items-center bg-zinc-800 h-20 px-10'>
                    <p className='text-center'>@ Desenvolvido por Raphael Anaya</p>
                </div>
            </footer>
        </div>
    )
}
