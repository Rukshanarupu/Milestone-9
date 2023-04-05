import React from 'react';
import { NavLink } from "react-router-dom";

const ActiveLink = (to) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Messages
        </NavLink>
    );
};

export default ActiveLink;