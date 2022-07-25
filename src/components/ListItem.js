import React from "react";

export default function ListItem(props) {
    return (
        <li className="contact-item">
            <div className="img-box">
                <img src={props.data.avatar} className="img" />
            </div>
            <div className="content-box">
                <p className="name">
                    <span>{props.data.first_name}</span>{" "}
                    <span>{props.data.last_name}</span>
                </p>
                <p className="address">
                    <span>{props.data.address.city}</span>
                    {", "}
                    <span>{props.data.address.country}</span>
                </p>
                <p className="phone-number">{props.data.phone_number}</p>
                <a href={`mailto: ${props.data.email}`} className="email-link">
                    {props.data.email}
                </a>
            </div>
        </li>
    );
}
