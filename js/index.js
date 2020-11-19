$("input.task_name").on("focus", function() {
    $("div.task_add_block").addClass("-on")
});
$("input.task_name").on("blur", function() {
    $("div.task_add_block").removeClass("-on")
});

$("button.task_add").on("click", function() {
    addTask();
})
$("input.task_name").on("keydown", function(e) {
    if(e.which == 13) {
        addTask();
    }
});

// 清空跟刪除欄位
$(document).on("click", "button.btn_delete", function(e) {
    console.log(e);
    $(e.target).closest("li").slideUp(1000, function() {
        console.log(this);
        $(this).remove();
    });
});

$("button.btn_empty").on("click", function() {
    $("ul.task_list").find("li").slideUp(1000, function() {
        $(this).remove();
    });
})
// 更新欄位內文字
$(document).on("click", "button.btn_update", function(e) {
    let pTag = $(e.target).parents("div").eq(2).find("p");
    let pInput = $(e.target).parents("div").eq(2).find("input");
    let pText = pTag.text();
    console.log($(e.target).parents("div"));
    console.log(pTag);
    if(pTag.text() != "") {
        pTag.html(`<input type="text" class="task_name" placeholder="輸入待辦事項…" value="${pText}">`)
    }else if($(e.target).parents("div").eq(2).find("input").val() != "") {
        let newText = pInput.val().trim();
        $(pInput).on("keydown", function(e) {
            if(e.which == 13) {
                $(this).closest("p").html(newText);
            }
        });
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
            )
            $("input.task_name").val("");
        
    }
}
