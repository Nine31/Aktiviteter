import { observer } from 'mobx-react-lite';
import React, { useEffect } from "react";
import { Grid} from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from '../../../app/layout/LoadingComponenets';

export default observer(function ActivityDashboard() {

    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
       if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponent content='Läser in...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Filtrera aktiviteter</h2>
            </Grid.Column>
        </Grid>
    )
})