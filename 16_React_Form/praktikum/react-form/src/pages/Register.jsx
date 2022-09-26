import { useState } from 'react';
import '../App.css';
import Alert from '../components/Alert';

import FormRegister from "../components/FormRegister";

const Register = () =>{
    const initData = {
        nama:'',
        email:'',
        phone:'',
        pendidikan:'',
        kelas:'',
        dokumen:'',
        harapan:''
    }

    const initError = {
        nama:'',
        email:'',
        phone:''
    }

    const [data, setData] = useState(initData);
    const [errorMessage, setErrorMessage] = useState(initError);
    const [showAlert, setShowAlert] = useState(false);

    const handleNama = (e) =>{
        const validation = new RegExp(/^[a-zA-Z]+$/);
        setData({
            ...data,
            nama: e.target.value,
        })
        if(!validation.test(e.target.value)){
            setErrorMessage({
                ...errorMessage,
                nama: "Nama harus berupa huruf!"
            })
        }else{
            setErrorMessage({
                ...errorMessage,
                nama: ""
            })
        }
    }

    const handleEmail = (e) =>{
        const validation = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
        setData({
            ...data,
            email: e.target.value,
        })
        if(!validation.test(e.target.value)){
            setErrorMessage({
                ...errorMessage,
                email: "Email tidak valid!"
            })
        }else{
            setErrorMessage({
                ...errorMessage,
                email: ""
            })
        }
    }
    const handlePhone = (e) =>{
        const validation = new RegExp(/^[0-9]*$/g);
        
        setData({
            ...data,
            phone: e.target.value,
        })
        if(!e.target.value.match(validation)){
            setErrorMessage({
                ...errorMessage,
                phone: "Nomor HP harus angka!"
            })
        }else if(e.target.value.length < 9 || e.target.value.length > 14){
            setErrorMessage({
                ...errorMessage,
                phone: "Panjang nomor HP harus antara 9 - 14 angka!"
            })
        }else{
            setErrorMessage({
                ...errorMessage,
                phone: ""
            })
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowAlert(true);
        const formData = new FormData(e.target);
        setData({
            nama:formData.get('nama'),
            email:formData.get('email'),
            phone:formData.get('no-hp'),
            pendidikan:formData.get('pendidikan'),
            kelas:formData.get('kelas'),
            dokumen:formData.get('dokumen').name,
            harapan:formData.get('harapan')
        })
    }

    const closeAlert = (e) =>{
        e.preventDefault()
        setShowAlert(false)
    }
    
    const handleReset = (e) =>{
        e.preventDefault()
        setData(initData);
        setErrorMessage(initError);
    }
  return (
    <div className="container">
        <div className="main">
            <header>
            <h1>Indonesia Biggest Coding Bootcamp 2022</h1>
            </header>
        </div>
        <FormRegister 
            data={data}
            errorMessage={errorMessage}
            handleNama={handleNama}
            handleEmail={handleEmail}
            handlePhone={handlePhone}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
        />
        {showAlert && <Alert data={data} errorMessage={errorMessage} closeAlert={closeAlert}/>}
    </div>
  );
}

export default Register;
