import { createContext, PropsWithChildren, useContext, useState } from "react";


interface User {
    id: UUID
    name: string
    email: string
    profileImage?: string
}

interface Authentication {
    success: boolean
    user: User | undefined
}

interface ContextValue {
    authorization: Authentication,
    setAuthorization: React.Dispatch<React.SetStateAction<Authentication>>
}

const intitialState: Authentication = {
    success: false,
    user: undefined,
}

const AuthContext = createContext<ContextValue | undefined>(undefined)

export const AuthContextProvider = (props: PropsWithChildren) => {
    const [authorization, setAuthorization] = useState<Authentication>(intitialState)

    return (
        <AuthContext.Provider value={{ authorization, setAuthorization }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within an AuthProvider")
    return context
}