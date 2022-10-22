import "./Home.css"
const ListItem = ({data, deletePassenger, handleEdit}) => {

    const { id, nama, umur, jenisKelamin } = data

    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td className="removeBorder" onClick={() => deletePassenger({variables: {id: id}})}><button>Hapus</button></td>
            <td className="removeBorder" onClick={() => handleEdit(id)}><button>Edit</button></td>
        </tr>
    )
}

export default ListItem;