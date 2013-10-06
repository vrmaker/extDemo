/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-10-4
 * Time: 下午1:44
 * To change this template use File | Settings | File Templates.
 */

Ext.onReady(function(){
    Ext.create('Ext.container.Container',{
        layout:{
            type:'hbox',
            align:'bottom'
        },

        width:600,
        height:600,
        renderTo:Ext.getBody(),
        border:1,
        style: {borderColor:'#000000', borderStyle:'solid', borderWidth:'1px'},
        defaults: {
            // labelWidth: 80,
            // implicitly create Container by specifying xtype
            xtype: 'datefield',
            flex: 1,
            style: {
                //padding: '40px'
            }
        },
        items : [
            {
                xType:'datefield',
                name : 'start',
                fieldLabel:'start time'
            },
            {
                xType:'datefield',
                name:'end',
                fieldLabel:'end time'
            }
        ]

})
})
