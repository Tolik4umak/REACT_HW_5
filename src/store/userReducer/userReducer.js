const users = [
    {
        id:1,
        name: 'Joey Tribbiani',
        link: 'https://www.m24.ru/b/d/nBkSUhL2jFMlmsmwPqzZvc62gYT28pj20yPFnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=YqvNaJhwILkxGCBbGJRu9Q.jpg',
        gender: 'm'
    } , {
        id:2,
        name: 'Chandler Bing',
        link: 'https://stickerswiki.ams3.cdn.digitaloceanspaces.com/Firends_esm3_by_demybot/2000198.512.webp',
        gender: 'm'
    } ,    
    {
        id:3,
        name: 'Ross Geller',
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm1jvtvTvtlEy216FGqSyTbse6bLxVuc3fT4f85-JPsgEzHvg5m6zqOd6E-YK-rjj_DI&usqp=CAU',
        gender: 'm'
    } , 
    {
        id:4,
        name: 'Phoebe Buffay',
        link: 'https://i.pinimg.com/originals/6f/1a/7d/6f1a7d7e5bd53955c167962a95c8004f.jpg',
        gender: 'f'
    } ,
    {
        id:5,
        name: 'Monica Geller',
        link: 'https://cdn.fame10.com/eyJidWNrZXQiOiJwdWItc3RvcmFnZSIsImtleSI6ImZhbWUxMC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMi9Nb25pY2EtRnJpZW5kcy5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjgwfSwicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjowLCJnIjowLCJiIjowLCJhbHBoYSI6MX0sIndpZHRoIjoxMjAwLCJoZWlnaHQiOjYzMCwicG9zaXRpb24iOiJ0b3AifX19',
        gender: 'f'
    } ,
    {
        id:6,
        name: 'Rachel Green',
        link: 'https://64.media.tumblr.com/92b7f03283d7dac63b852156409f68c1/a5d6343aa46c03bb-09/s400x600/e8a5b23355d9df14283b60bb4365f5e9dbd64189.png',
        gender: 'f'
    }  
]
const ADDUSER = 'ADDUSER';
const DELUSER = 'DELUSER';

export function addAction(user){
    return {
        type: ADDUSER,
        payload: user
    } 
}

export function delAction(id){
    return {
        type: DELUSER,
        payload: id
    } 
}

export const userReducer = (state = users, action) => {
    if(action.type === ADDUSER){
        return [...state, action.payload]
    }else if(action.type === DELUSER){
        const newState = state.filter(({id}) => id !== action.payload)
        return newState
    }else{
        return state
    }

}