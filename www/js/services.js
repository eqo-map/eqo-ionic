angular.module('starter.services', [])

.factory('Stories', function(Friends){
  var stories = [
    {
      id: 0,
      title: 'Love message for you',
      description: 'Really miss you honey',
      geo: {
        lat:52.5140, lng:13.3766
      },
      soundcloud: {
        id: 53730636
      },
      user: Friends.get(1) ,
      likes: 1,
      comments: 3,
      private: true,
      posted: '1 minute ago'
    },
    {
      id: 1,
      title: 'History of Brandenburger Tor',
      description: '',
      geo: {
        lat:52.5159, lng:13.3777
      },
      soundcloud: {
        id: 53730637
      },
      user: Friends.get(2),
      likes: 56,
      comments: 24,
      private: false,
      posted: '20 minutes ago'
    },
    {
      id: 2,
      title: 'Hello from Bahamy',
      description: 'Family on holiday',
      geo: {
        lat:52.5159, lng:13.3777
      },
      soundcloud: {
        id: 53730637
      },
      user: Friends.get(4),
      likes: 18,
      comments: 6,
      private: false,
      posted: '4 days ago'
    },
    {
      id: 3,
      title: 'Never forget',
      description: 'An untold story',
      geo: {
        lat:52.5159, lng:13.3777
      },
      soundcloud: {
        id: 53730637
      },
      user: Friends.get(3),
      likes: 1,
      comments: 2,
      private: true,
      posted: '2 months ago'
    },
    {
      id: 1,
      title: 'Trip of the best friends',
      description: 'Funny stories from Berlin',
      geo: {
        lat:52.5159, lng:13.3777
      },
      soundcloud: {
        id: 53730637
      },
      user: Friends.get(1),
      likes: 24,
      comments: 17,
      private: true,
      posted: '1 year ago'
    }
  ];

  return {
    all: function(){
      return stories;
    },
    get: function(storyId) {
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].id === parseInt(storyId)) {
          return stories[i];
        }
      }
      return null;
    }
  };
})

.factory('Friends', function() {
  var friends = [{
    id: 0,
    name: 'Miranda Kerr',
    username: 'mirr1',
    face: 'http://img2.rnkr-static.com/list_img/5210/925210/C300/hottest-women-with-dimples-u2.jpg'
  }, {
    id: 1,
    name: 'Max Lynx',
    username: 'lynx_j',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    username: '4d4m',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    username: 'perry_gov',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Jessica Harrington',
    username: 'jess66',
    face: 'http://www.fashionihub.com/wp-content/uploads/2010/10/Best-Perfumes-For-Women.jpg'
  }];

  return {
    all: function(){
      return friends;
    },
    get: function(id) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(id)) {
          return friends[i];
        }
      }
      return null;
    }
  };
});
