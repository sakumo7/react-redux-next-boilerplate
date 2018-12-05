import { FAILURE, SUCCESS } from "./actionSuffixes";

export const mapFailure = (error, actionType) => ({
  type: actionType + FAILURE,
  error: {
    response: error.response.body,
    status: error.response.status
  }
});

export const mapSuccess = (response, actionType) => ({
  type: actionType + SUCCESS,
  payload: {
    response: response.body,
    status: response.status
  }
});
