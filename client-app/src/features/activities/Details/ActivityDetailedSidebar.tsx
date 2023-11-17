import { Segment, List, Label, Item, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity;
}

export default observer(function ActivityDetailedSidebar ({activity: {attendees, host}}: Props) {
    if (!attendees) return null;
    return (
        <>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='green'
            >
                {attendees.length} {attendees.length === 1 ? 'Person' : 'Personer'} deltar
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {attendees.map(attendee => (
                        <Item style={{ position: 'relative' }} key={attendee.username}>
                            {attendee.username === host?.username &&
                            <Label
                                style={{ position: 'absolute' }}
                                color='green'
                                ribbon='right'
                            >
                                Publicerad av
                            </Label>}
                                <Image size='tiny' src={attendee.image || '/assets/user.png'} />
                                <Item.Content verticalAlign='middle'>
                                    <Item.Header as='h3'>
                                        <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                                    </Item.Header>
                                    {attendee.following &&
                                    <Item.Extra style={{ color: 'orange' }}>Deltar</Item.Extra>}
                                </Item.Content>
                        </Item>
                    ))}
                </List>
            </Segment>
        </>

    )
})