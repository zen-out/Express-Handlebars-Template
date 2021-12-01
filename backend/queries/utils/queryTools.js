function readQuery(q) {
    return q.then((result) => {
        console.log(result)
    })
}

function testQuery(q) {
    return q.then((result) => {
        return result
    })
}
let random = Math.floor(Math.random() * 1000000);
let tableValues = {
    users: {
        gmail_id: '',
        facebook_id: '',
        linkedin_id: '',
        spotify_id: '',
        name: '',
        email: '',
        hash: '',
    },
    projects: {
        user_id: '',
        name: '',
        importance: '',
        image_url: '',
        color: '',
        purpose: '',
        friendOneEmail: '',
        friendTwoEmail: '',
        deadline: '',
        status: '',
    },
    features: {
        user_id: '',
        project_id: '',
        title: '',
        keyInfo: '',
        tools: '',
        description: '',
        notes: '',
        structure: '',
        start: '',
        end: '',
        status: '',
        created: '',
    },
    problems: {
        user_id: '',
        project_id: '',
        feature_id: '',
        problem: '',
        whatshouldbe: '',
        whatactuallyis: '',
        hypothesis: '',
        plan: '',
        status: '',
        created: '',
    },
    tasks: {
        user_id: '',
        project_id: '',
        feature_id: '',
        problem_id: '',
        task: '',
        done: '',
        start: '',
        end: '',
        status: '',
    },
    timer: {
        user_id: '',
        project_id: '',
        task_id: '',
        feature_id: '',
        problem_id: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        created: '',
    },
};

module.exports = {
    tableValues,
    readQuery,
    testQuery,
    random
}