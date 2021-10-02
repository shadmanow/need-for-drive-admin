import { PointsActionTypes, PointsState, SetPointsAction } from './types';
import { PointsStateDefault } from './default';

export const pointsReducer = (
  state: PointsState = PointsStateDefault,
  action: SetPointsAction
): PointsState => {
  switch (action.type) {
    case PointsActionTypes.SET_POINTS:
      return { points: action.points };
    default:
      return state;
  }
};
