app.controller('HomeController', [
    '$scope', 'suggestions',
    function($scope, suggestions) {
        $scope.posts = suggestions.posts;

        $scope.addSuggestion = () => {
            if(!$scope.title || $scope.title === "") {
                return;
            }

            $scope.posts.push({
                title: $scope.title,
                upvotes: 0,
                comments: [],
            });

            $scope.title = '';
        };

        $scope.upVote = (post) => {
            post.upvotes++;
        };
    }
]);