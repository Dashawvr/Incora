import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import {deletePosts, fetchPost, updatePosts} from "../../store/actions/posts";
import {fetchComments} from "../../store/actions/comments";
import PostCard from "../../components/PostCard";
import Grid from "@material-ui/core/Grid";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import UserCard from "../../components/UserCard";
import CreateUpdateDialog from "../../components/CreateUpdateDialog";

function SinglePostPage({post, getCommentsForPost, updateOnePost, deleteOnePost, singlePost, load, comments}) {

  const history = useHistory()

  const path = history.location.pathname

  const userId = +/\d+/.exec(history.location.pathname)

  const id = Number(path.split('').reverse().join()[0])

  const [edit, OpenEdit] =useState(false)

  const [body, setBody] = useState('')

  const [title, setTitle] = useState('')

  const bodyHelper = (e) => {
    setBody(e.target.value)
  }

  const titleHelper = (e) => {
    setTitle(e.target.value)
  }

  const handleClose = () =>{
    OpenEdit(false)
  }

  const handleOpen = () =>{
    OpenEdit(true)
  }

  const updateHelper = () => {
    const post = {
      userId: userId,
      id:id,
      title,
      body
    }

    updateOnePost(id, post)
  }

  useEffect(()=> {
    post(id)
    getCommentsForPost(id)
  },[])

  return (
    <div className="container">
      <CreateUpdateDialog
        body={body}
        title={title}
        variant={'edit'}
        handleClose={handleClose}
        helper={updateHelper}
        open={edit}
        setBody={bodyHelper}
        setTitle={titleHelper}/>
      <IconButton onClick={handleOpen} className="positionAbs">
        <EditIcon/>
      </IconButton>
      <IconButton onClick={() => (deleteOnePost(id))} className="positionAbs">
        <DeleteIcon/>
      </IconButton>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {
          singlePost.title?
            <PostCard
              title={singlePost.title}
              click={()=>('')}
              button={false}
              body={singlePost.body}
            />
            :
            ''

        }

      </Grid>

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {comments.map((el) => (
          <UserCard
            email={el.email}
            key={el.name}
            click={()=>('')}
            name={el.name}
            button={false}
            username={el.body}
          />
        ))}
      </Grid>

    </div>
  );

}

const mapStateToProps = (state) => ({
  singlePost: state.posts.single,
  load: state.posts.loading,
  comments: state.comments.list
})

export default connect(mapStateToProps, {
  post: fetchPost,
  getCommentsForPost: fetchComments,
  updateOnePost: updatePosts,
  deleteOnePost: deletePosts
})(SinglePostPage);