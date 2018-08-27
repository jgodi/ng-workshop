export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetails[];
}

export interface ViewDetails {
  age: number;
  region: string;
  date: string;
}
