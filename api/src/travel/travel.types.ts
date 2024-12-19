export interface ITravel {
  id: number;
  name: string;
  description: string;
  image: string;
  city: string;
  country: string;
}

export interface ITraverlDTO {
  name: string;
  description?: string;
  image?: string;
  city?: string;
  country?: string;
}
