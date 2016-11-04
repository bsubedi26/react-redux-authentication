export function showMessage(message) {
    return {
        type: 'SHOW_MESSAGE',
        message
    }
}

export function removeMessages() {
    return {
        type: 'REMOVE_MESSAGE'
    }
}