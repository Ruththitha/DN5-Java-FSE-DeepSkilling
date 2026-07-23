import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: "",
            currency: ""
        };
    }

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        });
    };

    handleCurrency = (event) => {
        this.setState({
            currency: event.target.value
        });
    };

    handleSubmit = (event) => {

        event.preventDefault();

        if (this.state.currency.toLowerCase() === "euro") {

            const converted = (this.state.amount / 90).toFixed(2);

            alert(
                "Converted Amount : " +
                converted +
                " Euro"
            );

        } else {

            alert("Please enter 'Euro' as Currency.");

        }
    };

    render() {

        return (

            <div style={{ marginTop: "30px" }}>

                <h2 style={{ color: "green" }}>
                    Currency Convertor
                </h2>

                <form onSubmit={this.handleSubmit}>

                    <table>

                        <tbody>

                            <tr>

                                <td>Amount:</td>

                                <td>

                                    <input
                                        type="number"
                                        value={this.state.amount}
                                        onChange={this.handleAmount}
                                        placeholder="Enter Amount"
                                    />

                                </td>

                            </tr>

                            <tr>

                                <td>Currency:</td>

                                <td>

                                    <input
                                        type="text"
                                        value={this.state.currency}
                                        onChange={this.handleCurrency}
                                        placeholder="Enter"
                                    />

                                </td>

                            </tr>

                            <tr>

                                <td></td>

                                <td>

                                    <button type="submit">
                                        Submit
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </div>

        );

    }

}

export default CurrencyConvertor;