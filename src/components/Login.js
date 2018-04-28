import React,{Component} from 'react';
import {loginCheck} from '../actions/loginaction';
import {connect} from 'react-redux';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
        };
    }
    handleUpdateInput(e){
        this.setState({[e.target.name]:e.target.value});
    }
    loginCheck(e){
        e.preventDefault();
        if(this.state.email.trim()!='' && this.state.password.trim() !=''){
            this.props.loginCheck(this.state);
        }
    }
    render() {
        return (
            <div className="class-name">
            <div className="row">
                                <div className="col-md-4 col-md-offset-4">
                                    <div className="login-panel panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title"><i className="fa fa-lock" aria-hidden="true"></i> Please Sign In</h3>
                                        </div>
                                        <div className="panel-body">
                                            <form onSubmit={this.loginCheck.bind(this)}>
                                                <fieldset>
                                                    <div className="form-group">
                                                        <input className="form-control" 
                                                        onChange={this.handleUpdateInput.bind(this)} placeholder="E-mail" type="email" name="email" 
                                                         required="required" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input className="form-control" 
                                                        onChange={this.handleUpdateInput.bind(this)} placeholder="Password" name="password"  
                                                        type="password" required="required" />
                                                    </div>
                                                    
                                                    <button type="submit"
                                                            className="btn btn-lg btn-primary btn-block" id="login">
                                                        <span id="button"><i className="fa fa-hand-pointer-o" aria-hidden="true"></i> Login</span>
                                                    </button>

                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    
})

function  mapDispatchToProps(dispatch)  { 
    return {
        loginCheck(send_data){
            dispatch(loginCheck(send_data))
        }
    }
 };


export default connect(mapStateToProps, mapDispatchToProps)(Login)