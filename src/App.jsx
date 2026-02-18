import {Header, Footer} from "./components/index"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authsService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"



function App() {

  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authsService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch({userData})
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex  flex-wrap  bg-gray-400">
      <div className="w-full flex flex-col items-center justify-between">
          <Header />
          <main>
            <h1>Test</h1>
          </main>
          <Footer />
      </div>
    </div>
  ) : null
}

export default App
