const appConfig = {
    local: {
        API_URL: 'http://localhost:3001'
    },
    dev: {
        API_URL: 'https://pkapi.kevip114.now.sh'
    }
}

const config = appConfig[process.env.REACT_APP_STAGE];

export default {
    ...config,
    VERSION: process.env.REACT_APP_STAGE
}