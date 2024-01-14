export interface ICollection {
  id: number;
  name: string;
  address: string;
  network: string;
  chainId: number;
  color: string;
  cards: ICardItem[];
}

export interface ICardItem {
  name: string;
  address: string;
  id: number;
  category: string;
  imageUrl: string;
  meta: any;
}
