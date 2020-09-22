var orm = require("../config/orm.js");
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne("burgers", [
            "burger_name", "inhaled"
        ], [
            name, false
        ], cb);
    },
    updateOne: function(id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            inhaled: true
        }, condition, cb);
    }
};

module.exports = burger;