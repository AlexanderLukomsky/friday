import { _instance } from "./instance"

export const authApi = {
    auth(data: authDataType) {
        return _instance.post<ResponseType<loginResponseType>>('auth/login', data)
    }
}

type ResponseType<D> = {
    data: D
}
type loginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
}


export type authDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}