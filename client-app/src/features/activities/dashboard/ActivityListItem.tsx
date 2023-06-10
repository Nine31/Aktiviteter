import React from "react";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {

    return (

        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png'/>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                        </Item.Header>
                        <Item.Description>Ägd av Alvedin</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> {activity.date}
                    <Icon name="marker" /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Deltagarna går hit
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
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
