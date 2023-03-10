import { type } from "os";
import { ReactNode } from "react";

interface IValues{
    user: IUser;
    getUser:(user: IUser) => void;
    logout: () => void;
}

interface IUser{
    login: string;
    balance: number;
    wallet: string;
    role: number;
    inWhiteList: boolean;
    seedToken: number;
    privToken: number;
    publToken: number;
}

interface IProps{
    children: ReactNode;
}
export type{
    IValues,
    IUser,
    IProps
}