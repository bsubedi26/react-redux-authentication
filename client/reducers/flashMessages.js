export default function flashMessagesReducer(state = [], action = {}) {
    switch (action.type) {
        case 'SHOW_MESSAGE':
            // console.log('flash message state', state)
            return [
                ...state,
                action.message
            ];

        case 'REMOVE_MESSAGE':
            // remove all the flash messages 
            return state.filter(message => !message)  

        default: return state;
    }
}

