import React from 'react';

const SubHome = ({ url, para, head }) => {
    return (
        <>
            <section id="learn" class="p-5">
                <div class="container" >
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md">
                            <img src={url} class="img-fluid" alt="" style={{ borderRadius: "44px", marginTop: "6px", marginBottom: "6px" }} />
                        </div>
                        <div class="col-md p-5">
                            <h2>{head}</h2>
                            <p class="lead">
                                {para}
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default SubHome;
