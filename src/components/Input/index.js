/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { numberMask } from '../../utils/masks'
import { StyledMaskedInput, Label, View } from './styles'

function Input(props) {
  const [isFocused, setFocus] = useState(false)

  function handleFocus() {
    setFocus(!isFocused)
  }

  return (
    <View width={props.width}>
      <Label
        isFocused={isFocused}
        hasText={props.value}
        pointerEvents="none"
        big={props.big}
        header={props.header}
      >
        {props.placeholder}
      </Label>
      <StyledMaskedInput
        mask={
          (props.type === 'number' && numberMask)
        }
        guide={false}
        name={props.name}
        value={props.value || ''}
        onChange={props.onChange}
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleFocus}
        margin={props.margin}
        type={
          props.type === 'number'
            ? 'tel'
            : props.type
        }
        required={props.required}
      />
    </View>
  )
}

export default Input

// repositório: https://github.com/text-mask/text-mask
