import ListItem from './ListItem';
import {useQuery} from '@apollo/client'
import { GET_PASSENGER_LIST } from '../configs/queries';

const ListPassenger = ({ getPassengerByID, hapusPengunjung}) => {
    
    const handleEdit = (id) =>{
        getPassengerByID({ variables: { id: id } });
    }

    const {data, error, loading} = useQuery(GET_PASSENGER_LIST)

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
                        hapusPengunjung={hapusPengunjung}
                        handleEdit={handleEdit}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;