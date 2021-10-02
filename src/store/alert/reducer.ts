import { AlertAction, AlertActionTypes, AlertState } from './types';
import { AlertStateDefault } from './default';

export const alertReducer = (
  state: AlertState = AlertStateDefault,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case AlertActionTypes.ALERT_SHOW:
      return { alerts: [...state.alerts, action.alert] };

    case AlertActionTypes.ALERT_HIDE:
      return {
        alerts: state.alerts.filter(({ id }) => id !== action.alert.id)
      };

    default:
      return state;
  }
};
