import React,{Component} from 'react';

export default class Login extends Component {
    
    render() {
        return (
            <div className="class-name">
            <div className="row">
                                <div className="col-md-4 col-md-offset-4">
                                    <div className="login-panel panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Please Sign In</h3>
                                        </div>
                                        <div className="panel-body">
                                            <form role="form">
                                                <fieldset>
                                                    <div className="form-group">
                                                        <input className="form-control" placeholder="E-mail" type="email" ref="uname"  autofocus="" required="required" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input className="form-control" placeholder="Password" ref="psw"  type="password" value="" required="required" />
                                                    </div>
                                                    <div className="checkbox">
                                                        <label> <input name="remember" type="checkbox"
                                                                       value="Remember Me" />Remember Me
                                                        </label>
                                                    </div>
                                                    <button type="button"
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
