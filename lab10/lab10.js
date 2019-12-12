window.onload=function(){
    var a = 'asd;';
    var a= '';
    var accounts = [];
    function createAccount(accountname, deposit) {
        return function() {
            accounts.push({accountname:accountname, deposit: deposit});
            console.log(accounts);
        };
    };

    document.getElementById("createnewbutton").addEventListener("click", event1);

function event1(){
    
    let acc = document.getElementById("account").value;
    let dep = document.getElementById("deposit").value;
    createAccount(acc,dep)();
    var kk="";
    for(i = 0; i < accounts.length; i++){
        var list = accounts[i].accountname;
        kk += "Account Name:"+accounts[i].accountname+" Balance"+accounts[i].deposit+ "\n";
    }
    document.getElementById("text").innerHTML = kk;
}


};
