System.register([], function(exports_1) {
    var Country;
    return {
        setters:[],
        execute: function() {
            Country = (function () {
                function Country(Name, Code) {
                    this.Name = Name;
                    this.Code = Code;
                }
                return Country;
            })();
            exports_1("Country", Country);
        }
    }
});
//# sourceMappingURL=country.js.map