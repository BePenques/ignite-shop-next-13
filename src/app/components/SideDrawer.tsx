import * as Dialog from '@radix-ui/react-dialog';
import { StyledOverlay, StyledContent, StyledProductList, StyledModalFooter, StyledTitle} from '@/styles/pages/app';
import CloseButton from './CloseButton';
import ProductCards from './ProductCards';
import { ModalFooter } from './ModalFooter';


const SideDrawer: React.FC = () => {

  
  return (
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <CloseButton/>
          <StyledTitle>Sacola de compras</StyledTitle>
          <StyledProductList>
            <ProductCards/>
          </StyledProductList>
          <StyledModalFooter>
            <ModalFooter/>
          </StyledModalFooter>
        </StyledContent>
      </Dialog.Portal>
  );
};

export default SideDrawer;