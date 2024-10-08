import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
//import Mainpage from "./Mainpage";
//const Loading = <div>Loading...</div>

/*
import Login from "./member/Login";
import WriteContent from "./board/WriteContent";
import EditContent from "./board/EditContent";
import ReadContent from "./board/ReadContent";
import MyEdit from "./member/MyEdit";
*/

const Loading = (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
        <CircularProgress />
    </Box>
);

const MainPage = lazy(() => import("../src/Mainpage"))

const Login = lazy(() => import("../src/member/Login"))
const SignUp = lazy(() => import("../src/member/SignUp"))
const Findid = lazy(() => import("../src/member/Findid"))
const Findpw = lazy(() => import("../src/member/FindPW"))

const MyInfo  = lazy(() => import("../src/member/MyInfo"))
const MyPage= lazy(() => import("../src/member/MyPage"))
const MyEdit = lazy(() => import("../src/member/MyEdit"))

const Animalinfo= lazy(() => import("../src/animal/AnimalInfo"))
const Animaldetail= lazy(() => import("../src/animal/AnimalDetail"))

const Recommend  = lazy(() => import("../src/recommend/Recommend"))
const Qustion = lazy(() => import("../src/recommend/QuestionRecommend"))
const QustionResult = lazy(() => import("../src/recommend/QuestionResult"))

const BoardList = lazy(() => import("../src/board/BoardList"))
const EditContent = lazy(() => import("../src/board/EditContent"))
const ReadContent = lazy(() => import("../src/board/ReadContent"))
const WriteContent = lazy(() => import("../src/board/WriteContent"))

const Favorite = lazy(() => import("../src/member/Favorite"))
const Keyword = lazy(() => import("../src/recommend/Keyword"))
const KeywordResult = lazy(() => import("../src/recommend/KeywordResult"))
const ImageUpload = lazy(() => import("../src/member/ImageUpload"))
const MyContent = lazy(() => import("../src/member/MyContent"))
const ImageAnalyze = lazy(() => import("../src/member/ImageAnalyze"))

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
        path: "/member/searchpw",
        element: <Suspense fallback ={Loading}><Findpw/></Suspense>
    },
    {
        path: "/animal",
        element: <Suspense fallback ={Loading}><Animalinfo/></Suspense>
    },
    {
        path: "/animal/detail",
        element: <Suspense fallback ={Loading}><Animaldetail/></Suspense>
    },
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
    },
    {
        path: "/recommend/question",
        element: <Suspense fallback ={Loading}><Qustion/></Suspense>
    },
    {
        path: "/recommend/question/result",
        element: <Suspense fallback ={Loading}><QustionResult/></Suspense>
    },
    {
        path: "/recommend/keyword",
        element: <Suspense fallback ={Loading}><Keyword/></Suspense>
    },
    {
        path: "/recommend/keyword/result",
        element: <Suspense fallback ={Loading}><KeywordResult/></Suspense>
    },
    {
        path: "/member/mypage/imgUpload",
        element: <Suspense fallback ={Loading}><ImageUpload/></Suspense>
    },
    {
        path: "/member/mypage/mycontent",
        element: <Suspense fallback ={Loading}><MyContent/></Suspense>
    },
    {
        path: "/member/images/analyze",
        element: <Suspense fallback ={Loading}><ImageAnalyze/></Suspense>
    }
])

export default root;