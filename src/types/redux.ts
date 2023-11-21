import { setupStore } from "../store"
import { rootReducer } from "../store/reducers"

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']