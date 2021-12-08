import React from 'react';

const MyWallet = ({ auth }) => {
    return (

        <div className="row js-list-filter" id="js-contacts">
            <div className="col-xl-4">
                <div id="c_1" className="card border shadow-0 mb-g shadow-sm-hover" data-filter-tags="oliver kopyov">
                    <div className="card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top">
                        <div className="d-flex flex-row align-items-center">
                            <span className="mr-3">
                                <span className="rounded-circle profile-image d-block " style={{ backgroundImage: 'url("assets/img/demo/avatars/avatar-b.png")', backgroundSize: 'cover' }} />
                            </span>
                            <div className="info-card-text flex-1">
                                <a href="javascript:void(0);" className="fs-xl text-truncate text-truncate-lg text-info" data-toggle="dropdown" aria-expanded="false">
                                    Klaytn
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0 collapse show">
                        <div className="p-3">

                            <i className="text-muted mr-2" /> <h1> 0 </h1> Total Klay<br />
                            <i className="fas fa-mouse-pointer text-muted mr-2" /> 전체 0 Klay<br />
                            <i className="fas fa-map-pin mr-2" /> 사용가능 0 Klay <br />
                            <div class="form-group">
                                <label class="form-label" for="button-addon5">입금 주소</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" aria-describedby="button-addon5" value="0xa1d620737868a85963a4a7c9d7fb22a00c2da732" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary waves-effect waves-themed" type="button" id="button-addon5">복사</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-xl-4">
                <div id="c_1" className="card border shadow-0 mb-g shadow-sm-hover" data-filter-tags="oliver kopyov">
                    <div className="card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top">
                        <div className="d-flex flex-row align-items-center">
                            <span className="mr-3">
                                <span className="rounded-circle profile-image d-block " style={{ backgroundImage: 'url("assets/img/demo/avatars/avatar-b.png")', backgroundSize: 'cover' }} />
                            </span>
                            <div className="info-card-text flex-1">
                                <a href="javascript:void(0);" className="fs-xl text-truncate text-truncate-lg text-info" data-toggle="dropdown" aria-expanded="false">
                                    BTI Swap
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0 collapse show">
                        <div className="p-3">

                            <i className="text-muted mr-2" /> <h1> 0 </h1> Total BTIS<br />
                            <i className="fas fa-mouse-pointer text-muted mr-2" /> 전체 0 BTIS<br />
                            <i className="fas fa-map-pin mr-2" /> 사용가능 0 BTIS <br />
                            <div class="form-group">
                                <label class="form-label" for="button-addon5">입금 주소</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" aria-describedby="button-addon5" value="0xa1d620737868a85963a4a7c9d7fb22a00c2da732" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary waves-effect waves-themed" type="button" id="button-addon5">복사</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWallet;
