interface UserType {
    user_id: string,
    user_pw: string,
    nm: string
} 
const UserData= [
    {
        "user_id" : 'kdy',
        "user_pw" : "$2b$10$u2znlOszkmQCqcJn0.pSzeDt0mSH0O0hp23TFxw487cebmO5oAV7O",
        "nm" : "Kim Do Young"
    },
    {
        "user_id" : 'hong',
        "user_pw" : "1234",
        "nm" : "Hong gil dong"
    },
    {
        "user_id" : 'go',
        "user_pw" : "1234",
        "nm" : "Go gil dong"
    }
];
export  { UserData, UserType }
