import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBModal, MDBModalBody, MDBModalFooter } from "mdbreact";
import './message.css';


class FormsPage extends Component {
    state = {
        email : '' , 
        password : '' , 
        modal : true , 
        hide : true,
        spinner : false,
        emailValid : false,
        passwordValid : false,
        formClassName : 'grey-text needs-validation'
      };

      submitHandler = event => {
        event.preventDefault();
        this.setState ({
          spinner : true
        })
      };
    
      changeHandler = event => {
        console.log(event);
        let passwordPattern = ".{6,10}"
        if (event.target.name === 'email' ) {
          let emailValid = event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          if (emailValid === null){
            event.target.className = "form-control is-invalid was-validated";
          
            this.setState({
              emailValid : false ,
              formClassName : 'grey-text needs-validation was-validated'
            }); 
          } else {
            this.setState({
              emailValid : true
            });
            event.target.className = "form-control is-valid";
            
          }
        }  else {
          let passwordValid = event.target.value.match(passwordPattern);
          if (passwordValid === null){
            event.target.className = "form-control is-invalid";
            this.setState({
              passwordValid : false
            });
          } else {
            this.setState({
              passwordValid : true
            });
            event.target.className = "form-control is-valid";
          }
        }     
        this.setState({ [event.target.name]: event.target.value });
      };
      ValidateForm = () => {
        return this.state.emailValid && this.state.passwordValid;
    }

    ShowPassword = () => {
      this.setState ( {
       hide : !this.state.hide
      })
    }


render() {

return (
<MDBContainer className="mt-5">

<MDBRow>
<MDBCol size="12" className=" mb-5">

<MDBModal
isOpen={this.state.modal}
className="cascading-modal" >
<div className="modal-header primary-color white-text">
<h4 className="title">

<svg version="1.1" id="Layer_1" x="0px" y="0px"
viewBox="0 0 306.5 43.4" >

<g>
<path className="st0" d="M36.3,38.9l-0.7-0.6c0.1-0.2,0.2-0.4,0.2-0.6c0-0.9-3-2.7-4.9-4.1c-3.1,1.6-6.8,2.5-10.8,2.5C9,36,0,29.7,0,18
S9,0,20.1,0s20.1,6.4,20.1,18c0,5.2-1.8,9.3-4.8,12.3c2.7,2,3.7,2.9,4.2,2.9c0.4,0,0.6-0.1,0.9-0.3l0.7,0.4L36.3,38.9z M6.8,18
c0,8,5.9,12.3,13.3,12.3c1.8,0,3.5-0.2,5.1-0.8c-2.3-1.7-4.1-2.9-6.5-2.9c-1.6,0-1.9,0.6-2.6,0.6c-0.2,0-0.3-0.2-0.3-0.4
c0-1.2,2-3.3,6-3.3c2.8,0,5,0.7,8.4,3.1c2-2,3.3-4.9,3.3-8.6c0-8-5.9-12.3-13.3-12.3C12.8,5.7,6.8,10,6.8,18z"/>
<path className="st0" d="M48.2,24.9c0,4.7,1.8,6.4,8.9,6.4c7.1,0,8.9-1.7,8.9-6.4V8.6c0-0.9-0.2-1.2-1.1-1.2V6.8h7.9v0.6
c-0.9,0-1.1,0.3-1.1,1.2v17.3c0,7.6-5.4,10.1-14.5,10.1c-9.1,0-14.5-2.5-14.5-10.1V8.6c0-0.9-0.2-1.2-1.1-1.2V6.8h7.9v0.6
c-0.9,0-1.1,0.3-1.1,1.2V24.9z"/>
<path className="st0" d="M107.3,21.2c0,9.5-7.3,14.8-16.5,14.8s-16.5-5.2-16.5-14.8c0-9.5,7.3-14.8,16.5-14.8S107.3,11.6,107.3,21.2z
M80,21.2c0,6.6,4.9,10.1,10.9,10.1s10.9-3.5,10.9-10.1c0-6.6-4.9-10.1-10.9-10.1S80,14.6,80,21.2z"/>
<path className="st0" d="M110,8.6c0-0.9-0.2-1.2-1.1-1.2V6.8h17.4c10,0,14.3,5.7,14.3,14.4c0,9.5-5.3,14.4-13.4,14.4h-18.3V35
c0.9,0,1.1-0.3,1.1-1.2V8.6z M115.6,30.9h11.6c4.9,0,7.8-2.5,7.8-9.7c0-7.7-3.9-9.7-9.2-9.7h-10.3V30.9z"/>
<path className="st0" d="M143.7,8.6c0-0.9-0.2-1.2-1.1-1.2V6.8H160c10,0,14.3,5.7,14.3,14.4c0,9.5-5.3,14.4-13.4,14.4h-18.3V35
c0.9,0,1.1-0.3,1.1-1.2V8.6z M149.3,30.9h11.6c4.9,0,7.8-2.5,7.8-9.7c0-7.7-3.9-9.7-9.2-9.7h-10.3V30.9z"/>
</g>
<g>
<path className="st1" d="M219.5,6.3L218.9,9h-14.4l-2.2,9.8h10.2l-0.6,2.8h-10.2l-2.5,11.2h15.2l-0.6,2.8h-18.4l6.5-29.4H219.5z"/>
<path className="st1" d="M248.4,35.6l0.6-2.8h-0.1c-2.1,1.9-4.6,3.3-7,3.3c-3.1,0-5.7-1.6-4.7-6.2l3.4-15.4h2.9l-3.4,15.3
c-0.6,2.8,0.5,3.7,2.6,3.7c2.2,0,5.1-1.8,6.8-3.2l3.5-15.8h2.9l-4.7,21.2H248.4z"/>
<path className="st1" d="M260.8,14.5h2.9L259,35.6h-2.9L260.8,14.5z M265.6,5.9l-0.8,3.5h-2.9l0.8-3.5H265.6z"/>
<path className="st1" d="M269,14.5l1.5-7h2.9l-1.5,7h4.9l-0.6,2.5h-4.9l-3.3,15.1c-0.2,1,0.4,1.5,2.1,1.5c1,0,1.8-0.1,2.6-0.2l-0.5,2.4
c-0.6,0.2-1.8,0.3-3.5,0.3c-3.2,0-4.3-0.8-3.7-3.5l3.4-15.5H265l0.6-2.5H269z"/>
<g>
<g>
<path className="st1" d="M289.7,14.5l-8.5,16.2H281l-2.1-16.2h-3.1l2.6,21.4c-2,4.6-4.7,5.6-6.5,5.7l0,0l-41.5,0l6-27h-2.4l-1,2.2
c-0.9-1.6-2.5-2.6-5-2.6c-3.7,0-9.2,2.5-11.1,11c-1.8,8.2,2.5,11,6.1,11c2,0,4.2-1,6.1-2.4l0.2-0.1l-2.2,9.8h44.6l0,0
c2.8,0,5.8-1.2,8.4-5.9l12.5-23H289.7z M224,33.5c-3.4,0-5.5-2.2-4.1-8.6c1.2-5.4,4.2-8.3,7.8-8.3c1.9,0,3.1,0.8,4.7,2.8
L230,30.6C228,32.3,225.8,33.5,224,33.5z"/>
</g>
</g>
<g>
<rect x="291.5" y="6.1" className="st3" width="15" height="2.9"/>
<rect x="297.5" y="0" className="st3" width="2.9" height="15"/>
</g>
</g>
</svg>

</h4>

</div>
<MDBModalBody>
<form name="LoginForm" className={this.state.formClassName}  onSubmit={this.submitHandler} noValidate>
<MDBInput
 value={this.state.email}
 name="email"
 onChange={this.changeHandler}
 type="email"
 id="materialFormRegisterNameEx"
 label="Your Email"
 required
 pattern = "[^@]+@[^@]+\.[a-zA-Z]{2,6}"
>
<div className="invalid-feedback">
Please Provide Valid Email Address
</div>
<div className="valid-feedback">Looks good!</div>
</MDBInput>
 <MDBInput
                value={this.state.password}
                icon = "lock"
                name="password"
                onChange={this.changeHandler}
                type= {this.state.hide ? 'password' : 'text'}
                id="materialFormRegisterEmailEx2"
                label="Your Password"
                required
                pattern=".{6,10}"
              >
               <MDBIcon className = "eyeIcon" far icon = {this.state.hide ? 'eye' : 'eye-slash'} onClick = {this.ShowPassword} />
              <div className="invalid-feedback">
              Password Should be between 6 to 10 charecters
              </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
              <div className="login-footer text-center">
{!this.state.spinner && <MDBBtn color="primary" type="submit" disabled = {!this.ValidateForm()}>Login</MDBBtn>
}
{ this.state.spinner && <div className="spinner-border text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>
}
</div>

</form>
</MDBModalBody>
</MDBModal>
</MDBCol>
</MDBRow>
</MDBContainer>
);
}
}

export default FormsPage;