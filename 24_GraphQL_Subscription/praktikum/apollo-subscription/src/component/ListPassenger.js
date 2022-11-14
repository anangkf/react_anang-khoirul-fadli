import ListItem from './ListItem';
import {useSubscription} from '@apollo/client'
import { SUBSCRIPTION } from '../configs/queries';

const ListPassenger = ({ getPassengerByID, deletePassenger}) => {
    
    const handleEdit = (id) =>{
        getPassengerByID({ variables: { id: id } });
    }
    
    const {data, error, loading} = useSubscription(SUBSCRIPTION)

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.results.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        deletePassenger={deletePassenger}
                        handleEdit={handleEdit}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;