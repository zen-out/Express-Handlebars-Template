exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('hourglass').del()
        .then(function() {
            // Inserts seed entries
            return knex('hourglass').insert([{
                    user_id: 1,
                    importance: 1,
                    difficulty: 1,
                    edit: new Date(),
                    start: new Date(
                        "Mon Aug 09 2021 01:14:33 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 18:04:30 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "to do",
                },
                {
                    user_id: 2,
                    importance: 1,
                    difficulty: 2,
                    edit: new Date(),
                    start: new Date(
                        "Sun Apr 18 2021 11:36:44 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sun Nov 28 2021 05:27:56 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "to do",
                },
                {
                    user_id: 3,
                    importance: 1,
                    difficulty: 3,

                    edit: new Date(),
                    start: new Date(
                        "Sat Aug 21 2021 07:37:07 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sun Nov 28 2021 05:46:38 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "to do",
                },
                {
                    user_id: 4,

                    importance: 2,
                    difficulty: 1,
                    edit: new Date(),
                    start: new Date(
                        "Tue Jun 01 2021 05:00:53 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 21:48:26 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "to do",
                },
                {
                    user_id: 5,

                    importance: 2,
                    difficulty: 2,
                    edit: new Date(),
                    start: new Date(
                        "Sat Jan 09 2021 22:47:08 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 12:42:55 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "doing",
                },
                {
                    user_id: 6,

                    importance: 2,
                    difficulty: 3,
                    edit: new Date(),
                    start: new Date(
                        "Thu Jul 01 2021 19:07:31 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sun Nov 28 2021 06:42:27 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "done",
                },
                {
                    user_id: 7,

                    importance: 3,
                    difficulty: 1,
                    edit: new Date(),
                    start: new Date(
                        "Sat Jul 03 2021 19:38:13 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 18:33:41 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "done",
                },
                {
                    user_id: 8,

                    importance: 3,
                    difficulty: 2,
                    edit: new Date(),
                    start: new Date(
                        "Thu Sep 02 2021 23:59:15 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 13:29:14 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "done",
                },
                {
                    user_id: 9,

                    importance: 3,
                    difficulty: 3,

                    edit: new Date(),
                    start: new Date(
                        "Fri Jun 18 2021 00:40:00 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 12:15:45 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "to do",
                },
                {
                    user_id: 10,

                    importance: 1,
                    difficulty: 1,


                    edit: new Date(),
                    start: new Date(
                        "Tue Apr 20 2021 06:04:55 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 14:26:11 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "to do",
                },
                {
                    user_id: 11,

                    importance: 2,
                    difficulty: 1,

                    edit: new Date(),
                    start: new Date(
                        "Wed Jan 06 2021 05:23:43 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sun Nov 28 2021 09:50:32 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "doing",
                },
                {
                    user_id: 12,

                    importance: 3,
                    difficulty: 1,


                    edit: new Date(),
                    start: new Date(
                        "Sat Aug 21 2021 16:17:54 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 19:35:24 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "doing",
                },
                {
                    user_id: 13,

                    importance: 1,
                    difficulty: 2,


                    edit: new Date(),
                    start: new Date(
                        "Wed Feb 10 2021 20:07:41 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 16:02:04 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "to do",
                },
                {
                    user_id: 14,

                    importance: 2,
                    difficulty: 2,



                    edit: new Date(),
                    start: new Date(
                        "Sat Apr 24 2021 21:21:00 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 21:48:22 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "done",
                },
                {
                    user_id: 15,

                    importance: 3,
                    difficulty: 2,



                    edit: new Date(),
                    start: new Date(
                        "Sun May 30 2021 21:35:28 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 12:32:57 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "doing",
                },
                {
                    user_id: 16,

                    importance: 1,
                    difficulty: 3,



                    edit: new Date(),
                    start: new Date(
                        "Wed Aug 04 2021 17:33:31 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 21:06:32 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "done",
                },
                {
                    user_id: 17,

                    importance: 2,
                    difficulty: 3,


                    edit: new Date(),
                    start: new Date(
                        "Sat Sep 04 2021 05:21:52 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 16:27:40 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "done",
                },
                {
                    user_id: 18,

                    importance: 3,
                    difficulty: 3,



                    edit: new Date(),
                    start: new Date(
                        "Fri Sep 17 2021 09:02:24 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 19:04:10 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "doing",
                },
                {
                    user_id: 19,

                    importance: 2,
                    difficulty: 2,


                    edit: new Date(),
                    start: new Date(
                        "Tue Apr 27 2021 23:26:14 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    end: new Date(
                        "Sat Nov 27 2021 15:43:46 GMT+0800 (Hong Kong Standard Time)"
                    ),
                    status: "doing",
                },
            ]);
        });
};