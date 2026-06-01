import { useEffect } from "react"
import { Routing } from "./router/Routing"
import { RootState, useAppDispatch,  } from "./app/store"
import { verifyAuth } from "./features/auth/authSlice";
import Loader from "./components/public/Loader";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useAppDispatch();
    const loading = useSelector((state :RootState) => state.authReducer.loading);

  useEffect(() => { 
    dispatch(verifyAuth())
  }, [])

  if (loading) return <Loader />

  return (
    <Routing />
  )
}

export default App
