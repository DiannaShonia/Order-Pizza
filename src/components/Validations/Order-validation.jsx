import * as yup from 'yup'

export const schema = yup.object().shape({
  fname: yup.string(),
  lname: yup.string(),
  address: yup.string().required(),
  phone: yup.number(),
})
