// import React from 'react'
import Swal from 'sweetalert2'
import { put, takeEvery } from 'redux-saga/effects'
import { handleNewCat } from '../../utils/helpers'

function* addNewCat({ payload }) {
  try {
    const { state, cats } = payload

    yield handleNewCat().then(data => {
      state.id = data[0].id
      state.photo = data[0].url
      state.curious = Math.floor(Math.random() * 70) + 10 // round from 10 to 70
      state.friendly = Math.floor(Math.random() * 70) + 10
      state.energetic = Math.floor(Math.random() * 70) + 10
      cats.push(state)
    })
        
    yield put({ type: 'UPDATE_CAT_LIST', data: { ...cats } })

    Swal.fire({
      icon: 'success',
      title: 'Furrrmidable!',
      text: 'A new cat was added to the list',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      footer: `Redirecting you back to the main page`,
      onClose: () => {
        window.location = '/'
      }
    })

  } catch ({ message, response }) {
    // eslint-disable-next-line no-console
    console.warn('add generator ERROR', { message, response })

    Swal.fire({
      icon: 'error',
      title: 'Unfurrrtunately',
      text: 'Something went wrong',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      footer: `Refreshing the page, try it again`,
      onClose: () => {
        window.location = '/add'
      }
    })
  }
}

export default function* loginSagas() {
  yield takeEvery('ADD_NEW_CAT', addNewCat)
}
