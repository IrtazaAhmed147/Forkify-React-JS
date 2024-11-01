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

          <Card item={item} loader={loader} selectedId={selectedId} setSelected={setSelected} />

          {/* <div className="result "   >
            <div onClick={() => handleView(item.id)}>


              <div className="card" style={{
                // display: loader ? 'none' : 'flex',
                // backgroundColor: 'rgb(249, 245, 243)'
                backgroundColor: selected === item.id ? 'rgb(249, 245, 243)' : '#fff'
              }}>
                <img className='item-img' src={item.image_url} style={{ height: '50px' }} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.publisher}</p>

                </div>
              </div>

            </div>
          </div> */}
        </div>
      })}
    </div>
  )
}

export default Bookmark
