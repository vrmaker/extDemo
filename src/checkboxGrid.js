/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 13-9-29
 * Time: 下午3:52
 * To change this template use File | Settings | File Templates.
 */
Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.selection.CheckboxModel'
]);

var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});

    Ext.define('Company', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'company'},
            {name: 'price', type: 'float'},
            {name: 'change', type: 'float'},
            {name: 'pctChange', type: 'float'},
            {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'},
            {name: 'industry'},
            {name: 'desc'}
        ]
    });
    // Array data for the grids
    Ext.grid.dummyData = [
        ['3m Co',71.72,0.02,0.03,'9/1 12:00am', 'Manufacturing'],
        ['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am', 'Manufacturing'],
        ['Altria Group Inc',83.81,0.28,0.34,'9/1 12:00am', 'Manufacturing'],
        ['American Express Company',52.55,0.01,0.02,'9/1 12:00am', 'Finance'],
        ['American International Group, Inc.',64.13,0.31,0.49,'9/1 12:00am', 'Services'],
        ['AT&T Inc.',31.61,-0.48,-1.54,'9/1 12:00am', 'Services'],
        ['Boeing Co.',75.43,0.53,0.71,'9/1 12:00am', 'Manufacturing'],
        ['Caterpillar Inc.',67.27,0.92,1.39,'9/1 12:00am', 'Services']

    ];

    // add in some dummy descriptions
    for(var i = 0; i < Ext.grid.dummyData.length; i++){
        Ext.grid.dummyData[i].push('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. ');
    }


    Ext.QuickTips.init();

    var getLocalStore = function() {
        return Ext.create('Ext.data.ArrayStore', {
            model: 'Company',
            data: Ext.grid.dummyData
        });
    };


    ////////////////////////////////////////////////////////////////////////////////////////
    // Grid 2
    ////////////////////////////////////////////////////////////////////////////////////////
    var grid2 = Ext.create('Ext.grid.Panel', {
        id: 'grid2',
        store: getLocalStore(),
        selType: 'checkboxmodel',
        columns: [
            {text: "Company", width: 200, dataIndex: 'company'},
            {text: "Price", renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {text: "Change", dataIndex: 'change'},
            {text: "% Change", dataIndex: 'pctChange'}
            //{text: "Last Updated", width: 135, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ],
        columnLines: true,
        width: 600,
        height: 300,
        frame: true,
        title: 'Framed with Checkbox Selection and Horizontal Scrolling',
        iconCls: 'icon-grid',
        margin: '0 0 20 0',
        renderTo: Ext.getBody()
    });
