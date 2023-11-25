import { observer } from "mobx-react-lite";
import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer (function ActivityFilters() {
    const {activityStore: {predicate, setPredicate}} = useStore();
    return (
        <>
        
            <Menu vertical size="large" style={{width: '100%', marginTop: 28 }}>
                <Header icon='filter' attached color="green" content='Filtrera' />
                <Menu.Item
                    content='Alla aktiviteter'
                    active={predicate.has('all')}
                    onClick={() => setPredicate('all', 'true')}
                    background="blue"
                    />
                <Menu.Item 
                    content='Jag deltar'
                    active={predicate.has('isGoing')}
                    onClick={() => setPredicate('isGoing', 'true')}
                    />
                <Menu.Item 
                    content='Jag publicerar'
                    active={predicate.has('isHost')}
                    onClick={() => setPredicate('isHost', 'true')}
                    />
            </Menu>
            <Header />
            <Calendar 
                onChange={(date: any) => setPredicate('startDate', date as Date)}
                value={predicate.get('startDate' || new Date)}
            />
        </>
    )
})