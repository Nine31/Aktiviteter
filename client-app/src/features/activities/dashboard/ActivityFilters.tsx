import React from "react";
import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
        
            <Menu vertical size="large" style={{width: '100%', marginTop: 28 }}>
                <Header icon='filter' attached color="green" content='Filtrera' />
                <Menu.Item content='Alla aktiviteter'/>
                <Menu.Item content='Jag deltar'/>
                <Menu.Item content='Jag publicerar'/>
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}