angular.module("starter")

  .controller("videosController", function ($scope, $ionicModal) {


    $scope.allImages = [{
      'src': 'img/pic1.jpg'
    }, {
      'src': 'img/pic2.jpg'
    }, {
      'src': 'img/pic3.jpg'
    }];

    $scope.clipSrc = 'img/test.MP4';

    $scope.showImages = function (index) {
      $scope.activeSlide = index;
      $scope.showModal('templates/image-popover.html');
    };

    $scope.playVideo = function (link) {
      $scope.showModal(link);
    };

    $scope.showModal = function (templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
    };

    // Close the modal
    $scope.closeModal = function () {
      $scope.modal.hide();
      $scope.modal.remove()
    };
  });



