import React from 'react'

const FormRegister = ({
  data, errorMessage, handleNama, handleEmail, handlePhone, handleReset, handleSubmit
}) => {
  return (
    <div className='form-container'>
      <header>
        <h1>Register Now!</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nama">
            Nama Lengkap <span className='required'>*</span> <br />
            <input type="text" name='nama' id="nama" value={data.nama} onChange={handleNama} placeholder='Your name' required/>
            {errorMessage && <span className='error'>{errorMessage.nama}</span>}
        </label> <br />
        <label htmlFor="email">
            Email <span className='required'>*</span> <br />
            <input type="email" name='email' id="email" value={data.email} onChange={handleEmail} placeholder='name@example.com' required/>
            {errorMessage && <span className='error'>{errorMessage.email}</span>}
        </label> <br />
        <label htmlFor="no-hp">
            No. HP <span className='required'>*</span> <br />
            <input type="text" name='no-hp' id="no-hp" value={data.phone} onChange={handlePhone} placeholder='Your phone' required/>
            {errorMessage && <span className='error'>{errorMessage.phone}</span>}
        </label> <br />
        <label>
            Pendidikan <span className='required'>*</span> <br />
            <input type="radio" name='pendidikan' value='IT' id='it' required/>
            <label htmlFor="it">IT</label>
            <input type="radio" name='pendidikan' value='Non-IT' id='non-it'/>
            <label htmlFor="non-it">Non IT</label>
        </label> <br />
        <label htmlFor="kelas">
            Kelas <span className='required'>*</span> <br />
            <select name='kelas' id="kelas" required>
                <option value="golang">Coding Backend with Golang</option>
                <option value="reactjs">Coding Frontend with ReactJS</option>
                <option value="fullstack">FullStack Developer</option>
            </select>
        </label> <br />
        <label htmlFor="dokumen">
            Foto Surat Kesungguhan <span className='required'>*</span> <br />
            <input type="file" name='dokumen' id="dokumen" required/>
        </label> <br />
        <label htmlFor="harapan">
            Harapan <br />
            <textarea name="harapan" id="harapan" placeholder='Write your hope'></textarea>
        </label> <br />
        <button type='submit'>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default FormRegister
