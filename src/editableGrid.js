// Define our data model
Ext.define('Employee', {
    extend: 'Ext.data.Model',
    fields: [
        'name',
        'email',
        { name: 'start', type: 'date', dateFormat: 'n/j/Y' },
        { name: 'salary', type: 'float' },
        { name: 'active', type: 'bool' }
    ]
});

// Generate mock employee data
var data = (function() {
    var lasts = ['Jones', 'Smith', 'Lee', 'Wilson', 'Black', 'Williams', 'Lewis', 'Johnson', 'Foot', 'Little', 'Vee', 'Train', 'Hot', 'Mutt'],
        firsts = ['Fred', 'Julie', 'Bill', 'Ted', 'Jack', 'John', 'Mark', 'Mike', 'Chris', 'Bob', 'Travis', 'Kelly', 'Sara'],
        lastLen = lasts.length,
        firstLen = firsts.length,
        usedNames = {},
        data = [],
        s = new Date(2007, 0, 1),
        eDate = Ext.Date,
        now = new Date(),
        getRandomInt = Ext.Number.randomInt,

        generateName = function() {
            var name = firsts[getRandomInt(0, firstLen - 1)] + ' ' + lasts[getRandomInt(0, lastLen - 1)];
            if (usedNames[name]) {
                return generateName();
            }
            usedNames[name] = true;
            return name;
        };

    while (s.getTime() < now.getTime()) {
        var ecount = getRandomInt(0, 3);
        for (var i = 0; i < ecount; i++) {
            var name = generateName();
            data.push({
                start : eDate.add(eDate.clearTime(s, true), eDate.DAY, getRandomInt(0, 27)),
                name : name,
                email: name.toLowerCase().replace(' ', '.') + '@sencha-test.com',
                active: getRandomInt(0, 1),
                salary: Math.floor(getRandomInt(35000, 85000) / 1000) * 1000
            });
        }
        s = eDate.add(s, eDate.MONTH, 1);
    }

    return data;
})();

// create the Data Store
var store = Ext.create('Ext.data.Store', {
    // destroy the store if the grid is destroyed
    autoDestroy: true,
    model: 'Employee',
    proxy: {
        type: 'memory'
    },
    data: data,
    sorters: [{
        property: 'start',
        direction: 'ASC'
    }]
});

var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});
