import React from "react";
import office from "../Images/office.jpg";

function OfficeSpace() {

    const element = "Office Space";

    const officeList = [

        {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        },

        {
            Name: "Regus",
            Rent: 65000,
            Address: "Bangalore"
        },

        {
            Name: "WeWork",
            Rent: 55000,
            Address: "Hyderabad"
        }

    ];

    return (

        <div style={{ marginLeft: "100px" }}>

            <h1>{element}, at Affordable Range</h1>

            {

                officeList.map((item, index) => {

                    let colors = {};

                    if (item.Rent < 60000) {

                        colors = { color: "red" };

                    }

                    else {

                        colors = { color: "green" };

                    }

                    return (

                        <div key={index} style={{ marginBottom: "40px" }}>

                            <img
                                src={office}
                                width="25%"
                                height="25%"
                                alt="Office Space"
                            />

                            <h1>Name: {item.Name}</h1>

                            <h3 style={colors}>
                                Rent: Rs. {item.Rent}
                            </h3>

                            <h3>
                                Address: {item.Address}
                            </h3>

                        </div>

                    );

                })

            }

        </div>

    );

}

export default OfficeSpace;