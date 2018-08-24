function LocalStorage () {
    var self=this;
    var storage={};
    self.addValue = function (key,value) {
        storage[key]=value;
        alert(storage[key]);
    }
    self.getValue = function (key) {
        if (key in storage) {
            return storage[key];
        }
        else {
            return false;
        }    
    }
    self.deleteValue = function (key) {
        if (key in storage) {
            delete storage[key];
        }
        else {
            alert("No that drink");
        }    
    }
    self.getKeys = function() {
        drinksHash=[];
        for (key in storage) {
            drinksHash.push(key);
        }
        return drinksHash;
    }
}

