import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import Router from 'next/router'
import { LoginService } from '../service/loginAuth';

const Login = () => {
    const [pwdValue, setPwdValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const handleSubmit = () => {
        const loginService = new LoginService();
        loginService.login({"email": emailValue, "password": pwdValue}).then((res)=>{
            if(res.status===200){
                Router.push('/products')
            }
        },err=>{
            console.log('err:',err)
        });
        console.log('Login value', emailValue, pwdValue);
    }
    return (
        <div className="grid h-screen align-items-center justify-content-center overflow-hidden m-0 surface-50">
            <div className="col-4">
                <Card>
             
          <h4 className='mt-1 text-xl text-center mb-2'>Welcome Back</h4>
                    <small className='mb-3 text-center block'>Enter your credentails to access your account</small>
                    <div className="p-3">
                        <div className="field">
                            <label htmlFor="username1" className="block">Username</label>
                            <span className="p-float-label p-input-icon-right block">
                                <i className="pi pi-envelope" />
                                <InputText id="username1" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} aria-describedby="username1-help" className="block w-full"/>
                            </span>
                        </div>
                        <div className="field">
                            <label htmlFor="username1" className="block">Password</label>
                            <Password className="w-full" value={pwdValue} onChange={(e) => setPwdValue(e.target.value)} />
                        </div>
                        <div className='text-center mt-4'>
                            <Button label="Submit" className="w-full" aria-label="Submit" onClick={handleSubmit} />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
       
    );
};
export default Login;