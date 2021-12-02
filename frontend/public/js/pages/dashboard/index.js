var arr = ["get_all_problem", "show_all_problem", "get_one_problem", "show_one_problem", "get_all_task", "get_one_task", "get_all_cheatsheet", "show_all_cheatsheet", "get_one_cheatsheet", "show_one_cheatsheet", "get_all_tag_snippet", "show_one_tag_snippet", "get_one_tag_snippet", "show_all_tag_snippet", "post_problem", "post_task", "post_cheatsheet", "post_tag_snippet", "edit_problem_1", "edit_task_1", "edit_cheatsheet_1", "edit_tag_snippet_1", "delete_problem_1", "delete_cheatsheet_1", "delete_tag_snippet_1", "delete_task_1"]

// let setProblem = Handlebars.compile(`{{#each problem}}<div id='problem-{{id}}' data-id={{id}} data-user_id='{{user_id}}' data-hourglass_id='{{hourglass_id}}' class='each_problem'><br/>
//  <span class='noDisplay' name='{{id}}'></span><br/>
//  <span class='noDisplay' name='{{user_id}}'></span><br/>
//  <span class='noDisplay' name='{{hourglass_id}}'></span><br/>
//  <span class='each_problem_problem_span'>{{problem}}</span><br/>{{/each}}`)

function getAllProblems(type) {
    let element = $(`.show_${type}_all_div`)
    axios.get(`https://debugging.tools/api/get/${type}`).then((array) => {
        console.log("got the data")
        let getData = setProblem({
            problem: array.data
        })
        element.html(getData)
    })
}
getAllProblems("problem")

localStorage.setItem("user_id", 1)
class PostObject {
    constructor(user_id, type, id) {
        console.log("hey")
        this.user_id = user_id
        this.type = type;
        this.id = id
    }

    display(type) {
        let display = $(`#${type}_display_wrapper`)
        axios.get(`http://debugging.tools/api/get/${type}`).then((data) => {
            console.log(data)
        })
    }

    init(type) {

        let submit = $(`#${type}_submit_button`)

    }


}