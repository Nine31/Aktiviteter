import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';
import { useStore } from '../stores/store';
import { useEffect } from 'react';
import LoadingComponent from './LoadingComponenets';
import ModalContainer from '../common/modals/ModalContainer';

function App() {
  const location = useLocation();
  const { commonStore, userStore} = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Läser in...' />

  // const {activityStore} = useStore();

  // useEffect(() => {
  //   activityStore.loadActivities();
  // }, [activityStore])

  // if (activityStore.loadingInitial) return <LoadingComponent content='Läser in' />

  return (
    <>
        <ScrollRestoration />
        <ModalContainer />
        {location.pathname === '/' ? <HomePage /> : (
          <>
            <NavBar />
            <Container style={{marginTop: '7em'}}>
              <Outlet />
            </Container>
          </>
        )}
        
    </>
  );
}

export default observer (App);
