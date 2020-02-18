import React from "react";
import PropTypes from 'prop-types';

const Repository = ({
    name,
    owner,
    stars,
    primaryLanguage
}) => (<>
</>);

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    primaryLanguage: PropTypes.string.isRequired
}

export default Repository;