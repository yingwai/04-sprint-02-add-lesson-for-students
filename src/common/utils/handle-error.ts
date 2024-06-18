import { Dispatch } from "redux"
import { setAppErrorAC, setAppStatusAC, STATUS_CODE } from "../../app/app-reducer"
import { AxiosError } from "axios"

type ServerError = {
    errorMessages: Array<{ field: string, message: string }>
}

// generic function
export const handleServerAppError = <T>(dispatch: Dispatch, error: AxiosError<ServerError>) => {
    if (error.response) {
        dispatch(setAppErrorAC(error.response.data.errorMessages[0].message))
    } else {
        dispatch(setAppErrorAC(error.message))
    }
    dispatch(setAppStatusAC(STATUS_CODE.failed))
}

export const handleServerNetworkError = (dispatch: Dispatch, error: Error) => {
    dispatch(setAppErrorAC(error.message))
    dispatch(setAppStatusAC(STATUS_CODE.failed))
}