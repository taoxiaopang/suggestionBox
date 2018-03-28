app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions',
    function($scope, $routeParams, suggestions) {
      console.log("##########");
      $scope.post = suggestions.posts[$routeParams.id];

      $scope.addComment = () => {
        $scope.post.comments.push({
            body: $scope.title,
            upvotes: 0
        });
      };

      $scope.upVote = (comment) => {
        comment.upvotes++;
      };

    }]);