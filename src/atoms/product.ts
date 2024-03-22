import { atomWithStorage } from "jotai/utils";
//future use atomWithStorage

export interface Product {
  id: number;
  image?: string;
  title: string;
  price: number;
  quantity: number;
}

//future use atomWithStorage
export const productAtom = atomWithStorage<Product[]>('productAtom', []);
