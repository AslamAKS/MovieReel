import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function PlayContext(props) {
    console.log(props.id)
    const navigate=useNavigate()
    const [video, setVideo] = useState([])
  return (
    axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=41121d24676fc2903448d3e70a475871`).then((responce)=>{
            setVideo(responce.data.results[0])
            navigate('/playvideo',{state:video})
        }) 
  )
}

export default PlayContext