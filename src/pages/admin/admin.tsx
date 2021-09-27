import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LINKS } from '@constants/links';

import { getOrders } from '@store/order/thunks';
import { getCities } from '@store/city/thunks';
import { getCars } from '@store/car/thunks';
import { getCategories } from '@store/category/thunks';
import { useAppSelector } from '@store/hooks';
import {
  selectCars,
  selectCategories,
  selectCities,
  selectOrders
} from '@store/selectors';

import Orders from '@pages/orders';
import Cars from '@pages/cars';
import CarEdit from '@pages/car-edit';

import AdminBar from '@components/admin-bar';
import Footer from '@components/footer';
import ErrorBoundary from '@components/error-boundary';

import './admin.scss';

export const Admin: FC = (): JSX.Element => {
  const { orders } = useAppSelector(selectOrders);
  const { cities } = useAppSelector(selectCities);
  const { cars } = useAppSelector(selectCars);
  const { categories } = useAppSelector(selectCategories);
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
  }, []);

  return (
    <div className='admin'>
      <AdminBar />
      <main className='admin__wrapper'>
        <ErrorBoundary>
          <Switch>
            <Route path={LINKS.ORDERS.to} component={Orders} />
            <Route exact path={LINKS.CARS.to} component={Cars} />
            <Route path={`${LINKS.CARS.to}/edit/:id`} component={CarEdit} />
            <Redirect to={LINKS.ORDERS.to} />
          </Switch>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
