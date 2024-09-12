import React, { Component } from 'react'
import { Button, SmallButton } from '../Components/Button'
import { StyleLink } from '../Components/Link'
import { TextField } from '../Components/TextField'

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className='button_style' bgPrimary fontSize2x>Hello</Button>
        <SmallButton >Hello</SmallButton>
        <StyleLink >Hello</StyleLink>
        <TextField inputColor="purple"/>
      </div>
    )
  }
}
