import React from "react";
import { Button, Container, Menu, MenuItem, Image, Dropdown, DropdownItem } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";


export default observer(function NavBar() {
    const {userStore: {user, logout}} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Gå ihop
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Aktiviteter"/>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Skapa Aktivitet' />
                </Menu.Item>
                <MenuItem position='right'>
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                           <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} 
                                text='Min Profil' icon='user' />
                           <Dropdown.Item onClick={logout} text='Logga ut' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </MenuItem>
            </Container>
        </Menu>
    )
})