import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
    render() {
        const { filterHandler } = this.props;
        return (
            <div>
                <label className={styles['filter__label']}>
                    Find contacts by Name
                    <br />
                    <input
                        className={styles['filter__input']}
                        type="text"
                        onChange={filterHandler}
                    />
                </label>
            </div>
        );
    }
}

Filter.propTypes = {
    filterNandler: PropTypes.func,
};

export default Filter;
