import React, { Component } from 'react'

export default class SubLifecycle extends Component {

    componentWillUnmount(){
        this.props.ubahMakanan("Sate")
    }

    render() {
        return (
            <div>
                <h3>Component SubLifecycle</h3>
            </div>
        )
    }
}
