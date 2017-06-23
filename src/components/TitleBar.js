/**
 * Created by lenovo on 2017-06-23.
 */
import React from 'react';
const TitleBar = (props) => {
    return (
        <h1 style={{marginTop: 45}} className="title">
            {props.title}
        </h1>
    );
};

export default TitleBar