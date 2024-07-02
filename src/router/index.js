import Layout from "@/pages/Layout"
import New from "@/pages/New"
import Month from "@/pages/Layout/Month"
import Year from "@/pages/Layout/Year"
import { createBrowserRouter } from "react-router-dom"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // index: true,
        path: '/month',
        element: <Month />
      },
      {
        path: '/year',
        element: <Year />
      }
    ]
  },
  {
    path: '/new',
    element: <New />
  }
])

export default router