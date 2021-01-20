export type Login = {
    userEmail: string;
    userPwd: string;
}

export type Register = {
    userEmail: string;
    userName: string;
    userPwd: string;
}

export type UserInfo = {
    userEmail: string;
    userName: string;
}

export type LoginUserInfo = {
    userEmail: string;
    userName: string;
    lastLogin: Date;
}