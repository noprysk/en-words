import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Modal, Spin, Menu } from 'antd';

import GroupModalForm from '../../containers/GroupModalFormContainer';

const ButtonGroup = Button.Group;

class GroupList extends Component {

    constructor(props) {
        super(props);

        this.handelEditClick = this.handelEditClick.bind(this);
        this.handelDeleteClick = this.handelDeleteClick.bind(this);
        this.handelShowModal = this.handelShowModal.bind(this);
    }

    componentWillMount() {
        this.props.fetchGroups();
    }

    render() {
        const { groups, error, loading } = this.props.groupList;

        if(loading) {
            return <Spin />
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <Menu mode="inline" onClick={(e) => {
                        browserHistory.push(`words?groupId=${e.key}`);}}>

                    { groups.map(group =>
                        <Menu.Item key={group.groupId} className="align-text-left">
                            <span className="nav-text">{group.group}</span>
                        </Menu.Item>
                    )}
                </Menu>

                <ButtonGroup className="align-right padding-top-5px">
                    <Button onClick={this.handelShowModal} icon="plus-circle-o" />
                    <Button onClick={this.handelShowModal} disabled={!this.props.selectedGroup} icon="edit" />
                    <Button onClick={this.handelDeleteClick} disabled={!this.props.selectedGroup} icon="delete" />
                </ButtonGroup>

                <GroupModalForm />
            </div>
        )
    }

    handelEditClick() {
        this.props.editGroup(this.props.selectedGroup.groupId)
    }

    handelShowModal() {
        this.props.showModal();
    }

    handelDeleteClick() {
        const deleteGroup = () => {this.props.deleteGroup(this.props.selectedGroup.groupId)};

        Modal.confirm({
            title: 'Delete group',
            content: `Do you want to delete the group "${this.props.selectedGroup.group}" with all words?`,
            okText: 'OK',
            cancelText: 'Cancel',
            onOk() {
                deleteGroup();
            },
            onCancel() {}
        });
    }

}

export default GroupList;
