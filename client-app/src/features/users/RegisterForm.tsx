import { ErrorMessage, Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Header, Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';

export default observer(function RegisterForm() {
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.register(values)
               .catch(error => setErrors({error: 'Ogiltig email eller lösenord'}))}

            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required(),
                password: Yup.string().required(),
            })}
        >
           {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
               <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                   <Header as='h2' content='Registrera dig till Reaktiviteter' color='green' textAlign='center' />
                   <MyTextInput placeholder="Visningsnamn" name="displayName" />
                   <MyTextInput placeholder="Användarnamn" name="username" />
                   <MyTextInput placeholder="Email" name="email" />
                   <MyTextInput placeholder="Lösenord" name="password" type="password"/>
                   <ErrorMessage
                       name='error' render={() => <Label style={{marginBottom: 10}} 
                          basic color="red" content={errors.error}/>}
                    />
                   <Button 
                           disabled={!isValid || !dirty || isSubmitting}
                           loading={isSubmitting} 
                           positive content='Registrera' 
                           type="submit" fluid />
               </Form>
           )}
        </Formik>
    )
})