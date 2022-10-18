import { makeAutoObservable } from "mobx";
import axios from 'axios';

class FetchPlacemarks {

    placemarks = [];
    currentCategory = 1; // DELETE LATER, THEN API WILL BE FIXED

    constructor(){
        makeAutoObservable(this)
    }

    fetchAllPoints() {
        axios.get("https://wasite.herokuapp.com/api/points/", {
            headers: {
                Authorization: `Token ${localStorage.getItem('authToken')}`
            },
            params: {
                tagName: this.currentCategory.tagName,
                },
        })
            .then((response) => {
                this.placemarks = [...response.data];
            })
            .catch(error => console.error(error));
        }
}

export default new FetchPlacemarks()