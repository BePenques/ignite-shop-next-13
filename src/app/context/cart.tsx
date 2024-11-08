
import { create,  } from 'zustand';
import { persist } from 'zustand/middleware';


export interface CartItem{
    id: string,
    name: string,
    imageUrl: string,
    price: string | null,
    description: string | null,
    defaultPriceId: string,
}

interface CartState{
    items: CartItem[],
    addItem: (item: CartItem)=> void,
    removeItem: (itemId: string) => void,
    clearCart: () => void;
}

const useCartStore = create<CartState>()(
    persist<CartState>(
      (set) => ({
        items: [],
        addItem: (item) =>
          set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
              return {
                items: state.items.map((i) =>
                  i.id === item.id ? { ...i } : i
                ),
              };
            } else {
              return { items: [...state.items, { ...item}] };
            }
          }),
        removeItem: (itemId) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== itemId),
          })),
        clearCart: () => set({ items: [] }),
      }),
      {
        name: 'cart-storage', // Nome do armazenamento no localStorage
      }
    )
  );

  export default useCartStore;