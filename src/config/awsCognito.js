import {Auth} from "aws-amplify";
import AWS from "aws-sdk";
import awsConfig from "../aws-exports";

export default Auth.currentCredentials().then(credentials => {
    return new AWS.CognitoIdentityServiceProvider({credentials: credentials, region: awsConfig.Auth.region});
});
