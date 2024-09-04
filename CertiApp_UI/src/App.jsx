import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import IssueCertificate from "./components/IssueCertificate"
import FormSubmitted from "./components/FormSubmitted"
import View from "./components/View"
import Home from "./components/Home"
import NotFoundPage from "./pages/NotFoundPage"


function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(

    <>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/issue" element={<IssueCertificate/>} />
            <Route path="/thank-you" element={<FormSubmitted/>} />
            <Route path="/certificate/:id" element={<View />} />
            <Route path="*" element={<NotFoundPage/>} />

      </Route>
    </>
  )
)
return (
  <>

      <RouterProvider router={router}/>

  </>
)
}

export default App
