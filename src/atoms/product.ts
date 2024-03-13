import { atom } from 'jotai'
//atomWithStorage

interface Product {
id: number,
image: string,
name: string,
price: number,
}

//atomWithStorage
export const productAtom = atom<Product[]>([]);