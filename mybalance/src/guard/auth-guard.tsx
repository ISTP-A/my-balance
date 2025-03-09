import { PropsWithChildren } from "react"
import { useAuth } from "../contexts/auth-context"
import { Navigate } from "react-router-dom"

export const AuthGuard = (props: PropsWithChildren) => {
    const { authorization } = useAuth()

    if (!authorization.success) {
        return <Navigate to='/login' replace />
    }

    return (
        <>{props.children}</>
    )
}