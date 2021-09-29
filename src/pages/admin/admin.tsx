import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LINKS } from '@constants/links';

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

export const Admin: FC = (): JSX.Element => {
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
            <Route exact path={LINKS.ORDERS.to} component={Orders} />
            <Route exact path={LINKS.CARS.to} component={Cars} />
            <Route exact path={LINKS.POINTS.to} component={Points} />
            <Route path={`${LINKS.CARS.to}/edit/:id`} component={CarAction} />
            <Route path={`${LINKS.CARS.to}/new`} component={CarAction} />
            <Route path={`${LINKS.POINTS.to}/new`} component={PointAction} />
            <Route
              path={`${LINKS.POINTS.to}/edit/:id`}
              component={PointAction}
            />
            <Route
              path={`${LINKS.ORDERS.to}/edit/:id`}
              component={OrderAction}
            />
            <Redirect to={LINKS.ORDERS.to} />
          </Switch>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
