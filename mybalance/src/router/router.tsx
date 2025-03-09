import { createBrowserRouter, Outlet } from "react-router-dom"
import { AuthContextProvider } from "../contexts/auth-context"
import PageLogin from "../pages/login/page-login"
import { AuthGuard } from "../guard/auth-guard"
import PageDashboard from "../pages/general/page-dashboard"

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <PageLogin />,
    },
    {
        path: '/',
        element: (
            <AuthContextProvider>
                <AuthGuard>
                    <Outlet />
                </AuthGuard>
            </AuthContextProvider>
        ),
        children: [
            {
                path: '/',
                element: <PageDashboard />,
            }
        ]
    },
])