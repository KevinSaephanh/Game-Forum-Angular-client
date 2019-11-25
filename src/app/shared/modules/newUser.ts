export interface NewUser {
    firstName : string,
    lastName : string,
    username : string,
    email : string,
    password : string,
    role : {
        id : number,
        roleName : string
    }
}