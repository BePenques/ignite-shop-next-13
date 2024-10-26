interface Props {
    params: {id: string}
}

export default function Product({params}: Props) {


  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>ID do produto: {params.id}</p>
    </div>
  );
}