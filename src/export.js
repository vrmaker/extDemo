/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-11-3
 * Time: 下午3:39
 * To change this template use File | Settings | File Templates.
 */
//利用extjs导出excel文件---begin
function exportExcel(gridpanel) { //传入的GridPanel的实例
    var vExportContent = gridpanel.getExcelXml(); //获取数据
    if (Ext.isWebKit||Ext.isIE8||Ext.isIE6 || Ext.isIE7 || Ext.isSafari
        || Ext.isSafari2 || Ext.isSafari3) { //判断浏览器

        var fd = Ext.get('frmDummy');
        if (!fd) {
            fd = Ext.DomHelper.append(
                Ext.getBody(), {
                    tag : 'form',
                    method : 'post',
                    id : 'frmDummy',
                    action:'../ExportUrl/export.ashx',
                    target : '_blank',
                    name : 'frmDummy',
                    cls : 'x-hidden',
                    cn : [ {
                        tag : 'input',
                        name : 'exportContent',
                        id : 'exportContent',
                        type : 'hidden'
                    } ]
                }, true);

        }
        fd.child('#exportContent').set( {
            value : vExportContent
        });
        fd.dom.submit();
    } else {
        document.location = 'data:application/vnd.ms-excel;base64,' + Base64
            .encode(vExportContent);
    }
}
