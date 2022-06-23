import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';



const Home = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        loadUsers();
    }, []);


    const loadUsers = async()=>{
        const result = await axios.get('http://localhost:3000/data');
        setUsers(result.data);
    }

    const deleteUser =  async id=>{
        await axios.delete('http://localhost:3000/data/'+id);
        loadUsers();
    }


    return (
        <div>
            <button onClick={()=>navigate('users/add')}>+</button>
         <table style={ {'width': '100%'} }>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(el=>(
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.username}</td>
                        <td>{el.email}</td>
                        <td>
                            <Link to={'/users/'+el.id}>view</Link>
                            <Link to={'/users/edit/'+el.id}>edit</Link>
                            <button onClick={()=> deleteUser(el.id)}>delete</button>
                        </td>
                    </tr>
                    ))
                }
               
            </tbody>
        </table>
        </div>
    )
}

export default Home;
