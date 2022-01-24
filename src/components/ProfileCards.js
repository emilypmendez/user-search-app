import React from 'react'

const ProfileCards = (props) => {

     return (
          <section className="py4 container">
               <div className="row justify-content-center">
                    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                         <div className="card p-0 overflow-hidden h-100 shadow">
                              <img src={props.photo} className="card-img-left" alt="" />
                              <div className="card-body">
                                   <h5 className="card-title"><b>{props.name}</b></h5>
                                   <p className="card-text">{props.company}</p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ProfileCards
