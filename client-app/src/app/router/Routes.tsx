import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/activities/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/Form/ActivityForm";
import ActivityDetails from "../../features/activities/Details/ActivityDetails";
import LoginForm from "../../features/users/LoginForm";
import ProfilePage from "../../features/profiles/ProfilePage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            // {path: '', element: <HomePage />},
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm  key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
            {path: 'profiles/:username', element: <ProfilePage />},
            {path: 'login', element: <LoginForm />},
        ]
    }
]

export const router = createBrowserRouter(routes);