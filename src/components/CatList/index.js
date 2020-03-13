import React, { useState } from 'react'
import { connect } from 'react-redux'
import Card from '../Card'
import { handleSearch } from '../../utils/helpers'
import IMAGES from '../../constants/images'
import { 
  EmptyList,
  Item,
  Photo,
  Name,
  Info
} from './styles'

function CatList(props) {
  const [search, updateSearch] = useState('')

  const { cats } = props // redux cat list
  const arr = handleSearch(search, cats)

  const handleChange = ev => {
    const { value } = ev.target
    updateSearch(value)
  }

  return (
    <Card 
      title="cat list"
      width="100%"
      maxHeight="calc(100vh - 150px)"
      action="add"
      onChange={handleChange}
      searchValue={search}
      searchable
    >
      {arr.length === 0
        ? <EmptyList src={IMAGES.PURRRHAPS} alt="Empty list" />
        : arr.reverse().map( cat => (
          <Item to={`/details/${cat.id}`}>
            <Photo src={cat.photo} alt={cat.name} />
            <Name>{cat.name}</Name>
            <Info>
              <b>Age: </b>
              {`${cat.age} years`}
            </Info>
            <Info>
              <b>Activity: </b>
              {cat.activity}
            </Info>
            <Info>
              <b>Pet peave: </b>
              {cat.peave}
            </Info>
          </Item>
        )
      )}
    </Card>
  )
}

const mapStateToProps = state => ({
  state,
  cats: state.list.cats,
})

export default connect(mapStateToProps)(CatList)
