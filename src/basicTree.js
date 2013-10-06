/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-9-30
 * Time: 上午10:21
 * To change this template use File | Settings | File Templates.
 */

var store1 = Ext.create('Ext.data.TreeStore', {
    root: {
        checked:false,
        expanded: true,
        children: [
            { text: "detention", checked:true,leaf: true},
            { text: "homework", checked:true,expanded: true, children: [
                { text: "book report",checked:true, leaf: true },
                { text: "algebra", checked:true,leaf: true}
            ] },
            { text: "buy lottery tickets", checked:true,leaf: true }
        ]
    }
});

Ext.define('KitchenSink.view.tree.BasicTrees', {
    extend: 'Ext.tree.Panel',
    requires: [
        'Ext.tree.*',
        'Ext.data.*'
    ],
    alias:'myBasicTree',
    xtype: 'treepanel',
    title:'tree',
    width: 300,
    height: 200,
    rootVisible: true,
    store:store1,
    test:2,

    // Sharing the store synchronizes the views:

    initComponent: function() {

        this.callParent();
    }
});

var createTree = function(){

    Ext.require("KitchenSink.view.tree.BasicTrees");
    var tree = Ext.create("myBasicTree",{
        width:300,
        height:500,
        rootVisible:true,
        renderTo:Ext.getBody()

    });
    console.log("store1",tree.store);

    tree.on("expand",function(ePots){
        alert("");
    })
    tree.on("itemclick",function(ePots){
        console.log(ePots);
    })
}
