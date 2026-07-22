import React from 'react'

function Logo({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="rgb(46,95,220)"
        fillOpacity="1"
        d="M16,-18 C16,-18 0,18 0,18 C0,18 16.007999420166016,18.007999420166016 16.007999420166016,18.007999420166016 C16.007999420166016,18.007999420166016 16,-18 16,-18z"
      />
    </svg>
  )
}

export default Logo
