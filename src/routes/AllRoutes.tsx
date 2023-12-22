import { Layout } from '@/components/Layout/Layout'
import { ROUTE_MACROS } from '@/constants/routes'
import { Macros } from '@/pages/Macros'
import {
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

export const allRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTE_MACROS} element={<Outlet />}>
            <Route
                index
                element={
                    <Layout>
                        <Macros />
                    </Layout>
                }
            />
        </Route>,
    ),
)
