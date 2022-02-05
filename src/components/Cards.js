import React from 'react'

function Cards({name,designation,social, url}) {
    console.log("mounted");
    return (
        <>
                
            <div class="col-lg-3 col-md-6 my-4 mx-2" style={{ borderRadius: "19px", width: "255px", boxShadow: "0 0 47px rgb(0 0 0 / 43%)" }}>
                <div class="team-item text-center rounded overflow-hidden" style={{}}>
                    <div class="rounded-circle overflow-hidden m-4">
                        <img class="img-fluid" src={url} alt="" style={{height : "198px"}}/>
                    </div>
                    <h5 class="mb-0">{name}</h5>
                    <small>{designation}</small>
                    <div class="d-flex justify-content-center mt-3">
                        {/* <a class="btn btn-square btn-primary mx-1 rounded-circle wave" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-primary mx-1 rounded-circle wave" href=""><i class="fab fa-instagram"></i></a> */}
                        <a class="btn btn-square btn-primary mx-1 rounded-circle wave" href={social}><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
