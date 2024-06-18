import { AppRootState } from "./store";

export const statusApp = (state: AppRootState) => state.app.status
export const errorApp = (state: AppRootState) => state.app.error