import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC, STATUS_CODE } from '../../app/app-reducer.ts'
import { AxiosError, isAxiosError } from 'axios'
import { handleServerAppError, handleServerNetworkError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
	try {
		const res = await decksAPI.fetchDecks()
		dispatch(setDecksAC(res.data.items))
		dispatch(setAppStatusAC(STATUS_CODE.succeeded))
	} catch (error) {
		dispatch(setAppStatusAC(STATUS_CODE.failed))
	}
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
	return decksAPI.addDeck(name).then((res) => {
		dispatch(addDeckAC(res.data))
	})
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
	return decksAPI.deleteDeck(id).then((res) => {
		dispatch(deleteDeckAC(res.data.id))
	})
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
	try {
		const res = await decksAPI.updateDeck(params)
		dispatch(updateDeckAC(res.data))
	} catch (e) {
		if (isAxiosError(e)) {
			handleServerAppError(dispatch, e)
			// console.log(e.response ? e.response.data.errorMessages[0].message : e.message);
		} else {
			handleServerNetworkError(dispatch, (e as Error))
			// console.log((e as Error).message);
		}
	}
}