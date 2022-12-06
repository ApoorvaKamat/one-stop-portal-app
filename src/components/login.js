import ReactSignupLoginComponent from 'react-signup-login-component';
import React,{useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../style/login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';
import { Context } from "../store.js";
import { set } from 'core-js/core/dict';
import { ReactSession } from 'react-client-session';
import { BorderStyle } from 'react-bootstrap-icons';
 
const LoginPage = () => {
    const navigte = useNavigate();
    const nameDict = {
                    'sajal@utdallas.edu': 'Sajal',
                    'anusri@utdallas.edu': 'Anusri',
                    'yash@utdallas.edu': 'Yash',
                    'apoorva@utdallas.edu' : 'Apoorva',
                    'yatharth@utdallas.edu' : 'Yatharth',
                    'jin@utdallas.edu' : 'Jin'
                    };
    const [state,dispatch] = useContext(Context);
    const [userName,setUserName] = useState('');
    const [pswd,setpswd] = useState(null);
    const [nameError, setNameError] =  useState(null);
    const [pswdError, setPswdError] =  useState(null);
    const updateText = ({e,form}) => {
        console.log(state.UserName);
        console.log("===",!userName);
        if(!userName){
            setNameError('Incorrect Email id format/User does not exit');
            //document.getElementById('#emailID').value = '';
            dispatch ({type:'show_guide_Modal',payload:false});
            dispatch ({type:'set_login',payload:false});
            e.preventDefault();
            navigte('/home');
        }
        else if (!pswd){
            setPswdError('Please enter pasword');
            dispatch ({type:'show_guide_Modal',payload:false});
            dispatch ({type:'set_login',payload:false});
            e.preventDefault();
            navigte('/home');
        }
        else{
            dispatch({type:'update_text',payload: userName});
            dispatch ({type:'show_guide_Modal',payload:false});
            dispatch ({type:'set_login',payload:true})
            setUserName('');
            console.log(state.UserName);
            navigte('/home');
        }
    }
    return (
        <>
        <div className="card border-danger" style={{width:'40rem', marginTop:'5rem'}}>
        <div className="card-body loginCard d-flex flex-column">
          <h2 className="card-title font-weight-bold">Login to view your Tasks</h2>
          <Dropdown.Divider />
          <Form onSubmit={({e,form})=>updateText({e,form})}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-white font-weight-bold'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email eg:- firstname@utdallas.edu" onChange={(e)=>setUserName(nameDict[e.target.value])} />
                {!!nameError && <Form.Text className='text-red font-weight-bold'>{ nameError }</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-white font-weight-bold'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>setpswd(e.target.value)} />
               {!!pswdError && <Form.Text className='text-red font-weight-bold'>{ pswdError }</Form.Text>}
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
            {!!pswdError && <div className='text-red font-weight-bold'>{ pswdError }</div>}

        </div>
        </div>
  
        </>
    );
};
 
export default LoginPage;