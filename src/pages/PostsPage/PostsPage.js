import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {createPosts, fetchPosts} from "../../store/actions/posts";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import PostCard from "../../components/PostCard";
import {CircularProgress} from "@material-ui/core";
import CreateUpdateDialog from "../../components/CreateUpdateDialog";

function PostsPage({getPosts, posts, load, create}) {

  const history = useHistory()

  const id = +/\d+/.exec(history.location.pathname)

  const [open, setOpen] = useState(false)

  const [body, setBody] = useState('')

  const [title, setTitle] = useState('')

  const bodyHelper = (e) => {
    setBody(e.target.value)
  }

  const titleHelper = (e) => {
    setTitle(e.target.value)
  }

  const handleClose = () =>{
    setOpen(false)
  }

  const handleOpen = () =>{
    setOpen(true)
  }

  const createHelper = () => {
    const post = {
      userId: id,
      title,
      body
    }

    create(id,post)
  }

  useEffect(() => (
    getPosts(id)
  ), [])

  const postsRenderer = posts.map((el) => (
    <PostCard
      body={el.body}
      key={el.id}
      button={true}
      click={() => (history.push(`/${id}/posts/${el.id}`))}
      title={el.title}
    />))

  return (
    <div className="container">
      <IconButton onClick={handleOpen} className="positionAbs">
        <AddIcon/>
      </IconButton>
      <CreateUpdateDialog
        open={open}
        body={body}
        title={title}
        setBody={bodyHelper}
        setTitle={titleHelper}
        variant={'create'}
        handleClose={handleClose}
        id={id}
        helper={createHelper}
      />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >

        {
          !load
            ?
            postsRenderer
            :
            <CircularProgress/>
        }

      </Grid>
    </div>
  );

}

const mapStateToProps = (state) => ({
  posts: state.posts.list,
  load: state.posts.loading
})


export default connect(mapStateToProps, {
  getPosts: fetchPosts,
  create: createPosts
})(PostsPage);