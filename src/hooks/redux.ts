import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../state/store";
import { RootState } from "../state/reducers/index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;
