import * as Actions from '../actionTypes';

export const toggleLoader = payload => ({
  type: Actions.toggleLoader,
  payload,
});

export const toggleCardVisibility = payload => ({
  type: Actions.toggleCardVisibility,
  payload,
});

export const setCardDetails = payload => ({
  type: Actions.setCardDetails,
  payload,
});

export const fetchCardDetails = () => ({
  type: Actions.fetchCardDetails,
});
