import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';

function App() {
  const location = useLocation();

  // const {activityStore} = useStore();

  // useEffect(() => {
  //   activityStore.loadActivities();
  // }, [activityStore])

  // if (activityStore.loadingInitial) return <LoadingComponent content='Läser in' />

  return (
    <>
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
