import { atom } from 'jotai'
//atomWithStorage

export interface Product {
id: number,
image?: string,
title: string,
price: number,
quantity: number,
}

//atomWithStorage
export const productAtom = atom<Product[]>([]);