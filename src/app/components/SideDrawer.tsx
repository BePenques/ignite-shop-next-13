import * as Dialog from '@radix-ui/react-dialog';
import { StyledOverlay,StyledContent, StyledProductList, StyledModalFooter} from '@/styles/pages/app';
import CloseButton from './CloseButton';
import ProductCards from './ProductCards';


const SideDrawer: React.FC = () => {

  
  return (
      <Dialog.Portal>
        {/* Overlay de fundo */}
        <StyledOverlay />

        {/* Conteúdo do modal */}
        <StyledContent>
          <CloseButton/>
          <h2>Sacola de compras</h2>
          <StyledProductList>
            <ProductCards/>
          </StyledProductList>
          <StyledModalFooter>
            <div>
              <p>Quantidade</p>
              <p>3 itens</p>
            </div>
            <div>
              <p>Valor total</p>
              <span>R$ 270,00</span>
            </div> 
            <button>Finalizar compra</button> 
          </StyledModalFooter>
        </StyledContent>
      </Dialog.Portal>
  );
};

export default SideDrawer;
