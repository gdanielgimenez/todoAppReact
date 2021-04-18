import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core"
import {Delete} from '@material-ui/icons'
import useStyles from './Style'

const Todos=({todos,deleteTodo}) => {
  const classes = useStyles();
  const todosList = todos.length ?(
      todos.map(todo =>{
          return(
              <ListItem className={classes.listItem} key={todo.id}>
                 <ListItemText> <Typography variant="body1">{todo.content} </Typography></ListItemText>
                  <ListItemSecondaryAction>
                      <IconButton onClick={()=>{deleteTodo(todo.id)}}> <Delete color="secondary"/> </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
          )
      })
  ):(
      <Typography color="secondary" variant="overline">there's no todos left in the list </Typography>
  )

    return(
        <List>
            {todosList}
        </List>
    )
}
export default Todos;