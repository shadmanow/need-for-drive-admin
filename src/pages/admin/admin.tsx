import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectCars, selectCities, selectOrders } from '@store/selectors';

import './admin.scss';
import Order from '@pages/order';
import AdminBar from '@components/admin-bar';
import { useDispatch } from 'react-redux';
import { getOrders } from '@store/order/thunks';
import { getCities } from '@store/city/thunks';
import { getCars } from '@store/car/thunks';
import { Footer } from '@components/footer/footer';
import ErrorBoundary from '@components/error-boundary';

export const Admin: FC = (): JSX.Element => {
  const { orders } = useAppSelector(selectOrders);
  const { cities } = useAppSelector(selectCities);
  const { cars } = useAppSelector(selectCars);
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
  }, []);

  return (
    <div className='admin'>
      <AdminBar />
      <main className='admin__wrapper'>
        <ErrorBoundary>
          <Switch>
            <Route path='/admin/order' component={Order} />
            <Redirect to='/admin/order' />
          </Switch>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
