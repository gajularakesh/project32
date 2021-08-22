import React ,{ useState,useEffect } from 'react'
import axios from'axios'

function Fetch2() {

const[posts,setPosts] = useState([])
const[search,setsearch] = useState('')
const[work,setWork]=useState(posts);
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{console.log(res)
    setPosts(res.data)})
    .catch(err=>{
        console.log(err)});
    },[])
 
    const handleChange = value =>{
        setsearch(value);
        filterData(value);
    }
    const filterData = value=>{
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            setWork(posts);
        }
        else
        {
            const filteredData=posts.filter(item=>{
            return Object.keys(item).some(key =>{
                return item[key].toString().toLowerCase().includes(lowerCaseValue); 
            })    
            });
            setWork(filteredData)
        }
    }
    return (
        <div>
              <input
             type="text"
             placeholder="Hotels..."
             value={search}
             onChange={e=>handleChange(e.target.value)}
            />
            <ul>{
                work.map(post=><li key={post.id}>
                      <b>ID:</b>{post.id}<br/>
                    <b>TITLE:</b>{post.title}<br/>
                    <b>Body:</b>{post.body}<br/>
                    <br/><br/><br/>
                    </li>)
            }
            </ul>
            {posts.length===0 && <h1> No Records Found</h1> }
        </div>
    )
}

export default Fetch2
