import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from '../store/reducers/tags';
import TagCarousel from './TagCarousel';

class SelectIcons extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getTags();
    }
    render() {
        const tags = this.props.tags
        return (
            <TagCarousel data={tags} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.tag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTags: () => dispatch(fetchTags())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectIcons);
