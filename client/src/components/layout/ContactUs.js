import React from 'react'

export default () => {
  return (
    <div className="container">
    <button className="btn btn-lg btn-info mr-2" data-toggle="modal" data-target="#myModal">Launch Modal</button>
    <div className="modal text-dark" tabindex="-1" role="dialog" id="myModal"  background-color="#ffff">
      <div className="modal-dialog" role="document" >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}
