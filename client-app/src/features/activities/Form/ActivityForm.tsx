import { useEffect, useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ActivityFormValues } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponenets";
import {v4 as uuid} from 'uuid';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/cayegoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";


export default observer(function ActivityForm() {

    const {activityStore} = useStore();
    const {createActivity, updateActivity, 
        loadActivity, loadingInitial} = activityStore;

    const {id} = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
        title: Yup.string().required('Fält Rubrik är obligatoriskt'),
        description: Yup.string().required('Fält Beskrivning är obligatoriskt'),
        category: Yup.string().required('Fält Kategori är obligatoriskt'),
        date: Yup.string().required('Fält Datum är obligatoriskt'),
        city: Yup.string().required('Fält Stad är obligatoriskt'),
        venue: Yup.string().required('Fält Mötesplats är obligatoriskt')
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity!)))
    }, [id, loadActivity]);

    function handleFormSubmit(activity: ActivityFormValues) {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content="Läser in aktivitet..." />

    return (
        <Segment clearing>
            <Header content='Aktivitetsinformation' sub color="green"/>
            <Formik 
                    validationSchema={validationSchema}
                    enableReinitialize 
                    initialValues={activity} 
                    onSubmit={values => handleFormSubmit(values)}>
                    {({handleSubmit, isValid, isSubmitting, dirty}) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='title' placeholder='Rubrik' />
                        <MyTextArea rows={10} placeholder='Beskrivning' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Kategori' name='category' />
                        <MyDateInput 
                            placeholderText='Datum' 
                            name='date' 
                            showTimeSelect
                            timeCaption="time"
                            dateFormat={'yyyy, MMMM d, h:mm aa'}
                        />
                        <Header content='Platsdetaljer' sub color="green"/>
                        <MyTextInput placeholder='Stad' name='city' />
                        <MyTextInput placeholder='Mötesplats' name='venue' />
                        <Button 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} 
                            floated='right' 
                            positive type='submit' 
                            content='Bekräfta' 
                            
                        />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Avbryt'/> 
                </Form>
                )}

            </Formik>
        </Segment>
    )
})