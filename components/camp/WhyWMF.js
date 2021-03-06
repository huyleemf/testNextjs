import React from 'react';
import PropTypes from 'prop-types';
import Utils from 'common/Utils';

WhyWMF.propTypes = {
    data: PropTypes.object,
};

export default function WhyWMF(props) {
    return (
        <div className="why-wmf">
            {props.data && (
                <div className="container">
                    <h2 className="heading">{props.data.cfg_title}</h2>
                    <div className="row">
                        {props.data.cfg_value &&
                            props.data.cfg_value.map((item, index) => {
                                if (item.des.includes('of £XXX')) {
                                    console.log('ssssss');
                                    item.des = Utils.convertPrice(item.des);
                                }
                                return (
                                    <div className="col-4" key={index}>
                                        <div className="list-item">
                                            <div className="list-number">
                                                {index + 1}
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.des}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    );
}
