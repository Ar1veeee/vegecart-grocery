import { useContext } from "react"
import { AppContext } from "../context/context"

export const useAppContext = () => {
    return useContext(AppContext)
}