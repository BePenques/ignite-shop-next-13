import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

interface Props {
    params: {id: string}
}

export default function Product({params}: Props) {


  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis libero cumque dignissimos vero eius laudantium repudiandae nam doloremque ipsam maiores labore minus, iure animi ex ipsum earum, ducimus voluptatum saepe.</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}