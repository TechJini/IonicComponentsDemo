angular.module('starter.services', [])
    .factory('SampleService', function() {
        var items = [{
                name: "ListView",
                url: "nested/list"
            }, {
                name: "Date picker",
                url: "app/datepicker"
            }, {
                name: "Switches",
                url: "app/switches"
            }, {
                name: "Seek bar",
                url: "app/seekbar"
            }, {
                name: "Checkbox",
                url: "app/checkbox"
            }, {
                name: "Radio Group",
                url: "app/radiogroup"
            }, {
                name: "EditText/TextView",
                url: "app/edittext"
            }, {
                name: "Button",
                url: "app/button"
            }, {
                name: "Dropdown",
                url: "app/spinner"
            }, {
                name: "Progress bar",
                url: "app/progressbar"
            }, {
                name: "Dialogs",
                url: "app/dialogs"
            }
            // , {
            //     name: "Search bar/Automcomplete",
            //     url: "notyetimplemented"
            // }
            // , {
            //     name: "Tab",
            //     url: "tab"
            // }
            // , {
            //     name: "Expandale Listview",
            //     url: "notyetimplemented"
            // }, {
            //     name: "GridView",
            //     url: "notyetimplemented"
            // }, {
            //     name: "View Pager",
            //     url: "notyetimplemented"
            // }, {
            //     name: "Rating bar",
            //     url: "notyetimplemented"
            // }, {
            //     name: "Menu",
            //     url: "notyetimplemented"
            // }, {
            //     name: "Animations",
            //     url: "notyetimplemented"
            // }
        ];
        return {
            all: function() {
                return items;
            }
        }
    }).factory('ListService', function() {
        var listItems = [{
                name: "Pull To Refresh",
                url: "app/list/pulltorefresh"
            }, {
                name: "Section Headers",
                url: "app/list/sectionheaders"
            }, {
                name: "Search Bar",
                url: "app/list/searchbar"
            }
            // , {
            //     name: "Swipe To Delete",
            //     url: "nested/swipetodelete"
            // }
        ];
        return {
            all: function() {
                return listItems;
            }
        }
    });