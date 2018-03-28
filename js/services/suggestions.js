app.factory('suggestions', () => {
    var demoSuggestions = {
      posts: [
        {
          title: 'Free pizza at club meetings',
          upvotes: 15,
          comments: [],
        },
        {
          title: 'End all club emails with Laffy Taffy jokes',
          upvotes: 19,
          comments: [],
        },
        {
          title: 'Retrofit water fountain with Gatorade',
          upvotes: 7,
          comments: [],
        },
        {
          title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
          upvotes: 13,
          comments: [],
        },
      ]
    }
    return demoSuggestions;
});