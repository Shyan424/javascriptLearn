$("input.task_name").on("focus", function() {
    $("div.task_add_block").addClass("-on")
});
$("input.task_name").on("blur", function() {
    $("div.task_add_block").removeClass("-on")
});

$("button.task_add").on("click", function() {
    addTask();
});
$("input.task_name").on("keydown", function(e) {
    if(e.which == 13) {
        addTask();
    }
});

// 清空跟刪除欄位
$(document).on("click", "button.btn_delete", function(e) {
    console.log(e);
    if(confirm("確定嗎??")) {
        $(e.target).closest("li").slideUp(1000, function() {
            console.log(this);
            $(this).remove();
        });
    }
});

$("button.btn_empty").on("click", function() {
    if(confirm("確定嗎??")) {
        $("ul.task_list").find("li").slideUp(1000, function() {
                $(this).remove();
        });
    }

});
// 更新欄位內文字
$(document).on("click", "button.btn_update", function(e) {
    let pTag = $(e.target).parents("div").eq(2).find("p");
    let pInput = $(e.target).parents("div").eq(2).find("input");
    let pText = pTag.text();
    console.log(this)
    if(pTag.text() != "") {
        pTag.html(`<input type="text" class="task_name_update -none" placeholder="輸入待辦事項…" value="${pText}">`)
    }else if(pInput.val() != "") {
        let newText = pInput.val().trim();
        pTag.html(newText);
    } else {
        alert("請輸入代辦事項");
    }
});

// 插入欄位
function addTask() {
    if($("input.task_name").val() == "") {
        alert("請輸入代辦事項");
    } 
    if($("input.task_name").val() != ""){
        $(".task_list").prepend(
                `<li>
                    <div class="item_flex">
                        <div class="left_block">
                            <div class="btn_flex">
                                <button type="button" class="btn_up">往上</button>
                                <button type="button" class="btn_down">往下</button>
                            </div>
                        </div>
                        <div class="middle_block">
                            <div class="star_block">
                                <span class="star" data-star="1"><i class="fas fa-star"></i></span>
                                <span class="star" data-star="2"><i class="fas fa-star"></i></span>
                                <span class="star" data-star="3"><i class="fas fa-star"></i></span>
                                <span class="star" data-star="4"><i class="fas fa-star"></i></span>
                                <span class="star" data-star="5"><i class="fas fa-star"></i></span>
                            </div>
                            <p class="para">${$("input.task_name").val().trim()}</p>
                        </div>
                        <div class="right_block">
                            <div class="btn_flex">
                                <button type="button" class="btn_update">更新</button>
                                <button type="button" class="btn_delete">移除</button>
                            </div>
                        </div>
                    </div>
                </li>`
            );
            $("input.task_name").val("");
        
    }
}
// 改變位置
$(document).on("click", "button.btn_up", function(e) {
    if(!$(this).closest("li").is(":first-child")) {
        $(e.target).closest("li").prev("li").before($(e.target).closest("li"));
    }
});

$(document).on("click", "button.btn_down", function(e) {
    if(!$(this).closest("li").is(":last-child")) {
        $(e.target).closest("li").next("li").after($(e.target).closest("li"));
    }
});
// 星號變色
$(document).on("click", "span.star", "span.star.-on", function(e) {
    if(!$(this).hasClass("-on")) {
        console.log(this);
        $(this).prevAll().addClass("-on");
        $(this).addClass("-on");
    }
    if($(this).hasClass("-on")) {
        $(this).nextAll().removeClass("-on");
    }
});