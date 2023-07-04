import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Page1 from "./pages/Page1";
import LoiSongTinhThuc from "./pages/LoiSongTinhThuc";
import TrungNguyenECoffee from "./pages/TrungNguyenECoffee";
import TrungNguyenLegendCafe from "./pages/TrungNguyenLegendCafe";
import G7 from "./pages/G7";
import TrungNguyen from "./pages/TrungNguyen";
import TrungNguyenLegend from "./pages/TrungNguyenLegend";
import HomePage1 from "./pages/HomePage1";
import {articles} from '../src/data/articles';
import HanhTrinhHome from "../src/pages/HanhtrinhHome";
import HanhTrinhTuTraiTim from "../src/pages/HanhTrinhTuTraiTim";
import ArticleTemplate from "../src/pages/ArticleTemplate";
import { articlesLong } from "./data/data";
import Trietdao from "../src/pages/Trietdao";
import Xemthem from "../src/Pages/Xemthem";

function App() {
  const routes = []
    articles.forEach(article => {
      routes.push({
        path: article.path,
        element: <ArticleTemplate
          id={article.id}
          page={article.page}
        />,
      })
    })
    const routesLong = []
    articlesLong.forEach((articleLong) => {
      routesLong.push({
        path: articleLong.path,
        element: <Xemthem id={articleLong.id} page={articleLong.page} />,
      });
    });
  

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
    },
    {
      path:'/vechungtoi',
      element:<Page1/>
    },
    {
      path:'/thong-diep-nha-sang-lap',
      element: <Page1/>
      
    },
    {
      path:'/tam-nhin-su-mang-gia-tri-cot-loi',
      element:<Page1/>
    },
    {
      path:'/lich-su-phat-trien',
      element:<Page1/>
    },
    {
      path: '/hanh-trinh-lap-chi-vi-dai-khoi-nghiep-kien-quoc-cho-thanh-nien-viet',
      element: <HanhTrinhHome />,
    },
    {
      path: '/hanh-trinh-tu-trai-tim',
      element: <HanhTrinhTuTraiTim />,
    },
    {
      path: "/ca-phe-triet-dao",
      element: <Trietdao/>,
    }
  ].concat(routes).concat(routesLong));

  return(
    <>  
    <RouterProvider router={router}/>
    </>
  )
}

export default App
