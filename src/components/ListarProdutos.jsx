export function ListarProdutos(props) {
  return (
    <ul className="produtos-container">
      {props.produtos.map((produto) => (
        <li key={produto.id} className="produto-card">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="produto-imagem"
          />
          <h2 className="produto-nome">{produto.nome}</h2>
          <p className="produto-material">Material: {produto.material}</p>
          <p className="produto-tamanho">Tamanho: {produto.tamanho}</p>
          <p className="produto-peso">Peso: {produto.peso} kg</p>
          <p className="produto-valor">Valor: R$ {produto.valor}</p>
          <ul className="produto-itens">
            {produto.itens.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
