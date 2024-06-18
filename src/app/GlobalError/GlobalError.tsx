import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../store'
import { errorApp } from '../app-selectors'
import { setAppErrorAC } from '../app-reducer'

export const GlobalError = () => {
  const dispatch = useAppDispatch()
  const errorMessage = useAppSelector(errorApp)

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }

    return () => { dispatch(setAppErrorAC(null)) }
  }, [dispatch, errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
