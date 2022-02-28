import {CardDetails} from '../interfaces';

export interface Store {
  loader: boolean;
  cardVisiibility: boolean;
  cardDetails: CardDetails;
}
