import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";
import ProfileStore from "../../app/stores/profileStore";

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {
    const panes = [
        {menuItem: 'Om', render: () => <Tab.Pane>Om Innehåll</Tab.Pane>},
        {menuItem: 'Bilder', render: () => <ProfilePhotos profile={profile}/>},
        {menuItem: 'Evenemang', render: () => <Tab.Pane>Evenemang Innehåll</Tab.Pane>},
        {menuItem: 'Följare', render: () => <Tab.Pane>Följare Innehåll</Tab.Pane>},
        {menuItem: 'Följer', render: () => <Tab.Pane>Följer Innehåll</Tab.Pane>}
    ];

    return (
        <Tab 
           menu={{fluid: true, vertical: true}}
           menuPosition="right"
           panes={panes}
        />
    )
})