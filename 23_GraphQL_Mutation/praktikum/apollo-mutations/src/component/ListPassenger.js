import ListItem from './ListItem';
import {gql, useQuery} from '@apollo/client'

const ListPassenger = props => {
    
    const GetPassengerList = gql`
    query MyQuery {
        results: passengers {
          id
          nama
          umur
          jenisKelamin
        }
      }
      `;
    
    const {data, error, loading} = useQuery(GetPassengerList)

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
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;