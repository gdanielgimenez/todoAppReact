import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem:{
        fontSize:'5',
        color:'black',
        padding:'18px',
        margin: '0px' ,
        border:'0.5px solid #e0e0e0',
        outline:'0.5',
        borderRadius:'10px'
    },
    button:{
        backgroundColor:'green',
        color:"white",
        '&:hover': {
            backgroundColor: "lightgreen",
        },
    }
}))

export default useStyles;