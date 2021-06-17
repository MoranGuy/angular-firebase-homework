// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokeApi: 'https://pokeapi.co/api/v2',
  unknowUrl: 'something unreal',
  firebaseConfig: {
    apiKey: 'AIzaSyBqIfls9g9d6RKtQP8DQ0nPYc96Bc4pWr4',
    authDomain: 'angular-homework-firebase.firebaseapp.com',
    databaseURL:
      'https://angular-homework-firebase-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'angular-homework-firebase',
    storageBucket: 'angular-homework-firebase.appspot.com',
    messagingSenderId: '804878511289',
    appId: '1:804878511289:web:292e71bb7b6078827c7f68',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
