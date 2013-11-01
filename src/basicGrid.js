
Ext.define('KitchenSink.view.grid.ArrayGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Action'
    ],
    alias:'MyBasicGrid',
    xtype: 'array-grid',
//    store: 'Companies',
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    height: 350,
    title: 'Array Grid',
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

    initComponent: function () {
        this.width = 650;
        this.columns = [
            {xtype: 'rownumberer'},
            {
                text     : 'Company',
                flex     : 1,
                sortable : false,
                dataIndex: 'company'
            },
            {
                text     : 'Price',
                width    : 75,
                sortable : true,
                renderer : 'usMoney',
                dataIndex: 'price'
            },
            {
                text     : 'Change',
                width    : 80,
                sortable : true,
                renderer : function(val) {
                    if (val > 0) {
                        return '<span style="color:' + '#73b51e' + ';">' + val + '</span>';
                    } else if (val < 0) {
                        return '<span style="color:' + '#cf4c35' + ';">' + val + '</span>';
                    }
                    return val;
                },
                dataIndex: 'change'
            },
            {
                text     : '% Change',
                width    : 100,
                sortable : true,
                renderer : function(val) {
                    if (val > 0) {
                        return '<span style="color:' + '#73b51e' + '">' + val + '%</span>';
                    } else if (val < 0) {
                        return '<span style="color:' + '#cf4c35' + ';">' + val + '%</span>';
                    }
                    return val;
                },
                dataIndex: 'pctChange'
            },
            {
                text     : 'Last Updated',
                width    : 115,
                sortable : true,
                renderer : Ext.util.Format.dateRenderer('m/d/Y'),
                dataIndex: 'lastChange'
            },
            {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    iconCls: 'sell-col',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        Ext.Msg.alert('Sell', 'Sell ' + rec.get('company'));
                    }
                }, {
                    getClass: function(v, meta, rec) {
                        if (rec.get('change') < 0) {
                            return 'alert-col';
                        } else {
                            return 'buy-col';
                        }
                    },
                    getTip: function(v, meta, rec) {
                        if (rec.get('change') < 0) {
                            return 'Hold stock';
                        } else {
                            return 'Buy stock';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex),
                            action = (rec.get('change') < 0 ? 'Hold' : 'Buy');

                        Ext.Msg.alert(action, action + ' ' + rec.get('company'));
                    }
                }]
            }
        ];

        this.callParent();
    }
});
Ext.define('Company', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'company', type: 'string' },
        {name: 'price', type: 'float'},
        {name: 'change', type: 'float'},
        {name: 'pctChange', type: 'float'},
        {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}

    ]
});

// Array data for the grids
Ext.grid.dummyData = [
    ['1m Co',11.72,-0.02,4.03,'9/1 11:00am'],
    ['2m Co',21.72,1.02,5.03,'9/2 12:00am'],
    ['3m Co',31.72,2.02,6.03,'9/1 11:00am'],
    ['3m Co',41.72,-3.02,7.03,'9/1 11:00pm'],
    ['4m Co',51.72,4.02,-9.03,'9/1 11:00pm']

];