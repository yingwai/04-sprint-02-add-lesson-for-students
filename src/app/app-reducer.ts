export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'loading' as RequestStatusType,
  error: null as string | null,
}

export enum STATUS_CODE {
  idle = 'idle',
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed' 
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case "SET-APP-STATUS":
      return {...state, status: action.status}
    case "SET-APP-ERROR":
      return {...state, error: action.error}
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAppStatusAC>
  | ReturnType<typeof setAppErrorAC>

export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'SET-APP-STATUS', status }) as const
export const setAppErrorAC = (error: null | string) => ({ type: 'SET-APP-ERROR', error }) as const