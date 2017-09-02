# FirebaseSocialauth

This is a small experimental app I'm using to workout implementation of social auth in FirebaseAngular2 given the latest updates to the framework.

References:

[AngularFire2 4.0 differences](https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md)

## Rough Notes on Steps
1. npm install boostrap etc.
1. setup bootstrap 4 alpha (beta throwing webpack errors) as per my blog [post](http://flagonwiththedragon.com/2017-08-25-angular-cli-and-bootstrap-4-scss-again/).
1. Generate an auth service and login component.
1. Add some basic routes for a login and add router-outlet to the app.component.html
1. npm install firebase and flashmessage via `npm install angular2-flash-messages angularfire2 firebase --save`
1. Import and configure in `app.module.ts`
    1. Add a const called firebaseConfig and copy in settings from firebase project.
    1. Import AngularFireModule firebaseConfig.
    1. Pass firebaseConfig to Add AuthService in imports via `AngularFireModule.initializeApp(firebaseConfig),`
    1. Add FlashMessagesModule to imports (for that)
1.  Setup Firebase
    1.  Start a new (or use an old) firebase project.
    1.  Enable Google under Authentication.
    1. Go back to 'overview' and get config by clicking on "Add Firebase to your web app"
    1. Copy settings variables and put them in the firebaseConfig in `app.module.ts`
1.  See login user compoenent for how to do a basic login.
    1.  note the constructor subscribing to the authstate of the users if you want an example of reading that in your app.
    
## ToTry out
1.  Note the environment import method in the difference example and try that to import firebase config.
1.  Try a couple of social auth methods.
