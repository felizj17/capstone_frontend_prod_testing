import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Card, CardContent, Button, TextareaAutosize, TextField} from '@mui/material'
import profile_pic from '../../assets/blank_profile.jpeg'
import './profile.css'
const API = import.meta.env.VITE_REACT_APP_API_URL

export default function ProfileEdit({user}) {
  const {username} = useParams()
  const navigate = useNavigate()
  const [updatedUser, setUpdatedUser] = useState(user)

  const saveChanges = () => {}
  const cancelChanges = () => {}
  //   useEffect(() => {
  //     const getPosts = async () => {
  //       const res = await axios.get(`${API}/posts/${user.user_id}`)
  //       const data = await res.json()
  //       console.log(data)
  //       setPosts(data)
  //     }
  //     const getTools = async () => {
  //       const res = await axios.get(`${API}/tools/${user.user_id}`)
  //       const data = await res.json()
  //       setTools(data)
  //     }
  //     getPosts()
  //     getTools()
  //   }, [])
  return (
    <div>
      <Card
        variant='outlined'
        sx={{
          width: '90vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
        }}
      >
        <CardContent>
          <div className='profile-card'>
            <img
              className='profile-img'
              src={profile_pic}
              style={{borderRadius: '50%', width: '200px', height: '200px'}}
            />
            <aside className='profile-desc-edit'>
              <h1>{user.username}</h1>
                <TextField value={updatedUser.city_state} sx={{marginBottom:4}}/>
              <TextareaAutosize value={updatedUser.aboutme} sx={{width:'100%'}}/>
              {/* <p>{user.aboutme}</p> */}
            </aside>
          </div>
          {user.username === username && (
            <div>
              <Button onClick={saveChanges} variant='contained' color='primary'>
                Save
              </Button>
              <Button onClick={cancelChanges} variant='contained' color='error'>
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      {/* <div>
        <Card className='profile-posts'>
          <CardContent>
            {posts.length < 1 ? (
              <div>
                <p>No Post yet </p>
              </div>
            ) : (
              <div>
                {posts.map(post => (
                  <Card>
                    <CardContent>
                      <img src={post.thumbnail} alt='thumbnail' />
                      <p>{post.title}</p>
                      <p>{post.created_at}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        <Card className='profile-tools'>
          <CardContent>
            {tools.length < 1 ? (
              <div>
                <p>No Tools yet </p>
              </div>
            ) : (
              <div>
                {tools.map(tool => (
                  <Card>
                    <CardContent>
                      <img src={tool.thumbnail} alt='thumbnail' />
                      <p>{tool.title}</p>
                      <p>{tool.created_at}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div> */}
    </div>
  )
}
