import React from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_PASSENGER_LIST, GET_PASSENGER_BY_ID, UPDATE_PASSENGER, ADD_PASSENGER } from "../configs/queries";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';

const Home = () =>{

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