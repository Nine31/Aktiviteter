import { observer } from 'mobx-react-lite'
import React from 'react'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='green'
                style={{border: 'none'}}
            >
                <Header>Chatta om denna händelse</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Alvedin</Comment.Author>
                            <Comment.Metadata>
                                <div>Idag kl.17:42</div>
                            </Comment.Metadata>
                            <Comment.Text>Vad konstnärligt!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Svara</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Erik</Comment.Author>
                            <Comment.Metadata>
                                <div>5 dagar sedan</div>
                            </Comment.Metadata>
                            <Comment.Text>Det här är fantastiskt. Tack så mycket</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Svara</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Lägg till ett svar'
                            labelPosition='left'
                            icon='edit'
                            primary
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </>

    )
})