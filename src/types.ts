export interface ICollection {
  id: number;
  name: string;
  address: string;
  network: string;
  chainId: number;
  color: string;
  fontColor?: string;
  cards: ICardItem[];
}

export interface ICardItem {
  name: string;
  address: string;
  id: number | string;
  category: string;
  imageUrl: string;
  meta: any;
  enabled?: boolean;
}
