import React, { Component } from 'react'
import QRCode from 'qrcode.react'


export default class Data extends Component {
    state={
        value:"irfan ganteng sekali"
    }
  render() {
    return (
      <>
        <div>
            <QRCode id='code' value={this.state.value} />
        </div>
      </>
    )
  }
}