angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,SampleService) {
	$scope.menuItems = SampleService.all();
	$scope.$hello="Jickson";
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
}).controller('EditCtrl', function($scope, SampleService) {
        console.log('EditCtrl');
    }).controller('HomeCtrl', function($scope, SampleService) {
        $scope.items = SampleService.all();
    }).controller('SwitchCtrl', function($scope, SampleService) {
        $scope.settingsList = [{
            text: "Wireless",
            checked: true
        }, {
            text: "GPS",
            checked: false
        }, {
            text: "Bluetooth",
            checked: false
        }];

        $scope.pushNotificationChange = function() {
            console.log('Push Notification Change', $scope.pushNotification.checked);
        };

        $scope.pushNotification = {
            checked: true
        };
        $scope.emailNotification = 'Subscribed';

        $scope.display = function() {
            var str = "";
            for (var i = 0; i < $scope.settingsList.length; i++) {
                str = str + "\n" + $scope.settingsList[i].text + " is " + ($scope.settingsList[i].checked ? "On " : "Off");
            };
            str = str + "\nPush notification is " + ($scope.pushNotification.checked ? "On " : "Off");
            str = str + "\nNews letter is ";
            //spent an hour to fix this
            if (this.emailNotification == "Subscribed") {
                str = str + " on";
            } else {
                str = str + " off";
            }
            alert(str);
        }


    }).controller('SeekBarCtrl', function($scope, SampleService) {
        $scope.value1 = '10';
        $scope.value2 = '20';
        $scope.value3 = '30';
        $scope.display = function() {
            var str = "Seekbar1: " + this.value1 +
                "\nSeekbar2: " + this.value2 +
                "\nSeekbar3: " + this.value3;
            alert(str);
        }

    }).controller('CheckboxCtrl', function($scope) {

        $scope.devList = [{
            text: "HTML5",
            checked: true
        }, {
            text: "CSS3",
            checked: false
        }, {
            text: "JavaScript",
            checked: false
        }];

        $scope.pushNotificationChange = function() {
            console.log('Push Notification Change', $scope.pushNotification.checked);
        };

        $scope.pushNotification = {
            checked: true
        };
        $scope.emailNotification = 'Subscribed';
        $scope.display = function() {
            var str = "";
            for (var i = 0; i < $scope.devList.length; i++) {
                str = str + "\n" + $scope.devList[i].text + " is " + ($scope.devList[i].checked ? "On " : "Off");
            };
            str = str + "\nPush notification is " + ($scope.pushNotification.checked ? "On " : "Off");
            str = str + "\nNews letter is ";
            if (this.emailNotification == "Subscribed") {
                str = str + " on";
            } else {
                str = str + " off";
            }
            alert(str);
        }

    }).controller('RadioCtrl', function($scope) {

        $scope.clientSideList = [{
            text: "Backbone",
            value: "bb"
        }, {
            text: "Angular",
            value: "ng"
        }, {
            text: "Ember",
            value: "em"
        }, {
            text: "Knockout",
            value: "ko"
        }];

        $scope.serverSideList = [{
            text: "Go",
            value: "go"
        }, {
            text: "Python",
            value: "py"
        }, {
            text: "Ruby",
            value: "rb"
        }, {
            text: "Java",
            value: "jv"
        }];

        $scope.data = {
            clientSide: 'ng'
        };

        $scope.serverSideChange = function(item) {
            console.log("Selected Serverside, text:", item.text, "value:", item.value);
        };

    }).controller('ProgressBarCtrl', function($scope, $ionicLoading) {
        // Trigger the loading indicator
        $scope.show = function() {

            // Show the loading overlay and text
            $scope.loading = $ionicLoading.show({

                // The text to display in the loading indicator
                content: 'Loading',

                // The animation to use
                animation: 'fade-in',

                // Will a dark overlay or backdrop cover the entire view
                showBackdrop: true,

                // The maximum width of the loading indicator
                // Text will be wrapped if longer than maxWidth
                maxWidth: 200,

                // The delay in showing the indicator
                showDelay: 500
            });
            setTimeout(function() {
                $scope.hide();
            }, 3000);
        };



        // Hide the loading indicator
        $scope.hide = function() {
            $scope.loading.hide();
        };
    }).controller('DialogsCtrl', function($scope, $timeout, $q, $ionicPopup) {
        $scope.showPopup = function() {
            $scope.data = {}

            $ionicPopup.show({
                templateUrl: 'popup-template.html',
                title: 'Enter Wi-Fi Password',
                subTitle: 'WPA2',
                scope: $scope,
                buttons: [{
                    text: 'Cancel',
                    onTap: function(e) {
                        return true;
                    }
                }, {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        return $scope.data.wifi;
                    }
                }, ]
            }).then(function(res) {
                console.log('Tapped!', res);
            }, function(err) {
                console.log('Err:', err);
            }, function(msg) {
                console.log('message:', msg);
            });

            $timeout(function() {
                $ionicPopup.alert({
                    title: 'Unable to connect to network'
                }).then(function(res) {
                    console.log('Your love for ice cream:', res);
                });
            }, 1000);
        };

        $scope.showConfirm = function() {
            $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                content: 'Are you sure you want to eat this ice cream?'
            }).then(function(res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };
        $scope.showPrompt = function() {
            $ionicPopup.prompt({
                title: 'ID Check',
                subTitle: 'What is your name?'
            }).then(function(res) {
                console.log('Your name is', res);
            });
        };
        $scope.showPasswordPrompt = function() {
            $ionicPopup.prompt({
                title: 'Password Check',
                subTitle: 'Enter your secret password',
                inputType: 'password',
                inputPlaceholder: 'Your password'
            }).then(function(res) {
                console.log('Your name is', res);
            });
        };
        $scope.showAlert = function() {
            $ionicPopup.alert({
                title: 'Don\'t eat that!',
                content: 'That\'s my sandwich'
            }).then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };
    }).controller('ListViewCtrl', function($scope, ListService) {
        $scope.items = ListService.all();
    }).controller('PullToRefreshCtrl', function($scope, $http, $templateCache, $timeout) {
        var url = "http://demos.telerik.com/kendo-ui/service/Products?callback=JSON_CALLBACK";
        var i = 0;
        var it = 10;
        var max = 1000;
        $scope.data = {};
        $scope.items = [];
        $http.jsonp(url)
            .success(function(data) {
                for (; i < it; i++) {
                    $scope.items.push(data[i]);
                }
                it += 10;
            });

        $scope.doRefresh = function() {

            console.log('Refreshing!');

            $timeout(function() {

                $http.jsonp(url)
                    .success(function(data) {

                        for (; i < it; i++) {
                            data[i % 77].UnitPrice = data[i % 77].UnitPrice + Math.floor(Math.random() * 10);
                            $scope.items.push(data[i % 77]);
                            console.log(data[i % 77]);
                        }
                        it += 10;
                        $scope.$broadcast('scroll.refreshComplete');
                    }).error(function(data) {
                        $scope.$broadcast('scroll.refreshComplete');
                    });

                //Stop the ion-refresher from spinning


            }, 1000);

        };

        $scope.displayAlert = function(name, price) {
            alert(name + " costs $ " + price);

            console.log("i=" + i);
        }
    }).controller('SectionHeaderCtrl', function($scope, $http, $templateCache, $timeout) {
        var url = "http://demos.telerik.com/kendo-ui/service/Products?callback=JSON_CALLBACK";
        var i = 0;
        var it = 10;
        var max = 1000;
        var firstLetter;
        $scope.data = {};
        $scope.items = {};
        $http.jsonp(url)
            .success(function(data) {
                var dataLength = data.length;
                for (var i = 0; i < dataLength; i++) {
                    firstLetter = data[i].ProductName.substring(0, 1).toUpperCase();
                    if (!$scope.items[firstLetter]) $scope.items[firstLetter] = [];
                    $scope.items[firstLetter].push(data[i]);
                    console.log(firstLetter + ":" + data[i]);
                }
                console.log($scope.items);
            });

        $scope.displayAlert = function(name, price) {
            alert(name + " costs $ " + price);
        }
    }).controller('SearchBarCtrl', function($scope, $http) {
        console.log("SearchBarCtrl");
        var url = "http://demos.telerik.com/kendo-ui/service/Products?callback=JSON_CALLBACK";
        var i = 0;
        $scope.data = {};
        $scope.items = [];
        $http.jsonp(url)
            .success(function(data) {
                for (; i < data.length; i++) {
                    $scope.items.push(data[i]);
                }
            });
    });



