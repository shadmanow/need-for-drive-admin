import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { getOrders } from '@store/orders/thunks';
import { getCities } from '@store/cities/thunks';
import { getCars } from '@store/cars/thunks';
import { getCategories } from '@store/categories/thunks';
import { getPoints } from '@store/points/thunks';
import { useAppSelector } from '@store/hooks';
import {
  selectCars,
  selectCategories,
  selectCities,
  selectOrders,
  selectPoints
} from '@store/selectors';

import Orders from '@pages/orders';
import Cars from '@pages/cars';
import Points from '@pages/points';
import CarAction from '@pages/car-action';
import PointAction from '@pages/point-action';

import AdminBar from '@components/admin-bar';
import Footer from '@components/footer';
import ErrorBoundary from '@components/error-boundary';

import './admin.scss';
import OrderAction from '@pages/order-action';

export const Admin: FC = () => {
  const orders = useAppSelector(selectOrders);
  const cities = useAppSelector(selectCities);
  const cars = useAppSelector(selectCars);
  const categories = useAppSelector(selectCategories);
  const points = useAppSelector(selectPoints);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrders());
    }
    if (!cities.length) {
      dispatch(getCities());
    }
    if (!cars.length) {
      dispatch(getCars());
    }
    if (!categories.length) {
      dispatch(getCategories());
    }
    if (!points.length) {
      dispatch(getPoints());
    }
  }, []);

  return (
    <div className='admin'>
      <AdminBar />
      <main className='admin__wrapper'>
        <ErrorBoundary>
          <Switch>
            <Route exact path={ROUTES.ORDERS} component={Orders} />
            <Route exact path={ROUTES.CARS} component={Cars} />
            <Route exact path={ROUTES.POINTS} component={Points} />

            <Route path={`${ROUTES.CARS}/edit/:id`} component={CarAction} />
            <Route exact path={`${ROUTES.CARS}/new`} component={CarAction} />

            <Route path={`${ROUTES.POINTS}/edit/:id`} component={PointAction} />
            <Route
              exact
              path={`${ROUTES.POINTS}/new`}
              component={PointAction}
            />

            <Route path={`${ROUTES.ORDERS}/edit/:id`} component={OrderAction} />
            <Redirect to={ROUTES.ORDERS} />
          </Switch>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
