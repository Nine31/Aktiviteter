import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponenets";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetails() {

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity} = activityStore;
    const {id} = useParams();

    useEffect(() => {
       if (id) loadActivity(id);
       return () => clearSelectedActivity();
    }, [id, loadActivity, clearSelectedActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

    return (

        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity}/>
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat activityId={activity.id} />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar activity={activity} />
            </Grid.Column>
        </Grid>

        // <Card fluid>
        //     <Image src={'/assets/categoryImages/' + activity.category + '.jpg'} />
        //     <Card.Content>
        //         <Card.Header>{activity.title}</Card.Header>
        //         <Card.Meta>
        //            <span>{activity.date}</span>
        //         </Card.Meta>
        //         <Card.Description>
        //             {activity.description}
        //         </Card.Description>
        //     </Card.Content>
        //     <Card.Content extra>
        //         <Button.Group widths='2'>
        //             <Button as={Link} to={`/manage/${activity.id}`} basic color='blue' content='Ändra'/>
        //             <Button as={Link} to='activities' basic color='grey' content='Ångra'/>
        //         </Button.Group>
        //     </Card.Content>
        // </Card>
    )
})