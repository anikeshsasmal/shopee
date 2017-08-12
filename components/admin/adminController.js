app.controller('adminCtrl', ['$scope', 'Quest_Service', function ($scope, Quest_Service) {

  $scope.accounts = [
    {
      accName: 'First Account',
      bank: 'ANZ',
      cards: [
        {
          nameOnCard: 'Chandler',
          cardName: 'ANZ VISA debit',
          number: '0000',
          balance: '1000',
          type: 'VISA',
          accountType: 'debit'
        },
        {
          nameOnCard: 'Chandler',
          cardName: 'ANZ VISA credit',
          number: '1111',
          balance: '5000',
          type: 'VISA',
          accountType: 'credit'
        }
      ]
    },
    {
      accName: 'Second Account',
      bank: 'NAB',
      cards: [
        {
          nameOnCard: 'Chandler',
          cardName: 'NAB VISA debit',
          number: '2000',
          balance: '5000',
          type: 'VISA',
          accountType: 'debit'
        },
        {
          nameOnCard: 'Chandler',
          cardName: 'NAB VISA credit',
          number: '2111',
          balance: '10000',
          type: 'VISA',
          accountType: 'credit'
        }
      ]
    },
    {
      accName: 'Third Account',
      bank: 'AMEX',
      cards: [
        {
          nameOnCard: 'Chandler',
          cardName: 'AMEX credit',
          number: '3000',
          balance: '25000',
          type: 'AMEX',
          accountType: 'credit'
        }
      ]
    }
  ];




  $scope.getTransactions = function (account) {
    
  }
}]);