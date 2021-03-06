import React, { useRef, useState, Fragment } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Dot from 'component/include/Dot';
import Utils from 'common/Utils';
import PropTypes from 'prop-types';
import useGetWidth from 'hooks/useGetWidth';

CampInclude.propTypes = {
    data: PropTypes.object,
};

export default function CampInclude(props) {
    const sliderRef = useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const width = useGetWidth();

    // console.log({ width });

    const settings = {
        lazyLoad: 'ondemand',
        infinite: true,
        beforeChange: (current, next) => setSlideIndex(next),
    };

    // console.log(props.data);
    const slideItem = props.data.cfg_value
        ? props.data.cfg_value.filter(function (item) {
              return item.title !== '';
          })
        : [];

    return (
        <div className="training-include">
            {props.data && (
                <div className="container">
                    <h2 className="contact-header">{props.data.cfg_title}</h2>
                    <Slider ref={sliderRef} className="list lazy" {...settings}>
                        {slideItem.map((element, index) => (
                            <div key={index}>
                                <div className="slide-item">
                                    <div className="slide-image">
                                        <img
                                            alt=""
                                            src={Utils.getThumb(element.image)}
                                        />
                                    </div>
                                    <div className="slide-text">
                                        <p>{element.content}</p>
                                        <h3>{element.title}</h3>
                                        <p>{element.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div
                        className={
                            width > 767
                                ? 'slide-control'
                                : 'slide-control mobile'
                        }>
                        <button
                            onClick={() => {
                                sliderRef.current.slickGoTo(slideIndex - 1);
                            }}
                            className="slide-button">
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="icon"
                            />
                        </button>
                        {width > 767 ? (
                            <Fragment>
                                <div
                                    style={{
                                        padding: '0 2rem',
                                        display: 'initial',
                                    }}>
                                    {slideItem.map((item, index) => {
                                        if (index === slideIndex)
                                            return (
                                                <Fragment key={index}>
                                                    <div style={styles.paging}>
                                                        <button
                                                            style={
                                                                styles.pagingActive
                                                            }>
                                                            {index + 1}
                                                        </button>
                                                    </div>
                                                    {index <
                                                        slideItem.length -
                                                            1 && <Dot />}
                                                </Fragment>
                                            );
                                        else
                                            return (
                                                <Fragment key={index}>
                                                    <button
                                                        style={
                                                            styles.pagingButton
                                                        }
                                                        onClick={() => {
                                                            sliderRef.current.slickGoTo(
                                                                index,
                                                            );
                                                        }}>
                                                        <span>{index + 1}</span>
                                                    </button>
                                                    {index <
                                                        slideItem.length -
                                                            1 && <Dot />}
                                                </Fragment>
                                            );
                                    })}
                                </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <b style={{ margin: '0 2rem' }}>
                                    {slideIndex + 1}/{slideItem.length}
                                </b>
                            </Fragment>
                        )}

                        <button
                            onClick={() => {
                                sliderRef.current.slickGoTo(slideIndex + 1);
                            }}
                            className="slide-button">
                            NEXT{' '}
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="icon"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    paging: {
        backgroundColor: '#ef9042',
        borderRadius: '50%',
        border: '1px solid white',
        width: 44,
        height: 44,
        padding: 2,
        display: 'inline-block',
        margin: '0 1rem',
    },
    pagingButton: {
        backgroundColor: 'white',
        borderRadius: '50%',
        border: '1px solid #5a5a5a',
        width: 44,
        height: 44,
        margin: '0 1rem',
    },
    pagingActive: {
        backgroundColor: '#ef9042',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid white',
        color: 'white',
    },
};
