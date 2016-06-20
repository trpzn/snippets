//copied from https://blog.tompawlak.org/number-currency-formatting-javascript
formatNumber: function(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
},

formatCurrency: function(){
    return "$" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
