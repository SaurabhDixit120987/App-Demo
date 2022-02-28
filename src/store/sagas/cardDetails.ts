import {RestApiService} from '../../core/services/https/restapi.service';
import ApiEndPoints from '../../core/services/https/ApiEndPoints';
import {put} from 'redux-saga/effects';
import {setCardDetails, toggleLoader} from '../actionTypes';

type Params = {
  payload: {};
  type: string;
};

export default function* getSurvey({}: Params) {
  const restApiService = new RestApiService();
  yield put({
    type: toggleLoader,
    payload: true,
  });
  try {
    const res = yield restApiService.invoke(ApiEndPoints.cardDetails);
    if (res.status === 200) {
      yield put({
        type: setCardDetails,
        payload: res.data,
      });
    }
  } catch (error) {
    if (__DEV__) console.log('Error in getting data', error);
  } finally {
    yield put({
      type: toggleLoader,
      payload: false,
    });
  }
}
