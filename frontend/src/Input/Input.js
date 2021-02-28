import React from 'react';

function Input(props) {
    return (
    <div class="input-group mb-3 w-100 col-lg-4 offset-sm-4 center-block">
        <input type="text" class="form-control" placeholder="Search Kroger's" aria-label="Search Kroger's" aria-describedby="basic-addon2" ></input>
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Search</button>
        </div>
    </div>
    );
}

export default Input