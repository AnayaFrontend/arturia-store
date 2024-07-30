'use client'
import AreaItemCarrinho from '@/components/carrinho/AreaItemCarrinho'
import CarrinhoVazio from '@/components/carrinho/CarrinhoVazio'
import TotalCarrinho from '@/components/carrinho/TotalCarrinho'
import Pagina from '@/components/template/Pagina'
import useCarrinho from '@/data/hooks/useCarrinho'

export default function PaginaCarrinho() {
    const { itens, adicionar, remover } = useCarrinho();

    // Verifique se `itens` é um array válido, caso contrário, defina como um array vazio
    const itensArray = Array.isArray(itens) ? itens : [];

    return (
        <Pagina className="flex flex-col gap-10">
            {itensArray.length === 0 ? (
                <CarrinhoVazio />
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        {itensArray.map((item) => (
                            <AreaItemCarrinho
                                key={item.produto.id}
                                item={item}
                                adicionar={(item) => adicionar(item.produto)}
                                remover={(item) => remover(item.produto)}
                            />
                        ))}
                    </div>
                    <TotalCarrinho itens={itensArray} />
                </>
            )}
        </Pagina>
    );
}
