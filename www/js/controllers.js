angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicModal) {
  var platform = new H.service.Platform({
    app_id: 'xUIhjMZQt4oxRe1ZtaoR',
    app_code: '0jzDLZDNr83oBUj0b_lFUQ',
    useCIT: true,
    useHTTPS: true
  });
  var defaultLayers = platform.createDefaultLayers();

  var map = new H.Map(
    document.getElementById('map'),
    defaultLayers.normal.map
  );

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  var ui = H.ui.UI.createDefault(map, defaultLayers);

  map.setCenter({lat:52.5159, lng:13.3777});
  map.setZoom(16);

  var group = new H.map.Group();

  map.addObject(group);

  marker1 = new H.map.Marker(new H.geo.Point(52.5140, 13.3766));
  marker2 = new H.map.Marker(new H.geo.Point(52.5159, 13.3777));
  marker1.setData({backendId:1});
  marker2.setData({backendId:2});
  group.addObject(marker1);
  group.addObject(marker2);

  group.addEventListener('tap', function(event){
    $scope.modal.show();
    console.log('tap',event.target.getData());
  });



  $ionicModal.fromTemplateUrl('templates/modal-story.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  console.log('MapCtrl');
})

.controller('FeedCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('RecordCtrl', function($scope, $interval, $ionicLoading, $timeout, $ionicModal) {
  $scope.recording = false;
  $scope.text = 'Start recording';
  $scope.time = 0;

  $ionicModal.fromTemplateUrl('templates/modal-upload.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });  

  $scope.record = function(){
    $scope.recording = !$scope.recording;

    $scope.text = $scope.recording ? 'Stop recording' : 'Start recording';
  };

  $scope.upload = function(){
    $ionicLoading.show({
      template: 'Uploading...'
    });
    $timeout(function(){
      $ionicLoading.hide();
      $scope.modal.show();
    },500);
  };

  $interval(function(){
    if ($scope.recording) {
      $scope.time++;
    }
  }, 100);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ProfileCtrl', function($scope) {})

;
