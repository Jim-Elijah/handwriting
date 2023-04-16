import React from 'react'
import ReactDOM from 'react-dom'

export default function Loading() {
  return ReactDOM.createPortal(
    <div className="loading">loading...</div>,
    document.body
  )
}
