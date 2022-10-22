import React from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_PASSENGER_LIST, GET_PASSENGER_BY_ID, UPDATE_PASSENGER, ADD_PASSENGER, DELETE_PASSENGER } from "../configs/queries";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';

const Home = () =>{

    const [getPassengerByID, {data: passengerDetails}] = useLazyQuery(GET_PASSENGER_BY_ID)

    const [updatePassenger] = useMutation(UPDATE_PASSENGER)

    const [addPassenger] = useMutation(ADD_PASSENGER,{
      refetchQueries:[
        {query: GET_PASSENGER_LIST}
      ]
    })

    const [deletePassenger] = useMutation(DELETE_PASSENGER,{
      refetchQueries:[
        {query: GET_PASSENGER_LIST}
      ]
    })

    return(
        <div>
            <Header/>
            <ListPassenger 
                getPassengerByID={getPassengerByID}
                deletePassenger={deletePassenger}
            />
            <PassengerInput
                data={passengerDetails}
                updatePassenger={updatePassenger}
                addPassenger={addPassenger}
            />
        </div>
    )
}

export default Home;