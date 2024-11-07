// components/SideDrawer.tsx
import * as Dialog from '@radix-ui/react-dialog';
import { StyledOverlay,StyledContent, CloseButton } from '@/styles/pages/product';
// import { X } from 'lucide-react';

// interface SideDrawerProps {
//   onClose: () => void;
// }



const SideDrawer: React.FC = () => {
  return (
      <Dialog.Portal>
        {/* Overlay de fundo */}
        <StyledOverlay />

        {/* Conteúdo do modal */}
        <StyledContent>
          <CloseButton as={Dialog.Close}>Fechar</CloseButton>
          <h2>Conteúdo do Modal Lateral</h2>
          <p>Este é um exemplo de modal lateral com Stitches e Radix UI.</p>
        </StyledContent>
      </Dialog.Portal>
      // <Dialog.Portal>
    
      //   <Dialog.Overlay className="fixed inset-0 bg-black/50 transition-opacity z-30" />

   
      //   <Dialog.Content 
      //     className="fixed right-0 top-0 h-full w-64 bg-white p-6 shadow-lg transform transition-transform z-30"
      //   >
      
      //     <button
          
      //       className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      //       aria-label="Fechar drawer"
      //     >
      //       <X size={24} />
      //     </button>

      //     <Dialog.Title className="text-xl font-semibold">Side Drawer</Dialog.Title>
      //     <Dialog.Description className="mt-2 text-sm text-gray-500">
      //       Esse é o conteúdo do seu modal lateral.
      //     </Dialog.Description>
          
      
      //     <div className="mt-4">
      //       <p>Aqui você pode adicionar qualquer conteúdo ou navegação.</p>
      //       <button
      //         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      //       >
      //         Fechar
      //       </button>
      //     </div>
      //   </Dialog.Content>
      // </Dialog.Portal>

  );
};

export default SideDrawer;
