import React from "react";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';

const Home = () =>{
    
    const GET_PASSENGER_BY_ID = gql`
    query MyQuery($id: uuid!) {
        results: passengers(where: {id: {_eq: $id}}) {
          id
          nama
          umur
          jenisKelamin
        }
      }
    `

    const UPDATE_PASSENGER = gql`
    mutation MyMutation($id: uuid!, $jenisKelamin: String , $nama: String, $umur: Int) {
      results: update_passengers_by_pk(pk_columns: {id: $id}, _set: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
        id
        nama
        umur
        jenisKelamin
      }
    }
    
    `

    const [getPassengerByID, {data: passengerDetails}] = useLazyQuery(GET_PASSENGER_BY_ID)

    const [updatePassenger] = useMutation(UPDATE_PASSENGER)
      // console.log(data)
    return(
        <div>
            <Header/>
            <ListPassenger 
                getPassengerByID={getPassengerByID}
                // data={this.state.data}
                // hapusPengunjung={this.hapusPengunjung}
            />
            <PassengerInput
                data={passengerDetails}
                updatePassenger={updatePassenger}
                // tambahPengunjung={this.tambahPengunjung}
            />
        </div>
    )
}

export default Home;