import Link from 'next/link';
import {
    Button,
    TextField,
    Typography
} from '@material-ui/core';

const handleSignUp = event => {
};

const handleChange = event => {
};

const SignUp = (props) => {
    const classes = props.useStyles;
    return (
        <div className={classes.content}>
            <div className={classes.contentBody}>
                <form
                    className={classes.form}
                    onSubmit={handleSignUp}
                >
                    <Typography
                        className={classes.title}
                        variant="h2"
                    >
                        Create new account
                </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                    >
                        Use your email to create new account
                </Typography>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        label="First name"
                        name="firstName"
                        onChange={handleChange}
                        type="text"
                        // value={"#"}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textField}
                        fullWidth
                        label="Last name"
                        name="lastName"
                        onChange={handleChange}
                        type="text"
                        variant="outlined"
                    />
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
                    <div className={classes.policy}>
                        <Typography
                            className={classes.policyText}
                            color="textSecondary"
                            variant="body1"
                        >
                            I have read the Terms and Conditions
                  </Typography>
                    </div>
                    <Button
                        className={classes.signUpButton}
                        color="primary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Sign up now
                </Button>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        Have an account?{' '}
                        <Link href="#">
                            <a>Sign in</a>
                  </Link>
                    </Typography>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
