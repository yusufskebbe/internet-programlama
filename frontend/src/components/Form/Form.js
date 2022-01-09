import React, { useState, useEffect } from 'react'
import usestyles from './Styles'
import { TextField, Button, Typography, Paper, FilledInput } from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' })
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
  const classes = usestyles()
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      // post güncellmesi
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'}</Typography>
        <TextField name='creator' variant='outlined' label='Creator' value={postData.creator} onChange={(e) => { setPostData({ ...postData, creator: e.target.value }) }} />
        <TextField name='title' variant='outlined' label='Title' value={postData.title} onChange={(e) => { setPostData({ ...postData, title: e.target.value }) }} />
        <TextField name='message' variant='outlined' label='Message' value={postData.message} onChange={(e) => { setPostData({ ...postData, message: e.target.value }) }} />
        <TextField name='tags' variant='outlined' label='Tags' value={postData.tags} onChange={(e) => { setPostData({ ...postData, tags: e.target.value }) }} />
        <div className='classes.fileInput'>
          <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >submit</button>
        <button variant="contained" color="secondary" size="small" onClick={clear} >Clear</button>
      </form>
    </Paper>
  )
}

export default Form
