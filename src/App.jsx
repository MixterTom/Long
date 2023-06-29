import { createBrowserRouter, RouterProvider} from "react-router-dom";

import LoiSongTinhThuc from "./pages/LoiSongTinhThuc";
import TrungNguyenECoffee from "./pages/TrungNguyenECoffee";
import TrungNguyenLegendCafe from "./pages/TrungNguyenLegendCafe";
import G7 from "./pages/G7";
import TrungNguyen from "./pages/TrungNguyen";
import TrungNguyenLegend from "./pages/TrungNguyenLegend";
import HomePage1 from "./pages/HomePage1";

function App() {
  const router = createBrowserRouter([
    {
      path:'/homepage',
      element:<HomePage1/>
    },
    {
      path:'/',
      element:<HomePage1/>
    },
    {
      path: '/loi-song-tinh-thuc',
      element: <LoiSongTinhThuc/>,
    },
    {
      path: '/trungnguyenecoffee',
      element: <TrungNguyenECoffee/>, 
    },
    {
      path: '/khong-gian-trung-nguyen-legend-cafe',
      element: <TrungNguyenLegendCafe/>,
    },
    {
      path: '/g7',
      element: <G7/>,
    },
    {
      path: '/trung-nguyen',
      element: <TrungNguyen/>
    },
    {
      path:'/trung-nguyen-legend',
      element: <TrungNguyenLegend/>
    }
  ])

  return(
    <RouterProvider router={router}/>
  )
}

export default App
