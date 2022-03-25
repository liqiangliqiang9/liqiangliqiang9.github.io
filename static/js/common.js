/*include.html 文件中的header 和footer模块引用*/
//全局静态资源路径
var ctx_static = "/static"
//全局html资源领
var ctx = "/templates/"
//全局数据信息保存
var ctx_data = {
    "version":"4.7.3",
    "copyrightYear":"2022"
}

/**
 * 资源加载方法
 * typeInfo 资源加载类型 header、footer
 * titleText 类型为header时的标题名
 * */
function includeResourse(typeInfo,titleText){
    <!-- 通用CSS -->
    if("header"==typeInfo){
        document.write("<meta charset='utf-8'>");
        document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        document.write("<meta http-equiv='X-UA-Compatible' content='IE=edge'>");
        document.write("<meta name='keywords' content=''>");
        document.write("<meta name='description' content=''>");
        document.write("<title th:text='"+titleText+"'></title>");
        document.write("<link href=\'"+ctx_static+"/css/bootstrap.min.css?v=3.3.7' rel='stylesheet'/>");
        document.write("<link href=\'"+ctx_static+"/css/font-awesome.min.css?v=4.7.3' rel='stylesheet'/>");
        document.write("<!-- bootstrap-table 表格插件样式 -->");
        document.write("<link href=\'"+ctx_static+"/ajax/libs/bootstrap-table/bootstrap-table.min.css?v=1.18.3' rel='stylesheet'/>");
        document.write("<link href=\'"+ctx_static+"/css/animate.min.css?v=20210831' rel='stylesheet'/>");
        document.write("<link href=\'"+ctx_static+"/css/style.min.css?v=20210831' rel='stylesheet'/>");
        document.write("<link href=\'"+ctx_static+"/ruoyi/css/ry-ui.css?v=4.7.3' rel='stylesheet'/>");
        document.write("<script inline='javascript'></script>");
    }
    <!-- 通用JS -->
    if("footer"==typeInfo){
      document.write("<a id='scroll-up' href='#' class='btn btn-sm display'><i class='fa fa-angle-double-up'></i></a>");
      document.write("<script src=\'"+ctx_static+"/js/jquery.min.js?v=3.6.0'></script>");
      document.write("<script src=\'"+ctx_static+"/js/bootstrap.min.js?v=3.3.7'></script>");
      document.write("<!-- bootstrap-table 表格插件 -->");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/bootstrap-table.min.js?v=1.18.3'></script>");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/locale/bootstrap-table-zh-CN.min.js?v=1.18.3'></script>");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/mobile/bootstrap-table-mobile.js?v=1.18.3'></script>");
      document.write("<!-- jquery-validate 表单验证插件 -->");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/validate/jquery.validate.min.js?v=1.19.3'></script>");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/validate/jquery.validate.extend.js?v=1.19.3'></script>");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/validate/messages_zh.js?v=1.19.3'></script>");
      document.write("<!-- bootstrap-table 表格树插件 -->");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/tree/bootstrap-table-tree.min.js?v=1.18.3'></script>");
      document.write("<!-- 遮罩层 -->");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/blockUI/jquery.blockUI.js?v=2.70.0'></script>");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/iCheck/icheck.min.js?v=1.0.3'></script>");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/layer/layer.min.js?v=3.5.1'></script>");
      document.write("<script src=\'"+ctx_static+"/ajax/libs/layui/layui.min.js?v=2.6.8'></script>");
      document.write("<script src=\'"+ctx_static+"/ruoyi/js/common.js?v=4.7.3'></script>");
      document.write("<script src=\'"+ctx_static+"/ruoyi/js/ry-ui.js?v=4.7.3'></script>");  
    }
    <!-- 通用JS简单版 如：main.html -->
    if("common"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/js/jquery.min.js?v=3.6.0'></script>");
        document.write("<script src=\'"+ctx_static+"/js/bootstrap.min.js?v=3.3.7'></script>");
        document.write("<script src=\'"+ctx_static+"/ajax/libs/layer/layer.min.js?v=3.5.1'></script>");
    }


    <!-- ztree树插件 -->
    if("ztree-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/jquery-ztree/3.5/css/metro/zTreeStyle.css' rel='stylesheet'/>");
    }
    if("ztree-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/jquery-ztree/3.5/js/jquery.ztree.all-3.5.js'></script>");
    }

    <!-- select2下拉框插件 -->
    if("select2-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/select2/select2.min.css?v=4.0.13' rel='stylesheet'/>");
        document.write("<link href=\'"+ctx_static+"/ajax/libs/select2/select2-bootstrap.min.css?v=4.0.13' rel='stylesheet'/>");
    }
    if("select2-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/select2/select2.min.js?v=4.0.13'></script>");
    }

    <!-- bootstrap-select下拉框插件 -->
    if("bootstrap-select-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/bootstrap-select/bootstrap-select.min.css?v=1.13.18' rel='stylesheet'/>");
    }
    if("bootstrap-select-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-select/bootstrap-select.min.js?v=1.13.18'></script>");
    }

    <!-- datetimepicker日期和时间插件 -->
    if("datetimepicker-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/datapicker/bootstrap-datetimepicker.min.css?v=2.4.4' rel='stylesheet'/>");
    }
    if("datetimepicker-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/datapicker/bootstrap-datetimepicker.min.js?v=2.4.4'></script>");
    }

    <!-- ui布局插件 -->
    if("layout-latest-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/jquery-layout/jquery.layout-latest.css?v=1.4.4' rel='stylesheet'/>");
    }
    if("layout-latest-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/jquery-layout/jquery.layout-latest.js?v=1.4.4'></script>");
    }

    <!-- summernote富文本编辑器插件 -->
    if("summernote-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/summernote/summernote.css?v=0.8.18' rel='stylesheet'/>");
    }
    if("summernote-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/summernote/summernote.min.js?v=0.8.18'></script>");
        document.write("<script src=\'"+ctx_static+"/ajax/libs/summernote/summernote-zh-CN.js?v=0.8.18'></script>");
    }

    <!-- cropper图像裁剪插件 -->
    if("cropper-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/cropper/cropper.min.css?v=1.5.12' rel='stylesheet'/>");
    }
    if("cropper-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/cropper/cropper.min.js?v=1.5.12'></script>");
    }

    <!-- jasny功能扩展插件 -->
    if("jasny-bootstrap-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/jasny/jasny-bootstrap.min.css?v=3.1.3' rel='stylesheet'/>");
    }
    if("jasny-bootstrap-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/jasny/jasny-bootstrap.min.js?v=3.1.3'></script>");
    }

    <!-- fileinput文件上传插件 -->
    if("bootstrap-fileinput-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/bootstrap-fileinput/fileinput.min.css?v=5.2.4' rel='stylesheet'/>");
    }
    if("bootstrap-fileinput-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-fileinput/fileinput.min.js?v=5.2.4'></script>");
    }

    <!-- duallistbox双列表框插件 -->
    if("bootstrap-duallistbox-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/duallistbox/bootstrap-duallistbox.min.css?v=3.0.9' rel='stylesheet'/>");
    }
    if("bootstrap-duallistbox-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/duallistbox/bootstrap-duallistbox.min.js?v=3.0.9'></script>");
    }

    <!-- suggest搜索自动补全 -->
    if("bootstrap-suggest-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/suggest/bootstrap-suggest.min.js?v=0.1.29'></script>");
    }

    <!-- typeahead搜索自动补全 -->
    if("bootstrap-typeahead-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/typeahead/bootstrap-typeahead.min.js?v=4.0.2'></script>");
    }

    <!-- 多级联动下拉 -->
    if("jquery-cxselect-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/cxselect/jquery.cxselect.min.js?v=1.4.2'></script>");
    }

    <!-- jsonview格式化和语法高亮JSON格式数据查看插件 -->
    if("jsonview-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/jsonview/jquery.jsonview.css?v=1.2.0' rel='stylesheet'/>");
    }
    if("jsonview-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/jsonview/jquery.jsonview.js?v=1.2.0'></script>");
    }

    <!-- jquery.smartwizard表单向导插件 -->
    if("jquery-smartwizard-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/smartwizard/smart_wizard_all.min.css?v=5.1.1' rel='stylesheet'/>");
    }
    if("jquery-smartwizard-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/smartwizard/jquery.smartWizard.min.js?v=5.1.1'></script>");
    }

    <!-- ECharts百度统计图表插件 -->
    if("echarts-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/report/echarts/echarts-all.min.js?v=4.2.1'></script>");
    }

    <!-- peity图表组合插件 -->
    if("peity-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/report/peity/jquery.peity.min.js?v=2.0.3'></script>");
    }

    <!-- sparkline线状图插件 -->
    if("sparkline-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/report/sparkline/jquery.sparkline.min.js?v=2.1.2'></script>");
    }

    <!-- 表格行拖拽插件 -->
    if("bootstrap-table-reorder-rows-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/reorder-rows/bootstrap-table-reorder-rows.js?v=1.18.3'></script>");
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/reorder-rows/jquery.tablednd.js?v=1.0.3'></script>");
    }

    <!-- 表格列拖拽插件 -->
    if("bootstrap-table-reorder-columns-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/reorder-columns/jquery.dragtable.js?v=5.3.5'></script>");
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/reorder-columns/bootstrap-table-reorder-columns.js?v=1.18.3'></script>");
    }

    <!-- 表格列宽拖动插件 -->
    if("bootstrap-table-resizable-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/resizable/jquery.resizableColumns.min.js?v=0.1.0'></script>");
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/resizable/bootstrap-table-resizable.js?v=1.18.3'></script>");
    }

    <!-- 表格行内编辑插件 -->
    if("bootstrap-editable-css"==typeInfo){
        document.write("<link href=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/editable/bootstrap-editable.css?v=1.5.1' rel='stylesheet'/>");
    }
    if("bootstrap-table-editable-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/editable/bootstrap-editable.min.js?v=1.5.1'></script>");
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/editable/bootstrap-table-editable.js?v=1.18.3'></script>");
    }

    <!-- 表格导出插件 -->
    if("bootstrap-table-export-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/export/bootstrap-table-export.js?v=1.18.3'></script>");
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/export/tableExport.min.js?v=1.10.24'></script>");
    }

    <!-- 表格冻结列插件 -->
    if("bootstrap-table-fixed-columns-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/columns/bootstrap-table-fixed-columns.js?v=1.18.3'></script>");
    }

    <!-- 表格自动刷新插件 -->
    if("bootstrap-table-auto-refresh-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/auto-refresh/bootstrap-table-auto-refresh.js?v=1.18.3'></script>");
    }

    <!-- 表格打印插件 -->
    if("bootstrap-table-print-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/print/bootstrap-table-print.js?v=1.18.3'></script>");
    }

    <!-- 表格视图分页插件 -->
    if("bootstrap-table-custom-view-js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/bootstrap-table/extensions/custom-view/bootstrap-table-custom-view.js?v=1.18.3'></script>");
    }

    if("jquery-ui"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/js/jquery-ui-1.10.4.min.js'></script>");
    }
    if("jquery.tmpl.js"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/js/jquery.tmpl.js'></script>");
    }
    if("flot"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/ajax/libs/flot/jquery.flot.js'></script>");
    }
    if("jsutils"==typeInfo){
        document.write("<script src=\'"+ctx_static+"/js/jsutils.js'></script>");
    }
}






