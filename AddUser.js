import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const navigate = useNavigate();

    const onInputChange = e => {
        setUser({...user, [e.target.name] : e.target.value });
    }

    const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3000/data', user);
        navigate('/');
    }


    return (
        <div>
            <h2>ADD USER</h2>
             <form onSubmit={e => onSubmit(e)}>
                <div>
                    NAme : 
                    <input
                        type="text"
                        placeholder='Enter Your Name'
                        value={user.name} 
                        name="name"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    UserNAme : 
                    <input
                        type="text"
                        placeholder='Enter Your UserName'
                        value={user.username} 
                        name="username"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    Email : 
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                        value={user.email} 
                        name="email"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    Phone : 
                    <input
                        type="text"
                        placeholder='Enter Your Phone'
                        value={user.phone} 
                        name="phone"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <div>
                    WebSite : 
                    <input
                        type="text"
                        placeholder='Enter Your WebSite'
                        value={user.website} 
                        name="website"
                        onChange={e=> onInputChange(e)}
                    />
                </div>
                <button>Add User</button>
            </form>
        </div>
    )
}

export default AddUser
