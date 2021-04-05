import React, { Component } from 'react';

export default class Googleconnect extends Component {
    render() {
        var regex = /code=(.*)&scope/
        var resp = regex.exec(window.location.href);
        console.log(resp[1])
        localStorage.setItem("responsegoogle", resp)
        window.location.href = "/services"
        return (
            <text>test</text>
        )
    }
}