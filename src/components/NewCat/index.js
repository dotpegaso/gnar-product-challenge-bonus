/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../Card'
import Input from '../Input'
import { Button } from '../Button'
import IMAGES from '../../constants/images'
import { Form, Subtitle } from './styles'

class NewCat extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){

    const handleChange = ev => {
      const { name, value } = ev.target
      this.setState({ [name]: value })
    }

    const handleSubmit = e => {
      e.preventDefault()
      
      const { ...state } = this.state
      const { addNewCat, cats } = this.props
      
      addNewCat({ cats, state })
    }

    return (
      <Card 
        title="Add new cat" 
        width="49%"
        maxHeight="calc(100vh - 150px)"
      >
        <Form onSubmit={handleSubmit}>

          <Subtitle>Cat</Subtitle>
          <Input 
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={handleChange} 
            width="49%" 
            required 
          />
          
          <Input 
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={handleChange} 
            width="49%"
            type="number"
            required 
          />
          
          <Input 
            name="activity"
            value={this.state.activity}
            placeholder="Activity"
            onChange={handleChange} 
            width="100%" 
            required 
          />

          <Input 
            name="peave"
            value={this.state.peave}
            placeholder="Pet peave"
            onChange={handleChange} 
            width="100%" 
            required 
          />

          <Subtitle>Ownership</Subtitle>

          <Input 
            name="location"
            value={this.state.location}
            placeholder="Location"
            onChange={handleChange} 
            width="100%" 
          />
          
          <Input 
            name="organization"
            value={this.state.organization}
            placeholder="Organization"
            onChange={handleChange} 
            width="49%" 
          />
          
          <Input 
            name="medRecord"
            value={this.state.medRecord}
            placeholder="Medical Record"
            onChange={handleChange} 
            width="49%" 
          />
          
          <Button type="submit" title="NEXT">
            <img src={IMAGES.RIGHT_CHEVRON} alt="Right arrow" />
          </Button>
        </Form>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  state,
  cats: state.list.cats,
})

const mapDispatchToProps = dispatch => ({
  addNewCat(payload) {
    dispatch({ type: 'ADD_NEW_CAT', payload })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCat)
