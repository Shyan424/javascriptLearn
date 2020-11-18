$("input.task_name").on("focus", function() {
    $("div.task_add_block").addClass("-on")
});
$("input.task_name").on("blur", function() {
    $("div.task_add_block").removeClass("-on")
});