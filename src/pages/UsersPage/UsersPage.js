import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import {fetchUsers} from "../../store/actions/users";
import Grid from "@material-ui/core/Grid";
import UserCard from "../../components/UserCard";
import {CircularProgress} from "@material-ui/core";


function UsersPage({getUsers, users, load}) {

  const history = useHistory()

  useEffect(() => {
    getUsers()
  }, [])

  const usersRenderer = users.map((el) => (
    <UserCard
      name={el.name}
      key={el.name}
      username={el.username}
      email={el.email}
      click={() => (history.push(`/${el.id}/posts`))}
      button={true}
    />))

  return (
    <div className="container">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >

        {
          !load
            ?
            usersRenderer
            :
            <CircularProgress/>
        }

      </Grid>
    </div>
  );

}

const mapStateToProps = (state) => ({
  users: state.users.list,
  load: state.users.loading
})

export default connect(mapStateToProps, {
  getUsers: fetchUsers
})(UsersPage);