import React from 'react'

import { items } from '../GuidedPathway'

const LoopItems = () => {
  // const myObjectList = [
  //   { id: 1, name: 'John' },
  //   { id: 2, name: 'Jane' },
  //   { id: 3, name: 'Bob' },
  // ]

  // console.log(question1)

  const target = items[0][1].options

  return (
    <>
      {Object.entries(target).map(
        // (item) => console.log(item[1].question)
        (item) => (
          <div>{item[1].question}</div>
        )
        // <li key={item.id}>{item.name}</li>
      )}
    </>
  )
}

export default LoopItems
