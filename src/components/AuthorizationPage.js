import React from 'react';
import { Route, Redirect} from "react-router-dom";

class AuthorizationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loading: true
        }
    }
    loginFunc() {
        let data = {
            login: this.state.username,
            pass: this.state.password
        };
        fetch('/api/user', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res);
                if (res.check === "exist" ) {
                    localStorage.setItem('check', true);
                } else {

                }
                this.setState({
                    loading: false,
                    check: false,
                })
            });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('user- ', this.state.username, 'pass- ', this.state.password);
        localStorage.setItem("user", JSON.stringify(this.state.username));
        this.loginFunc();
    };
    handleChange = (e) => {
      let name = e.target.name;
      this.setState({
          [name]: e.target.value
      })
    };
    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <div>
                <Route {...rest} render={(matchProps) => {
                    if (this.state.loading) {
                        return <div></div>
                    }
                    if (this.state.check) {
                        return <Component />
                    } else {
                        return <Redirect to="./" />
                    }
                }} />

                <div className="wrapper">
                    <div className="registerForm">
                        <div className="header">
                            <div className="logo"></div>
                            <div className="loginLinks">
                                <a href="#0">Register</a>
                                <a href="#0">Login</a>
                            </div>
                        </div>
                        <div className="wrapForm">
                            <form onSubmit={this.handleSubmit}>
                                <p>Welcome <span className="colorWord">back!</span></p>
                                <span className="far fa-user fa-2x">
                               <input name='username' value={this.state.username} onChange={this.handleChange} type="text" placeholder="Username" required />
                           </span>
                                <span className="fas fa-lock fa-2x">
                               <input name='password' value={this.state.password} onChange={this.handleChange} type="text" placeholder="Password" maxLength="12" required />
                           </span>
                                <button >Enter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorizationPage;