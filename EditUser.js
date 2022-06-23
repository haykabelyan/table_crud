import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

function EditUser() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const navigate = useNavigate();
    const {id} = useParams();



    useEffect(()=>{
        loadUser();
    },[]);


    const loadUser = async()=>{
        const result = await axios.get('http://localhost:3000/data/'+id);
        setUser(result.data);
    }

    const onInputChange = e => {
        setUser({...user, [e.target.name] : e.target.value });
    }


    const onSubmit = async e=>{
        e.preventDefault();
        console.log(user);
        await axios.put('http://localhost:3000/data/'+id, user);
        navigate('/');
    }

    return (
        <div className='EditUser'>
           <button onClick={()=>navigate(-1)}>GO BACK</button> 
            <h2>Edit User</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    Edit NAme : 
                    <input
                        type="text"
                        placeholder='Enter Your Name'
                        value={user.name} 
                        name="name"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    Edit UserNAme : 
                    <input
                        type="text"
                        placeholder='Enter Your UserName'
                        value={user.username} 
                        name="username"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    Edit Email : 
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                        value={user.email} 
                        name="email"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    Edit Phone : 
                    <input
                        type="text"
                        placeholder='Enter Your Phone'
                        value={user.phone} 
                        name="phone"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    Edit WebSite : 
                    <input
                        type="text"
                        placeholder='Enter Your WebSite'
                        value={user.website} 
                        name="website"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <button>Update User</button>
            </form>
        </div>
    )
}

export default EditUser
