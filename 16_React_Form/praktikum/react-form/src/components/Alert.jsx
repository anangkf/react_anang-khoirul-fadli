import React from 'react'
import SuccessLogo from '../assets/img/success.png'
import ErrorLogo from '../assets/img/error.png'

const Alert = ({data, errorMessage, closeAlert}) => {
    const error = errorMessage.nama || errorMessage.email || errorMessage.phone;

  return (
    <div className='alert'>
        <header>
            <img className='alert-logo' src={error ? ErrorLogo : SuccessLogo} alt="-" />
            <h1>{
                error
                ? "Warning" 
                : "Sukses"}
            </h1>
        </header>
        {error ?<div>
            {errorMessage?.nama} <br />
            {errorMessage?.email} <br />
            {errorMessage?.phone} 
        </div>
        :<div>
            <h3>Data terkirim!</h3>
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:{data?.nama}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>:{data?.email}</td>
                </tr>
                <tr>
                    <td>No. HP</td>
                    <td>:{data?.phone}</td>
                </tr>
                <tr>
                    <td>Pendidikan</td>
                    <td>:{data?.pendidikan}</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:{data?.kelas}</td>
                </tr>
                <tr>
                    <td>Surat</td>
                    <td>:{data?.dokumen}</td>
                </tr>
                <tr>
                    <td>Harapan</td>
                    <td>:{data?.harapan}</td>
                </tr>
            </table>
        </div>}
        <button className='confirm' onClick={closeAlert}>OK</button>
    </div>
  )
}

export default Alert
