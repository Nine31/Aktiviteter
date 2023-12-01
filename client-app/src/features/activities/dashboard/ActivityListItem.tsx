import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {

    return (

        <Segment.Group>
            <Segment>
                {activity.isCancelled && 
                   <Label attached="top" color="red" content="Avbokad" style={{textAlign: "center"}} />
                }
                <Item.Group>
                    <Item>
                        <Item.Image style={{marginBottom: 4}} size="tiny" circular src={activity.host?.image
                                    || '/assets/user.png'}/>
                        <Item.Content>
                            <Item.Header as={Link} to={`/aktiviteter/${activity.id}`}>
                                {activity.title}
                        </Item.Header>
                        <Item.Description>Skapad av <Link to={`/profil/${activity.hostUsername}`}>{activity.host?.displayName}</Link></Item.Description>
                        {activity.isHost && (
                            <Item.Description>
                                <Label basic color="orange">
                                    Du äger denna aktivitet
                                </Label>
                            </Item.Description>
                        )}
                        {activity.isGoing && !activity.isHost && (
                            <Item.Description>
                                <Label basic color="green">
                                    Du deltar i denna aktivitet
                                </Label>
                            </Item.Description>
                        )}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> {format(activity.date!, 'yyyy MMM dd h:mm aa')}
                    <Icon name="marker" /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees!}/>
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/aktiviteter/${activity.id}`}
                    color='blue'
                    floated="right"
                    content='Visa'
                />
            </Segment>
        </Segment.Group>


        // <Item key={activity.id}>
        //                 <Item.Content>
        //                     <Item.Header as='a'>{activity.title}</Item.Header>
        //                     <Item.Meta>{activity.date}</Item.Meta>
        //                     <Item.Description>
        //                        <div>{activity.description}</div>
        //                        <div>{activity.city}, {activity.venue}</div>    
        //                     </Item.Description>
        //                     <Item.Extra>
        //                         <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='Visa' color='blue' />
        //                         <Button 
        //                              name={activity.id}
        //                              loading={loading && target === activity.id} 
        //                              onClick={(e) => handleActivityDelete(e, activity.id)} 
        //                              floated='right' 
        //                              content='Ta Bort' 
        //                              color='red' 
        //                         />
        //                         <Label basic content={activity.category} />
        //                     </Item.Extra>
        //                 </Item.Content>   
        //             </Item>
    )
        
}
