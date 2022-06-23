import axios from 'axios';
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';


const User = () => {

    const [user, setUser] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(()=>{
        loadUser();
    }, []);

    const loadUser = async ()=>{
        const result = await axios.get('http://localhost:3000/data/'+ id);
        setUser(result.data);
    }


    return (
        <div className='User'>
            <button onClick={()=> navigate(-1)}>GO HOME</button>
            <h2>name: {user.name}</h2>
            <ul>
                <li>User Name: {user.username}</li>
                <li>EMail: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>WebSite: {user.website}</li>
            </ul>
        </div>
    )
}

export default User
