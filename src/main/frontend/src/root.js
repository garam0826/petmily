import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import Mainpage from "./Mainpage";
const Loading = <div>Loading...</div>

/*
import Login from "./member/Login";
import WriteContent from "./board/WriteContent";
import EditContent from "./board/EditContent";
import ReadContent from "./board/ReadContent";

const Loading = <div>Loading...</div>
const Login1 = lazy(() => import("../src/member/Login"))
const SignUp = lazy(() => import("../src/member/Signup"))
const Memberinfo  = lazy(() => import("../src/member/no_redux/MemberInfo"))
const Memberresign= lazy(() => import("../src/member/no_redux/MemberResign"))
const Findid = lazy(() => import("../src/member/no_redux/FindId"))
*/
const Animalinfo= lazy(() => import("../src/animal/AnimalInfo"))
/*
const Mypage= lazy(() => import("../src/member/MyPage"))
const Board = lazy(() => import("../src/board/BoardList"))
*/
const root = createBrowserRouter([
    {
        path: "/main",
        element: <Suspense fallback ={Loading}><Mainpage/></Suspense>
    },/*,
    {
        path: "/member/login",
        element: <Suspense fallback ={Loading}><Login1/></Suspense>
    },
    {
        path: "/member/signup",
        element: <Suspense fallback ={Loading}><SignUp/></Suspense>
    },
    {
        path: "/board/list",
        element: <Suspense fallback ={Loading}><Board/></Suspense>
    },
    {
        path: "/member/mypage/myinfo",
        element: <Suspense fallback ={Loading}><Memberinfo/></Suspense>
    },
    {
        path: "/member/mypage/resign",
        element: <Suspense fallback ={Loading}><Memberresign/></Suspense>
    },
    {
        path: "/member/searchid",
        element: <Suspense fallback ={Loading}><Findid/></Suspense>
    },*/
    {
        path: "/animal",
        element: <Suspense fallback ={Loading}><Animalinfo/></Suspense>
    }/* ,
    {
        path: "/member/mypage",
        element: <Suspense fallback ={Loading}><Mypage/></Suspense>
    },
    {
        path: "/board/list/read",
        element: <Suspense fallback ={Loading}><ReadContent/></Suspense>
    },
    {
        path: "/board/list/write",
        element: <Suspense fallback ={Loading}><WriteContent/></Suspense>
    },
    {
        path: "/board/list/edit",
        element: <Suspense fallback ={Loading}><EditContent/></Suspense>
    }*/
])

export default root;