/**
 * Data object
 */

const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
/**
 * 这就是reducer处理函数，参数是状态和新的action
 * 1. 其返回值就是state
 *  */
export function counter(state = 10, action) {

    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        default:
            return 10
    }
}

/**
 * actions
 */
export function addGun() {
    return {
        type: ADD_GUN
    }
}

export function removeGun() {
    return {
        type: REMOVE_GUN
    }
}

export function addTwice() {
    return [{
        type: ADD_GUN
    }, addGunAsync()]
}

// 延迟添加，拖两天再给
export function addGunAsync() {
    // thunk插件的作用，这里可以返回函数，
    return dispatch => {
        setTimeout(() => {
            // 异步结束后，手动执行dispatch
            dispatch(addGun());
        }, 2000);
    };

}