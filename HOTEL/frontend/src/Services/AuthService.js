const AuthService = {
    login : user=>{
        return fetch('/user/login', {
            method : 'post',
            body: JSON.stringify(user),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
             else
                return { isAuthenticated : false,user:{},message:{msgBody: "Check your details!", msgError: true}}
        })          
    },
    register : users=>{
        console.log(JSON.stringify(users));
        return fetch('/user/register', {
            method : 'post',
            body: JSON.stringify(users),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
           .then(data => data);
    },
    logout : ()=>{
        return fetch('/user/logout')
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated : ()=>{
        return fetch('/user/authenticated')
                .then(res =>{
                    if(res.status !== 401)
                        return res.json().then(data =>{console.log(data); return data});
                    else
                        return { isAuthenticated : false, user :{_id : "",username : "", email : "", phone : ""}}
                })
    }
}

export default AuthService;