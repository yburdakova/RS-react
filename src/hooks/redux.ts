import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch } from "../types/redux";
import { RootState } from "../store/reducers";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;