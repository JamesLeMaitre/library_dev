import {
  Navigate,
  useNavigate,
  useRoutes,
} from 'react-router-dom';

import DashBoard from '../path/DashBoard';

export const Route = () => {
    const navigate = useNavigate();

    const routes = useRoutes([{
        path:'/dashboard',
        element: <DashBoard />,
        children: [
            {element: <typeof Navigate to="/dashboard" />, index:true},
            {path: 'app',element: <DashBoard />}
        ]

    },{
        path: 'login',
        element: <LoginPage />,
      },
    ])
  
}
