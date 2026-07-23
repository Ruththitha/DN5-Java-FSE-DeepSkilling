import React from "react";
import Cart from "./Cart";

class OnlineShopping extends React.Component {

    constructor(props) {

        super(props);

        this.items = [

            { itemName: "Laptop", price: 80000 },
            { itemName: "TV", price: 120000 },
            { itemName: "Washing Machine", price: 50000 },
            { itemName: "Mobile", price: 30000 },
            { itemName: "Fridge", price: 70000 }

        ];

    }

    render() {

        return (

            <div style={{ margin: "30px" }}>

                <h1 style={{ color: "green" }}>Items Ordered :</h1>

                <table border="1" cellPadding="10">

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Price</th>

                        </tr>

                    </thead>

                    <tbody>

                        {this.items.map((item, index) => (

                            <Cart
                                key={index}
                                itemName={item.itemName}
                                price={item.price}
                            />

                        ))}

                    </tbody>

                </table>

            </div>

        );

    }

}

export default OnlineShopping;