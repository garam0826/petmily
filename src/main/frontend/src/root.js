import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
//import Mainpage from "./Mainpage";
//const Loading = <div>Loading...</div>

/*
import Login from "./member/Login";
import WriteContent from "./board/WriteContent";
import EditContent from "./board/EditContent";
import ReadContent from "./board/ReadContent";
import MyEdit from "./member/MyEdit";
*/

const Loading = <div>Loading...</div>
const MainPage = lazy(() => import("../src/Mainpage"))

const Login = lazy(() => import("../src/member/Login"))
const SignUp = lazy(() => import("../src/member/SignUp"))
const Findid = lazy(() => import("../src/member/Findid"))

const MyInfo  = lazy(() => import("../src/member/MyInfo"))
const MyPage= lazy(() => import("../src/member/MyPage"))
const MyEdit = lazy(() => import("../src/member/MyEdit"))

const Animalinfo= lazy(() => import("../src/animal/AnimalInfo"))

const Recommend  = lazy(() => import("../src/recommend/Recommend"))

const BoardList = lazy(() => import("../src/board/BoardList"))
const EditContent = lazy(() => import("../src/board/EditContent"))
const ReadContent = lazy(() => import("../src/board/ReadContent"))
const WriteContent = lazy(() => import("../src/board/WriteContent"))

const Favorite = lazy(() => import("../src/member/Favorite"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback ={Loading}><MainPage/></Suspense>
    },
    {
        path: "/main",
        element: <Suspense fallback ={Loading}><MainPage/></Suspense>
    },
    {
        path: "/member/login",
        element: <Suspense fallback ={Loading}><Login/></Suspense>
    },
    {
        path: "/member/signup",
        element: <Suspense fallback ={Loading}><SignUp/></Suspense>
    },
    {
        path: "/board/list",
        element: <Suspense fallback ={Loading}><BoardList/></Suspense>
    },
    {
        path: "/member/mypage/myinfo",
        element: <Suspense fallback ={Loading}><MyInfo/></Suspense>
    },
    /*{
        path: "/member/mypage/resign",
        element: <Suspense fallback ={Loading}><Memberresign/></Suspense>
    },*/
    {
        path: "/member/searchid",
        element: <Suspense fallback ={Loading}><Findid/></Suspense>
    },
    {
        path: "/animal",
        element: <Suspense fallback ={Loading}><Animalinfo/></Suspense>
    } ,
    {
        path: "/member/mypage",
        element: <Suspense fallback ={Loading}><MyPage/></Suspense>
    },
    {
        path: "/board/list/read/:idx",
        element: <Suspense fallback ={Loading}><ReadContent/></Suspense>
    },
    {
        path: "/board/list/write",
        element: <Suspense fallback ={Loading}><WriteContent/></Suspense>
    },
    {
        path: "/board/list/edit/:idx",
        element: <Suspense fallback ={Loading}><EditContent/></Suspense>
    },
    {
        path: "/member/mypage/myedit",
        element: <Suspense fallback={Loading}><MyEdit/></Suspense>
    },
    {
        path: "/member/mypage/mycart",
        element: <Suspense fallback={Loading}><Favorite/></Suspense>
    },
    {
        path: "/recommend",
        element: <Suspense fallback ={Loading}><Recommend/></Suspense>
    }
])

export default root;