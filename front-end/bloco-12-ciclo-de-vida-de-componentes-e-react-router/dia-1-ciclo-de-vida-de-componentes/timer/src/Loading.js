import React from "react";

export default class Loading extends React.Component {

    componentWillUnmount() {
        console.log('loading will umnoint')
    }

    render() {
        console.log('render loading')
        return (
            <span>Loading...</span>
        )
    }
} 