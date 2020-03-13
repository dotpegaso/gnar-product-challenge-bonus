// import React from 'react'
import { put, takeEvery } from 'redux-saga/effects'

function* updateSearchString({ payload }) {
  try {
    yield put({ type: 'SEARCH_STRING', data: { ...payload } })
  } catch ({ message, response }) {
    // eslint-disable-next-line no-console
    console.warn('add generator ERROR', { message, response })
  }
}

export default function* loginSagas() {
  yield takeEvery('UPDATE_SEARCH_STRING', updateSearchString)
}
