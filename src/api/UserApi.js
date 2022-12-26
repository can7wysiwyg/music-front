import { useEffect, useState } from "react"
import axios from "axios"

function UserApi() {
    const [isLogged, setIsLogged] = useState(false)

    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    
    


    


    useEffect(() => {

        if(token) {
            const getUser = async() => {
            try{
             await axios.get('https://music-back.onrender.com/auth/user', {
                    headers: {Authorization: `Bearer ${token}`}
                })
                setIsLogged(true)
            
        

        
        }

            catch(err) {
                console.log(err);
            }
            }


            getUser()

            

        }


    }, [token])


    
    return{

isLogged: [isLogged, setIsLogged],

    
    
    
    }
}

export default UserApi