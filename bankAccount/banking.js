

window.onload= function(){

  
    let accountInfoList=[];
    var bankingModule= (function(){
  
      var name;
      var balance;
      function createAccount(){
      
        name= document.getElementById("nameInp").value;
        balance=document.getElementById("depositInp").value;
        if(name=="" || balance==""){
          return null;
        }
        return{
          accname: name,
          deposit: balance
        }
      
      }
    
      return {
        account: function(){
  
          return createAccount();
          
        }
      }
    
    }());
  
  
    var btn= document.getElementById("btn");
    btn.onclick= updateList;
    
    function updateList(){
  
      var ac= bankingModule.account();
      if (ac==null){
        alert("Please enter account name and deposit ");
        return;}
  
      accountInfoList[accountInfoList.length]=ac;
      
      showAccounts();
  
    }
  
    function showAccounts(){
      var allAcc="";
      accountInfoList.forEach(function(item, index, array) {
        allAcc+= "Account Name: "+ item["accname"] + "   Balance: "+ item["deposit"]+"\n";
      })
    
      document.getElementById("txt").innerHTML= allAcc;
  
  
    }
    
   
  
    
  } 
    
    
  
  