const getApi = (path) => {
    const withPrefix = '/v1' + path

    return new URL(withPrefix, process.env.REACT_APP_API_MOCK).toString()
}

export default getApi;