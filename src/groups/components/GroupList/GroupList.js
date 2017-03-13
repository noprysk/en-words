import React from 'react';
import { Menu } from 'antd';
import './GroupList.css';

export const GroupList = (props) => {

    const { groups, handelGroupItemClick } = props;

    return (
        <Menu id="menuSideBar" mode="inline" onClick={ handelGroupItemClick } className="group-list">
            { groups.map(group =>
                <Menu.Item key={ group.groupId } className="align-text-left">{ group.group }</Menu.Item>)
            }
        </Menu>
    )
};

GroupList.propTypes = {
    groups: React.PropTypes.array.isRequired,
    handelGroupItemClick: React.PropTypes.func.isRequired
};

export default GroupList;