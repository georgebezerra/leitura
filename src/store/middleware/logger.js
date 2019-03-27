const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('THE ACTION: ', action)
    const returnValue = next(action)
    console.log('THE NEW STATE:  ', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger