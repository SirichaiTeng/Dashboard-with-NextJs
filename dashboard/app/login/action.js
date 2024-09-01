'use server'

export async function login(prevState,fromData){
    const user = fromData.get('email')
    const password = fromData.get('password')
    console.log(user,password);
    if(user !== '1234@hot.com' && password !== '1234'){
        return {message : 'Login Fail'}
    }else{
        return { message : 'Login Success!'}
    }
    
}