import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { UsersToolbar } from '../components/UsersToolbar';
import { UsersTable } from '../components/UsersTable';
import mockData from '../components/usersdata';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default function Peserta() {
    const classes = useStyles();
    const [users] = useState(mockData);

    return(
        <div className={classes.root}>
        <UsersToolbar />
            <div className={classes.content}>
                <UsersTable users={users} />
            </div>
        </div>
    )
}