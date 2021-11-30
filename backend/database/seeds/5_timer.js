exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("timer")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("timer").insert([
        {
          user_id: 1,
          project_id: 1,
          task_id: 1,
          feature_id: 1,
          problem_id: 1,
          days: 42,
          hours: 36,
          minutes: 14,
          seconds: 41,
          created: new Date(
            "Sun Sep 05 2021 20:54:58 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 2,
          project_id: 2,
          task_id: 2,
          feature_id: 2,
          problem_id: 2,
          days: 49,
          hours: 48,
          minutes: 58,
          seconds: 6,
          created: new Date(
            "Mon Feb 01 2021 19:28:47 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 3,
          project_id: 3,
          task_id: 3,
          feature_id: 3,
          problem_id: 3,
          days: 0,
          hours: 13,
          minutes: 18,
          seconds: 45,
          created: new Date(
            "Fri Aug 13 2021 13:31:54 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 4,
          project_id: 4,
          task_id: 4,
          feature_id: 4,
          problem_id: 4,
          days: 17,
          hours: 16,
          minutes: 18,
          seconds: 6,
          created: new Date(
            "Fri Aug 13 2021 22:12:27 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 5,
          project_id: 5,
          task_id: 5,
          feature_id: 5,
          problem_id: 5,
          days: 14,
          hours: 42,
          minutes: 39,
          seconds: 21,
          created: new Date(
            "Thu Oct 07 2021 01:02:54 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 6,
          project_id: 6,
          task_id: 6,
          feature_id: 6,
          problem_id: 6,
          days: 26,
          hours: 11,
          minutes: 21,
          seconds: 16,
          created: new Date(
            "Fri Jul 23 2021 03:38:11 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 7,
          project_id: 7,
          task_id: 7,
          feature_id: 7,
          problem_id: 7,
          days: 15,
          hours: 17,
          minutes: 19,
          seconds: 33,
          created: new Date(
            "Sun Jul 25 2021 06:49:44 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 8,
          project_id: 8,
          task_id: 8,
          feature_id: 8,
          problem_id: 8,
          days: 20,
          hours: 37,
          minutes: 47,
          seconds: 35,
          created: new Date(
            "Mon Apr 26 2021 22:16:13 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 9,
          project_id: 9,
          task_id: 9,
          feature_id: 9,
          problem_id: 9,
          days: 5,
          hours: 37,
          minutes: 10,
          seconds: 15,
          created: new Date(
            "Sat Sep 25 2021 20:21:09 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 10,
          project_id: 10,
          task_id: 10,
          feature_id: 10,
          problem_id: 10,
          days: 25,
          hours: 27,
          minutes: 44,
          seconds: 18,
          created: new Date(
            "Tue Dec 29 2020 04:36:41 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 11,
          project_id: 11,
          task_id: 11,
          feature_id: 11,
          problem_id: 11,
          days: 13,
          hours: 28,
          minutes: 29,
          seconds: 30,
          created: new Date(
            "Mon Sep 20 2021 02:41:35 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 12,
          project_id: 12,
          task_id: 12,
          feature_id: 12,
          problem_id: 12,
          days: 10,
          hours: 35,
          minutes: 1,
          seconds: 25,
          created: new Date(
            "Fri Jun 25 2021 23:00:07 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 13,
          project_id: 13,
          task_id: 13,
          feature_id: 13,
          problem_id: 13,
          days: 42,
          hours: 33,
          minutes: 11,
          seconds: 11,
          created: new Date(
            "Sun Oct 03 2021 13:25:53 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 14,
          project_id: 14,
          task_id: 14,
          feature_id: 14,
          problem_id: 14,
          days: 27,
          hours: 29,
          minutes: 44,
          seconds: 5,
          created: new Date(
            "Sat Sep 04 2021 20:18:12 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 15,
          project_id: 15,
          task_id: 15,
          feature_id: 15,
          problem_id: 15,
          days: 14,
          hours: 33,
          minutes: 6,
          seconds: 46,
          created: new Date(
            "Tue Aug 31 2021 21:14:49 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 16,
          project_id: 16,
          task_id: 16,
          feature_id: 16,
          problem_id: 16,
          days: 47,
          hours: 53,
          minutes: 25,
          seconds: 45,
          created: new Date(
            "Sun May 30 2021 20:54:24 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 17,
          project_id: 17,
          task_id: 17,
          feature_id: 17,
          problem_id: 17,
          days: 51,
          hours: 21,
          minutes: 51,
          seconds: 11,
          created: new Date(
            "Fri Jan 08 2021 15:06:50 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 18,
          project_id: 18,
          task_id: 18,
          feature_id: 18,
          problem_id: 18,
          days: 25,
          hours: 16,
          minutes: 47,
          seconds: 29,
          created: new Date(
            "Tue Aug 03 2021 20:29:09 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 19,
          project_id: 19,
          task_id: 19,
          feature_id: 19,
          problem_id: 19,
          days: 35,
          hours: 11,
          minutes: 19,
          seconds: 18,
          created: new Date(
            "Tue Sep 21 2021 23:15:36 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
      ]);
    });
};
