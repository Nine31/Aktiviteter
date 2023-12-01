import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/Form/ActivityForm";
import ActivityDetails from "../../features/activities/Details/ActivityDetails";
import ProfilePage from "../../features/profiles/ProfilePage";
import RequireAuth from "./RequireAuth";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                {path: 'aktiviteter', element: <ActivityDashboard />},
                {path: 'aktiviteter/:id', element: <ActivityDetails />},
                {path: 'skapaAktivitet', element: <ActivityForm  key='create' />},
                {path: 'manage/:id', element: <ActivityForm key='manage' />},
                {path: 'profil/:username', element: <ProfilePage />}
                
            ]}
            // {path: '', element: <HomePage />},
        ]
    }
]

export const router = createBrowserRouter(routes);