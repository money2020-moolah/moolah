import { COBRAND_LOGIN, COBRAND_PASSWORD, USER_LOGIN, USER_PASSWORD } from 'react-native-dotenv';

export default function getTransactionHistory() {
  /**
   * Cobrand login
   */

  return new Promise((resolve, reject) => {

    fetch('https://developer.api.yodlee.com/ysl/cobrand/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Version': '1.1',
        'Cobrand-Name': 'restserver'
      },
      body: JSON.stringify({
        "cobrand": {
          "cobrandLogin": COBRAND_LOGIN, // Hardcoded cobrand login info
          "cobrandPassword": COBRAND_PASSWORD // Remember not to push to github
        }
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      const cobrandSessionId = responseJson.session.cobSession;
      return cobrandSessionId;
    })
    /**
     * User login
     */
    .then((cobrandSessionId) => {
      fetch('https://developer.api.yodlee.com/ysl/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `cobSession=${cobrandSessionId}`,
          'Api-Version': '1.1',
          'Cobrand-Name': 'restserver'
        },
        body: JSON.stringify({
          "user": {
            "loginName": USER_LOGIN, // Hardcoded user login info
            "password": USER_PASSWORD, // Remember not to push to github
            "locale": "en_US"
          }
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        const userSessionId = responseJson.user.session.userSession;
        return userSessionId;
      })
      /**
       * Get transactions
       */
      .then(userSessionId => {
        fetch('https://developer.api.yodlee.com/ysl/transactions?fromDate=2013-01-01', { // Should we hard code or generate mock data?
          headers: {
            'Authorization': `{cobSession=${cobrandSessionId},userSession=${userSessionId}}`,
            'Api-Version': '1.1',
            'Cobrand-Name': 'restserver'
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          resolve(responseJson);
        })
      })
  
    })    

  })

}
