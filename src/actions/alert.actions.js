export const alertActions = {
    error,
};

function error(message) {
    return { type: 'ERROR', message };
}
