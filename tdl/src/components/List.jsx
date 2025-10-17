import React from 'react'
import Form from './Form'

const List = () => {
  return (
    <div>
        <Form/>
        <div>
            <ol className='list-group'>
                <div className='list-group-item w-100 mt-3 shadow-sm' >
                    <div className="row">
                        <div className="col-10">Task Message</div>
                        <div className="col-2 " ><i className="fa-solid fa-trash"></i></div>
                    </div>

                </div>
                

            </ol>
        </div>
    </div>
  )
}

export default List