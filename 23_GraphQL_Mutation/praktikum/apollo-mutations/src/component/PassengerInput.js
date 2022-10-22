import { useEffect, useState } from "react"
import "./Home.css"

function PassengerInput({data, updatePassenger, tambahPengunjung}) {
  
  const passengerDetails = data?.results[0];

  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  })

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    passengerDetails && setState({
      nama: passengerDetails.nama,
      umur: passengerDetails.umur,
      jenisKelamin: passengerDetails.jenisKelamin,
      editing: true,
    })
  }, [passengerDetails])
  

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const {nama, umur, jenisKelamin} = state
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else if(passengerDetails) {
        // const newData = {
        //   nama: nama,
        //   umur: umur,
        //   jenisKelamin: jenisKelamin,
        // }
        // tambahPengunjung(newData)
        updatePassenger({variables: {id: passengerDetails.id, ...state}})
        setState({
          ...state,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        })
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }
  
  // const handleBukaInput = () => {
  //   setState({
  //     ...state,
  //     editing: false,
  //   })
  // }

  // const handleTutupInput = () => {
  //   setState({
  //     ...state,
  //     editing: true,
  //   })
  // }

  return (
    <div>
      <div>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenisKelamin">
          <option value="Pria" selected={state.jenisKelamin === 'Pria'}>
            Pria
          </option>
          <option value="Wanita" selected={state.jenisKelamin === 'Wanita'}>
            Wanita
          </option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        {/* <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button> */}
      </div>
    </div>
  )
}

export default PassengerInput
