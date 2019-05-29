import React ,{Component}from 'react'
import { Grid, Cell, TextField} from 'react-md'
import './userSign.css'

class UserSignin extends Component{
    constructor(){
        super()
        this.state={
            Signup:'',
            Signin:'none',
            SinginEmail:"",
            SinginPassword:"",
            SingupUser:"",
            SingupEmail:"",
            SingupPassword:"",
        }



        this.handleSignInChanges = this.handleSignInChanges.bind(this)
        this.handleSignUpChanges = this.handleSignUpChanges.bind(this)
        this.handleSinginEmail = this.handleSinginEmail.bind(this)
        this.handleSinginPassword = this.handleSinginPassword.bind(this)
        this.handleSingupEmail = this.handleSingupEmail.bind(this)
        this.handleSingupPassword = this.handleSingupPassword.bind(this)
        this.handleSingupUser = this.handleSingupUser.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleSignUP = this.handleSignUP.bind(this)
    }
    
    handleSignInChanges(){
        this.setState({
            Signin:'',
            Signup:'none',
            SinginEmail:"",
            SinginPassword:"",
            SingupUser:"",
            SingupEmail:"",
            SingupPassword:"",
        })
    }

    handleSignUpChanges(){
        this.setState({
            Signin:'none',
            Signup:'',
            SinginEmail:"",
            SinginPassword:"",
            SingupUser:"",
            SingupEmail:"",
            SingupPassword:"",
        })
    }

    handleSinginEmail(emailValue){
        this.setState({
            SinginEmail: emailValue
        })
    }

    handleSinginPassword(passwordValue){
        this.setState({
            SinginPassword: passwordValue
        })
    }

    handleSingupEmail(emailValue){
        this.setState({
            SingupEmail: emailValue
        })
    }

    handleSingupPassword(passwordValue){
        this.setState({
            SingupPassword : passwordValue
        })
    }

    handleSingupUser(userValue){
        this.setState({
            SingupUser: userValue
        })
    }


    handleSignIn(){
        this.email = this.state.SinginEmail
        this.password = this.state.SinginPassword
        if(this.email==="" || this.password===""){
            alert('You need to fill the input box to get SignIn')
        }else{
            this.props.handleSignIn(this.email,this.password)
            this.setState({
                SinginEmail:"",
                SinginPassword:"",
            })
        }
        
    }

    handleSignUP(){
        this.email = this.state.SingupEmail
        this.password = this.state.SingupPassword
        this.username = this.state.SingupUser
        if(this.email==="" || this.password===""|| this.username===""){
            alert('You need to fill the input box to get SignUp')
        }else{
            this.props.handleSignUP(this.username,this.email,this.password)
            this.setState({
                SingupEmail:"",
                SingupPassword:"",
                SingupUser:""
            })
        }
    }

    render(){
        const SignInBoxCss ={
            display: this.state.Signup
        }
        const SignUpBoxCss ={
            display: this.state.Signin
        }
        return(
            <div>
                <Grid className='UserSigninBox' style={SignInBoxCss}>
                    <Cell size={8}>
                        <div className='SingInArea'>
                            <h2>Sign in To The Site</h2>
                            <TextField
                                id="floating-center-title"
                                type="email"
                                label="Email"
                                lineDirection="center"
                                placeholder="Enter your email..."
                                value={this.state.SinginEmail}
                                onChange={this.handleSinginEmail}
                                className="md-cell md-cell--bottom inputfill"
                            />
                            <TextField
                                id="floating-password"
                                type="password"
                                label="Password"
                                lineDirection="center"
                                placeholder="Enter your password..."
                                value={this.state.SinginPassword}
                                onChange={this.handleSinginPassword}
                                className="md-cell md-cell--bottom inputfill"
                            />
                            <br/><br/>
                            <button className="Submitebutton" onClick={this.handleSignIn}>SIGN IN</button>
                        </div>
                    </Cell>
                    <Cell size={4} className='SingInTextArea' >
                            <div className="SignText">
                                <h3>Welcome back!</h3>
                                <br/>
                                <p>this website is just for testing so dont enter any of your persinal details please</p>
                                <br/>
                                <button className='SignUpbutton' onClick={this.handleSignInChanges}>SIGN UP</button>
                            </div>
                    </Cell>
                </Grid>

                <Grid className='UserSignUpBox' style={SignUpBoxCss}>
                    <Cell size={4} className='SingInTextArea' >
                            <div className="SignText">
                                <h3>Hello Friend!</h3>
                                <br/>
                                <p>this website doesn't secure any kind of password or persinal infos.It saves date in plane text so please don't integrate your persinal infos here</p>
                                <br/>
                                <button className='SignUpbutton' onClick={this.handleSignUpChanges}>SIGN IN</button>
                            </div>
                    </Cell>
                    <Cell size={8}>
                        <div className='SingInArea'>
                            <h2>Create Account</h2>
                            <TextField
                                id="floating-center-title"
                                label="UserName"
                                lineDirection="center"
                                placeholder="Enter your username..."
                                value={this.state.SingupUser}
                                onChange={this.handleSingupUser}
                                className="md-cell md-cell--bottom inputfill"
                            />
                            <TextField
                                id="floating-center-title"
                                type="email"
                                label="Email"
                                lineDirection="center"
                                placeholder="Enter your email..."
                                value={this.state.SingupEmail}
                                onChange={this.handleSingupEmail}
                                className="md-cell md-cell--bottom inputfill"
                            />
                            <TextField
                                id="floating-center-password"
                                type="password"
                                label="Password"
                                lineDirection="center"
                                placeholder="Enter your password..."
                                value={this.state.SingupPassword}
                                onChange={this.handleSingupPassword}
                                className="md-cell md-cell--bottom inputfill"
                            />
                            <br/><br/>
                            <button className="Submitebutton" onClick={this.handleSignUP}>SIGN UP</button>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default UserSignin 