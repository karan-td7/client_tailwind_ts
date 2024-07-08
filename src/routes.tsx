import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Tables from './pages/Tables';
import Settings from './pages/Settings';
import Chart from './pages/Chart';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Form from './pages/tylerDurden/form';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayout>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <ECommerce />
            </DefaultLayout>
        ),
    },
    {
        path: "/calendar",
        element: (
            <DefaultLayout>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Calendar />
            </DefaultLayout>
        ),
    },
    {
        path: "/profile",
        element: (
            <DefaultLayout>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
            </DefaultLayout>
        ),
    },
    {
        path: "/forms/form-elements",
        element: (
            <DefaultLayout>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
            </DefaultLayout>
        ),
    },
    {
        path: "/forms/form-layout",
        element: (
            <DefaultLayout>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
            </DefaultLayout>
        ),
    },
    {
        path: "/tables",
        element: (
            <DefaultLayout>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
            </DefaultLayout>
        ),
    },
    {
        path: "/settings",
        element: (
            <DefaultLayout>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
            </DefaultLayout>
        ),
    },
    {
        path: "/chart",
        element: (
            <DefaultLayout>
                <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Chart />
            </DefaultLayout>
        ),
    },
    {
        path: "/ui/alerts",
        element: (
            <DefaultLayout>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
            </DefaultLayout>
        ),
    },
    {
        path: "/ui/buttons",
        element: (
            <DefaultLayout>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
            </DefaultLayout>
        ),
    },
    {
        path: "/auth/signin",
        element: (
            <DefaultLayout>
                <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignIn />
            </DefaultLayout>
        ),
    },
    {
        path: "/auth/signup",
        element: (
            <DefaultLayout>
                <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignUp />
            </DefaultLayout>
        ),
    },
    {
        path: "/form",
        element: (
            <DefaultLayout>
                <PageTitle title="Project | Form" />
                <Form />
            </DefaultLayout>
        ),
    },
]);

export default router;
