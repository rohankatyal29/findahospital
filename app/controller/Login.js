Ext.define('FindAHospital.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Main',
            'Login'
        ],
        refs: {
            loginView: {
                                selector: 'login',
                                xtype: 'login',
                                autoCreate: true
                            },
            mainView: {
                                selector: 'main',
                                xtype: 'main',
                                autoCreate: true
                            },
            logOffBtn: '#logOffButton'
        },
        control: {
            logOffBtn: {
                tap: 'onLogOffBtnTap'
            },
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            mainView: {
                onSignOffCommand: 'onSignOffCommand'
            }
        }
    },

    // Session token

    sessionToken: null,

    // Transitions
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },

    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },

    onSignInCommand: function (view, username, password) {

        console.log('Username: ' + username + '\n' + 'Password: ' + password);

        var me = this,
        loginView = me.getLoginView();

        if (username.length === 0 || password.length === 0) {

            loginView.showSignInFailedMessage('Please enter your username and password.');
            return;
        }

        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });

        if (username == 'admin' && password == 'admin'){
            me.sessionToken = '200' //CHANGE to response token
            me.signInSuccess();  
        }
        else {
            me.sessionToken = null;
            me.signInFailure();
        }

    },

    signInSuccess: function () {
        var hospitalSearchView = Ext.create('FindAHospital.view.HospitalSearch', {fullscreen: true});
        Ext.Viewport.animateActiveItem(hospitalSearchView, this.getSlideLeftTransition());
    },

    signInFailure: function () {
        Ext.Msg.alert('title', 'Username: admin, Password: admin', Ext.emptyFn);
        var loginView = this.getLoginView();
        loginView.setMasked(false);
    },

    onLogOffBtnTap: function () {
        Ext.Viewport.animateActiveItem(Ext.create('FindAHospital.view.Login', {fullscreen: true}), this.getSlideRightTransition());
    }
});