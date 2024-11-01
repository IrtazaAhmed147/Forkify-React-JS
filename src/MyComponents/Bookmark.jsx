import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Bookmark = () => {
  const bookMark = useSelector(state => state.api.bookmark)
  const selectedId = useSelector(state => state.api.selectedId);

  const [selected, setSelected] = useState(null)
  const loader = useSelector(state => state.api.loading)







  if (bookMark.length === 0) {
    return (
      <div className='bookmark'>

        <div className='notFoundBox'>

          <p style={{ color: 'black' }} className='itemNotFound'><i style={{ color: '#f48982' }} className="fa-solid fa-triangle-exclamation"></i> No bookmarks yet. Find a nice recipe and bookmark it</p>
        </div>
      </  div>
    )
  }


  return (
    <div className='bookmark'>
      {bookMark && bookMark.map((item) => {
        return <div style={{ marginBottom: '2px' }} key={item.id}>

          <Card item={item} loader={loader} selectedId={selectedId} setSelected={setSelected} selected={selected} />


        </div>
      })}
    </div>
  )
}

export default Bookmark
