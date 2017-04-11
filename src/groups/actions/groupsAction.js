import * as types from '../constants/actionTypes';
import database from './../../database';

export const fetchGroups = () => {
    return dispatch => {
        database.ref('groups')
            .on('value', snapshot => {
                let data = snapshot.val();
                let result = [];

                Object.keys(data).map(key => result.push({id:key, groupName:data[key].groupName}));

                dispatch({
                    type: types.FETCH_GROUPS,
                    payload: result
                })
            })
    }
};

export const addGroup = (groupName) => {
    return dispatch => {
        database.ref('/groups')
            .push({groupName})
    }
};

export const updateGroup = (group) => {
    return dispatch => {
        database.ref(`groups/${group.id}`)
            .set({groupName: group.groupName})
            .then(() => {
                dispatch({
                    type: types.SELECT_GROUP,
                    payload: group.id
                })
            });
    }
};

export const deleteGroup = (id) => {
    return dispatch => {
        database.ref(`groups/${id}`)
            .remove()
            .then(() => {
                dispatch({
                    type: types.SELECT_GROUP,
                    payload: null
                })
            });
    }
};

export const selectGroup = (id) => {
    return {
        type: types.SELECT_GROUP,
        payload: id
    };
};
