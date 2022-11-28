import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { ProductService } from '../service/ProductService';

const Login = () => {
    const [value3, setValue3] = useState('');
    return (
        <div className="grid h-screen align-items-center justify-content-center overflow-hidden m-0">
            <div className="col-4">
                <Card>
                    <h4 className='mt-1 text-xl text-center'>Login</h4>
                    <div className="p-3">
                        <div className="field">
                            <label htmlFor="username1" className="block">Username</label>
                            <span className="p-float-label p-input-icon-right block">
                                <i className="pi pi-envelope" />
                                <InputText id="username1" aria-describedby="username1-help" className="block w-full"/>
                            </span>
                        </div>
                        <div className="field">
                            <label htmlFor="username1" className="block">Password</label>
                            <Password className="w-full" value={value3} onChange={(e) => setValue3(e.target.value)} toggleMask />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
       
    );
};
export default Login;