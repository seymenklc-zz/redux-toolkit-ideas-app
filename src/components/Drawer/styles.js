import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles({
    drawer: {
        width: drawerWidth
    },
    iconButton: {
        marginLeft: 180,
        borderRadius: 5
    },
    options: {
        marginLeft: 15,
    },
    option: {
        padding: 10,
        borderRadius: 5
    },
    icon: {
        marginRight: 10
    }
});