/* eslint-disable import/prefer-default-export */
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const numberMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: true
}

export const numberMask = createNumberMask({
  ...numberMaskOptions
})
