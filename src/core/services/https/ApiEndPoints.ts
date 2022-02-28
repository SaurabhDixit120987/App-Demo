import {LOCAL_BASE_URL} from '../../../app.config';

const ApiEndPoints = {
  cardDetails: {
    method: 'GET',
    api: () => `${LOCAL_BASE_URL}/debitCardDetails.json`,
  },
};

export interface APIDef {
  method: string;
  api: any;
}

export interface APIInput {}

export default ApiEndPoints;
