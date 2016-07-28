import React from 'react';
import User from './User.js';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/userListActions";


var userList = [{
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
    name: "Vincent Porter",
    status: "Lorem ipsum dolor sit amet"
}, {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg",
    name: "Mike Thomas",
    status: "Lorem ipsum dolor sit amet"
}, {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg",
    name: "Erica Hughes",
    status: "Lorem ipsum dolor sit amet"
}, {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg",
    name: "Ginger Johnston",
    status: "Lorem ipsum dolor sit amet"
}, {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg",
    name: "Dean Henry",
    status: "Lorem ipsum dolor sit amet"
} ];


export default class UserList extends React.Component {
    constructor() {
        super();

        this.state = {
            showUsers: [],
            search: ''
        }

        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleRemoveUser = this.handleRemoveUser.bind(this);
        this.handleUserSearch = this.handleUserSearch.bind(this);
    }

    componentDidMount() {
        this.setState({showUsers: userList})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showUsers: nextProps.showUsers,
            search: nextProps.search
        })
    }

    handleAddUser(event) {
        event.preventDefault();
        if(this._name.value.length) {
            var user = {
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg",
                name: this._name.value,
                status: "Lorem ipsum dolor sit amet"
            }
            var userList = this.props.stateFromReducer.showUsers.slice();
            userList.push(user);

            this.props.addUser({showUsers:userList});
            this._name.value= '';
        }
    }

    handleRemoveUser (event, item) {
        if(confirm('Are you sure you want to delete this item?')) {

            var index = this.props.stateFromReducer.showUsers.indexOf(item);
            var userList = this.props.stateFromReducer.showUsers.slice();
            userList.splice(index, 1);

            this.props.removeUser({showUsers:userList});
        }
    }

    handleUserSearch(event){

        this.props.userSearch({search: event.target.value.substr(0, 20)});
    }

    render() {

        let filteredUsers = this.props.stateFromReducer.showUsers.filter(
            (user) => {
                return user.name.toLowerCase().indexOf(this.props.stateFromReducer.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div className="user-list" id="user-list">
                <div className="search">
                    <input type="text" placeholder="search" value={this.props.stateFromReducer.search} onChange={this.handleUserSearch} />
                    <i className="fa fa-search"></i>
                </div>

                <ul className="list">
                    {
                        filteredUsers.map((user,index) => {
                            return <User key={index} img={user.img} name={user.name} status={user.status} state={this.props.stateFromReducer.showUsers} handleRemoveUser ={this.handleRemoveUser.bind(null, user)} />
                        })
                    }
                </ul>

                <form className="add-user" onSubmit={this.handleAddUser}>
                    <input type="text" placeholder="Add new user" ref={input => this._name = input}/>
                    <button type="submit" value="">Add</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListConnected;

ReactMixin(UserList.prototype, ReactFireMixin);

