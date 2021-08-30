export interface Alert {
  id: string;
  status: 'success' | 'error';
  text: string;
}

export interface AlertState {
  readonly alerts: Alert[];
}

export enum AlertActionTypes {
  ALERT_SHOW = 'ALERT_SHOW',
  ALERT_HIDE = 'ALERT_HIDE'
}

export interface AlertShowAction {
  type: AlertActionTypes.ALERT_SHOW;
  alert: Alert;
}

export interface AlertHideAction {
  type: AlertActionTypes.ALERT_HIDE;
  alert: Alert;
}

export type AlertAction = AlertShowAction | AlertHideAction;
