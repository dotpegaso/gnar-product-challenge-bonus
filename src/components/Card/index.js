import React from 'react'
import Input from '../Input'
import { Link } from '../Button'
import { 
  Container,
  Title,
  Content,
  Hr,
  Actions
} from './styles'

function Card(props) {
  return (
    <Container 
      width={props.width}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      height={props.height}
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      flex={props.flex}
    >
      <Title>
        {props.title}

        <Actions>
          {props.searchable && (
            <Input
              name="search"
              type="search"
              onChange={props.onChange}
              handleSearch={props.handleSearch}
              value={props.searchValue}
              placeholder="Pesquisar"
              width="45%"
            />
          )}

          {props.action === 'add' && (
            <Link to="/add" title="ADD NEW CAT" mini width="45%" />
          )}
        </Actions>
      </Title>
      {props.title && <Hr />}
      <Content flexwrap={props.flexwrap}>
        {props.children}
      </Content>
    </Container>
  )
}

export default Card
