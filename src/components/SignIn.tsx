import Link from 'next/link';
import {
    Button,
    TextField,
    Typography
} from '@material-ui/core';

const handleSignIn = event => {
};

const handleChange = event => {
};

const SignIn = (props) => {
    const classes = props.useStyles;
    return (
        <div className={classes.content}>
            <div className={classes.contentBody}>
                <form
                    className={classes.form}
                    onSubmit={handleSignIn}
                >
                    <Typography
                        className={classes.title}
                        variant="h2"
                    >
                        Portal Login
                </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                    >
                        Use your email to login
                </Typography>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        label="Email address"
                        name="email"
                        onChange={handleChange}
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textField}
                        fullWidth
                        label="Password"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        variant="outlined"
                    />
                    <Button
                        className={classes.signUpButton}
                        color="primary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Sign in
                </Button>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        Don't have an account?{' '}
                        <Link href="#">
                            <a>Sign Up</a>
                </Link>
                    </Typography>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
