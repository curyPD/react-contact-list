import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import ListItem from "./components/ListItem";
import Spinner from "./components/Spinner";

export default function App() {
    const [contactList, setContactList] = useState([]);

    const getJSON = async function () {
        try {
            const response = await fetch(
                "https://random-data-api.com/api/users/random_user?size=10"
            );
            const data = await response.json();
            setContactList(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getJSON(setContactList);
    }, []);

    const listItemElements = contactList.map((el) => (
        <ListItem key={el.uid} data={el} />
    ));

    return (
        <div className="container">
            <h1>Contact List</h1>
            <div className="btn-box">
                <button onClick={getJSON} className="btn">
                    Find more users
                </button>
            </div>
            <ContactList>
                {listItemElements.length ? listItemElements : <Spinner />}
            </ContactList>
        </div>
    );
}
