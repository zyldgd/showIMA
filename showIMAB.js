/*
@anthor : 
    zyl
@dicription :
    show image in cover-layer
@usage :
    <link  type="text/css" rel="stylesheet" href="showIMA.css"/>
    <script type="text/javascript" src="showIMA.js"></script>
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>

    <div class="IMA"><img src="a.png"/></div>
    or
    <div class="IMA gifplay"><img src="a.png"/></div>
*/


//
//  利用滚轮缩放图片
//
function zoomImg(e) {
    var zoom = parseInt(e.style.zoom, 10) || 100;
    zoom += event.wheelDelta / 20;
    //限制缩放程度
    if (zoom > 20 && zoom < 150) e.style.zoom = zoom + '%';
    return false;
}


$(function () {


    //
    //  隐藏遮罩，关闭按钮和图片层，并移除图片
    //
    function htsHide() {
        $(".IMAlayer img").remove();
        $(".IMAcover").hide();
        $(".IMAclose").hide();
        $(".IMAlayer").hide();
    }

    //
    //  原图片点击时，触发事件，显示遮罩等元素
    //
    $(".IMA img").on("click", function () {
        if ($(".IMAclose").length == 0) {
            $("body").append(
                "<div class='IMAclose'>close</div>").append(
                "<div class='IMAcover'></div>").append(
                "<div class='IMAlayer'></div>")
            $(".IMAclose").on("click", function () {
                htsHide();
            })
            $(".IMAcover").on("dblclick", function () {
                htsHide();
            })
            $(".IMAlayer").on("dblclick", function () {
                htsHide();
            })
        } else {
            $(".IMAclose").show();
            $(".IMAcover").show();
            $(".IMAlayer").show();
        }
        //  当元素添加了".gifplay"后，将图片的显示为GIF
        if ($(this).hasClass("gifplay")) {
            var arr = this.src.split('.');
            arr.splice(-1, 1, "gif");
            var src = arr.join('.');
            $(".IMAlayer").append("<img onmousewheel=\"return zoomImg(this)\" src=\"" + src + "\" />");
        } else {
            $(".IMAlayer").append("<img onmousewheel=\"return zoomImg(this)\" src=\"" + this.src + "\" />");
        }
    })
})
