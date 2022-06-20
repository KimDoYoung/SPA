/**
 * 1. authenticate
 * 2. redirect
 * https://ui-router.github.io/guide/transitionhooks
 */
module.exports = function run($transitions){
    $transitions.onBefore({}, function(transition) {
        //debugger;
        console.log('onBefore');
        // check if the state should be protected
        if (transition.to().protected && !user.isAuthenticated()) {
          // redirect to the 'login' state
          return transition.router.stateService.target('login');
        }
       
    });
    $transitions.onStart({}, function(transition) {
        if (transition.to().name === 'unreachable') {
          return false;
        }
        // debugger;
        transition.to().data= {'title' : transition.to().name};
    });    
    $transitions.onSuccess({}, function(transition){
        console.log('onSuccess');
        console.log(
            "Successful Transition from " + transition.from().name +
            " to " + transition.to().name
        );
        if(transition.to().data.title){
            document.title = transition.to().data.title;
        }

        console.log('from:' + transition.from());
        console.log('to:' + transition.to());
        console.log('params:' + JSON.stringify ( transition.to().params));
    });
    // $transitions.onSuccess({}, function($transition){
    //     console.log('from:' + $transition.$from());
    //     console.log('to:' + $transition.$to());
    //     console.log('params:' + JSON.stringify ( $transition.params()));
    // });
}    
// $transitions.onStart({}, function($transition){...});
// $transitions.onExit({exiting: "stateName"}, function($transition){...});
// $transitions.onRetain({}, function($transition){...});
// $transitions.onEnter({entering: "stateName"}, function($transition){...});
// $transitions.onFinish({}, function($transition){...});
// $transitions.onSuccess({}, function($transition){...});

    // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    //     // console.log(toState, toParams, ' in $stateChangeStart');
    //     console.log(' in $stateChangeStart');
    // });
    // $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    //     console.log(' in $stateChangeStart');
    // });

    // $rootScope.$on('$stateChangeStart', () => {
    //     console.loog('$stateChangeStart')
    //   });
  
    //   $rootScope.$on('$stateNotFound', () => {
    //     console.log('notFound');
    //   });
  
    //   $rootScope.$on('$stateChangeSuccess', () => {
    //      console.log('$stateChangeSuccess')
    //   });
  
    //   $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    //            console.log('$stateChangeError')
    //   });

//}