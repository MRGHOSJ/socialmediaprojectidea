import React ,{Component}from 'react';
import UserSignin from './userinfo/userSignIn'
import Homepage from './dashboard/homepage'
import { Grid, Cell } from 'react-md';
import Loader from 'react-loader-spinner'
import firebaseApp from './firebase/config'
import firebase from 'firebase'
import './userinfo/userSign.css'

class App extends Component {

  constructor(){
    super()

    this.state= {
      loading:false,
      loggedin:false,
    }

    this.auth = firebaseApp.auth()
    this.data = firebaseApp.database().ref().child('loading');

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUP = this.handleSignUP.bind(this)
    this.handleLoggedIn = this.handleLoggedIn.bind(this)
    this.handleNotLoggedIn = this.handleNotLoggedIn.bind(this)
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        this.handleLoggedIn()
      }else{
        this.handleNotLoggedIn()
      }
    })
    
    
  }

  componentDidMount(){
    this.data.on('value' , snap => {
      this.setState({
        loading: snap.val()
      })
    })
  }

  handleLoggedIn(){
    this.setState({
      loggedin:true,
    })
  }

  handleNotLoggedIn(){
    this.setState({
      loggedin:false,
    })
  }


  handleSignIn(email,password){
    const promise = this.auth.signInWithEmailAndPassword(email,password)
    promise.catch(e => alert(e.message))
  }

  handleSignUP(username,email,password){ 
    const promise = this.auth.createUserWithEmailAndPassword(email,password)
    promise.catch(e => alert(e.message))
  }


  render(){
    const checkloggedin = this.state.loggedin
    {
      if(this.state.loading === false){
          //Loading screen start
        return(
          <div className="LoadingScrean">
            <Loader type="Bars" color="rgb(72, 219, 138)" height={100} width={100} />
          </div>
        );

      }else{
        //Loading screen done

        if(checkloggedin === true){

          //Homepage if logged in
          return(
          <div>
            <Homepage/>
          </div>
          );

        }else{
          //Sign in Sign up Page if not logged in
          return(
          <div>
              <Grid>
                <Cell size={1}><span></span></Cell>
                <Cell size={10}>
                  <div className='UserSignIn'>
                    <center>
                      <UserSignin handleSignIn={this.handleSignIn} handleSignUP={this.handleSignUP}/>
                    </center>
                  </div>   
                </Cell>
                <Cell size={1}><span></span></Cell>
              </Grid>
          </div>
          );

        }
      }
    }
  }
}

export default App;
