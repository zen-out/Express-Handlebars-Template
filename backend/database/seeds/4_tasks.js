exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          user_id: 1,
          project_id: 1,
          feature_id: 1,
          problem_id: 1,
          task: "expedite Generic Fundamental heuristic methodology Front-line clear-thinking challenge",
          done: true,
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
          project_id: 2,
          feature_id: 2,
          problem_id: 2,
          task: "e-enable Gorgeous Upgradable context-sensitive infrastructure Distributed actuating contingency",
          done: true,
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
          project_id: 3,
          feature_id: 3,
          problem_id: 3,
          task: "deploy Unbranded Switchable radical adapter Triple-buffered well-modulated approach",
          done: true,
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
          project_id: 4,
          feature_id: 4,
          problem_id: 4,
          task: "transform Refined Total client-server installation Right-sized intangible complexity",
          done: false,
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
          project_id: 5,
          feature_id: 5,
          problem_id: 5,
          task: "cultivate Sleek Configurable cohesive Graphical User Interface Synergized scalable attitude",
          done: true,
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
          project_id: 6,
          feature_id: 6,
          problem_id: 6,
          task: "integrate Ergonomic Realigned client-driven groupware Multi-tiered impactful software",
          done: true,
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
          project_id: 7,
          feature_id: 7,
          problem_id: 7,
          task: "streamline Sleek Public-key systematic adapter Synchronised didactic concept",
          done: false,
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
          project_id: 8,
          feature_id: 8,
          problem_id: 8,
          task: "engineer Small Profound hybrid secured line Streamlined fresh-thinking moderator",
          done: false,
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
          project_id: 9,
          feature_id: 9,
          problem_id: 9,
          task: "orchestrate Rustic Ameliorated logistical solution Optimized scalable definition",
          done: false,
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
          project_id: 10,
          feature_id: 10,
          problem_id: 10,
          task: "reintermediate Small Open-architected 24 hour intranet Monitored client-driven projection",
          done: true,
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
          project_id: 11,
          feature_id: 11,
          problem_id: 11,
          task: "visualize Handcrafted Profound intermediate project Fundamental value-added standardization",
          done: true,
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
          project_id: 12,
          feature_id: 12,
          problem_id: 12,
          task: "recontextualize Handmade Multi-lateral non-volatile knowledge user Ameliorated systemic project",
          done: false,
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
          project_id: 13,
          feature_id: 13,
          problem_id: 13,
          task: "enable Rustic Focused cohesive support Operative well-modulated time-frame",
          done: true,
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
          project_id: 14,
          feature_id: 14,
          problem_id: 14,
          task: "harness Ergonomic Seamless systematic encryption Robust reciprocal internet solution",
          done: true,
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
          project_id: 15,
          feature_id: 15,
          problem_id: 15,
          task: "visualize Intelligent Self-enabling optimal middleware Open-architected coherent pricing structure",
          done: false,
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
          project_id: 16,
          feature_id: 16,
          problem_id: 16,
          task: "envisioneer Practical Programmable 24/7 project Polarised tangible parallelism",
          done: false,
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
          project_id: 17,
          feature_id: 17,
          problem_id: 17,
          task: "grow Ergonomic Profit-focused foreground Graphic Interface Optimized systematic leverage",
          done: false,
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
          project_id: 18,
          feature_id: 18,
          problem_id: 18,
          task: "enable Refined Ergonomic next generation circuit Adaptive optimal methodology",
          done: false,
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
          project_id: 19,
          feature_id: 19,
          problem_id: 19,
          task: "evolve Sleek Proactive intermediate local area network Stand-alone human-resource circuit",
          done: false,
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
