App = {
    web3Provider: null,
    contracts: {},
  
    init: function() {
     
      return App.initWeb3();
    },
  
    initWeb3: function() {
       // Is there an injected web3 instance? -> ///METAMASK
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider;
      } else {
        // If no injected web3 instance is detected, fall back to Ganache
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
      }
      web3 = new Web3(App.web3Provider);
  
  
      return App.initContract();
    },
  
      /// INSTANCIAMOS EL CONTRATO
      initContract: function() {
  
      ///LLAMADA FUNCION ASINCRONA ->
          $.getJSON('MyToken.json', function(data) {
       
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        var MyTokenArtifact = data;
        App.contracts.MyToken = TruffleContract(MyTokenArtifact);
  
        // Set the provider for our contract
        App.contracts.MyToken.setProvider(App.web3Provider);
  
      }); 
  
   } 
  
  };
  
  $(function() {
    $(window).load(function() {
      App.init();
    });
  });
  