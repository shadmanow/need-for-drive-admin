import { nanoid } from 'nanoid';
import { Dispatch } from 'redux';
import {
  Alert,
  AlertActionTypes,
  AlertHideAction,
  AlertShowAction
} from './types';

const alertShowAction = (
  text: string,
  status: 'success' | 'error'
): AlertShowAction => ({
  type: AlertActionTypes.ALERT_SHOW,
  alert: { id: nanoid(), text, status }
});

const alertHideAction = (alert: Alert): AlertHideAction => ({
  type: AlertActionTypes.ALERT_HIDE,
  alert
});

export const alertShow =
  (text: string, status: 'success' | 'error') => (dispatch: Dispatch<any>) => {
    dispatch(alertShowAction(text, status));
  };

export const alertHide = (alert: Alert) => (dispatch: Dispatch<any>) => {
  dispatch(alertHideAction(alert));
};
