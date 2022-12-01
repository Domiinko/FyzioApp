

export interface RingData {
  id : number;
  name : string;
  city : string;

}
export interface BandData {
  best: Best_I;
}

export interface Best_I{
  total: Total_I;
}
export interface Total_I{
  distance: Distance_I;
  floors: Floors_I;
  steps: Steps_I;
}
export interface Distance_I{
  date: number;
  value: number;
}
export interface Floors_I{
  date: number;
  value: number;
}
export interface Steps_I{
  date: number;
  value: number;
}




export interface WatchData {

}
