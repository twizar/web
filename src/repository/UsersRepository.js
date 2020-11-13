import awsConfig from "../aws-exports";

const LOCAL_STORAGE_USERS_KEY = "users"
import cognito from "../config/awsCognito"

export default {
    GetUsers: function (clearCache = false) {
        const usersPromise = cognito.then(client => {
            client.listUsers({
                UserPoolId: awsConfig.Auth.userPoolId,
            }, (err, response) => {
                if (err) {
                    console.error("listUsers call error", err)
                    return
                }

                localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(response.Users))
                return response.Users
            })
        })

        if (clearCache) {
            return usersPromise
        }

        const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY))

        if (users !== null && users.length) {
            return new Promise(resolve => resolve(users))
        }

        return usersPromise
    }
}
