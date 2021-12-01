$(() => {
    $(".form").each(function(form) {
        form.change("change", function(event) {
            let getType = event.target.dataset
            console.log(getType)

        })
    })
})
console.log("dashboard public file")

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