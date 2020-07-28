import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={ 
    //         posts: []
    //     }

    // }

    componentWillMount() {
        this.props.fetchPosts();
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res=> res.json())
        // .then(data => this.setState({posts:data}));
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    
    render() {
        const postItems= this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                {postItems}
            </div>
        )
    }
}

Posts.prototypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

const mapStateToProps =  state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps,{ fetchPosts })(Posts);
