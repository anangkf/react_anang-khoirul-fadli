import { gql } from "@apollo/client";

export const GET_PASSENGER_LIST = gql`
query MyQuery {
    results: passengers {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

export const GET_PASSENGER_BY_ID = gql`
query MyQuery($id: uuid!) {
  results: passengers(where: {id: {_eq: $id}}) {
    id
    nama
    umur
    jenisKelamin
  }
}
`;

export const UPDATE_PASSENGER = gql`
mutation MyMutation($id: uuid!, $jenisKelamin: String , $nama: String, $umur: Int) {
  results: update_passengers_by_pk(pk_columns: {id: $id}, _set: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
    id
    nama
    umur
    jenisKelamin
  }
}
`;

export const ADD_PASSENGER = gql`
mutation MyMutation($jenisKelamin: String, $nama: String, $umur: Int) {
  results: insert_passengers(objects: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
    data: returning {
      id
      jenisKelamin
      nama
      umur
    }
  }
}    
`;