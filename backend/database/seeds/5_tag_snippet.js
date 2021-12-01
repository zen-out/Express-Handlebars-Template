exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tag_snippet').del()
        .then(function() {
            // Inserts seed entries
            return knex('tag_snippet').insert([{
                    user_id: 1,
                    hourglass_id: 1,
                    cheatsheet_id: 1,
                    problem_id: 1,
                    task_id: 1,
                    tag: 'to do',
                    link: 'www.github.com/lezzles11',
                    snippet: 'expedite Generic Fundamental heuristic methodology Front-line clear-thinking challenge'
                },
                {
                    user_id: 2,
                    hourglass_id: 2,
                    cheatsheet_id: 2,
                    problem_id: 2,
                    task_id: 2,
                    tag: 'to do',
                    link: 'www.github.com/lezzles11',
                    snippet: 'e-enable Gorgeous Upgradable context-sensitive infrastructure Distributed actuating contingency'
                },
                {
                    user_id: 3,
                    hourglass_id: 3,
                    cheatsheet_id: 3,
                    problem_id: 3,
                    task_id: 3,
                    tag: 'to do',
                    link: 'www.github.com/lezzles11',
                    snippet: 'deploy Unbranded Switchable radical adapter Triple-buffered well-modulated approach'
                },
                {
                    user_id: 4,
                    hourglass_id: 4,
                    cheatsheet_id: 4,
                    problem_id: 4,
                    task_id: 4,
                    tag: 'to do',
                    link: 'www.github.com/lezzles11',
                    snippet: 'transform Refined Total client-server installation Right-sized intangible complexity'
                },
                {
                    user_id: 5,
                    hourglass_id: 5,
                    cheatsheet_id: 5,
                    problem_id: 5,
                    task_id: 5,
                    tag: 'doing',
                    link: 'www.github.com/lezzles11',
                    snippet: 'cultivate Sleek Configurable cohesive Graphical User Interface Synergized scalable attitude'
                },
                {
                    user_id: 6,
                    hourglass_id: 6,
                    cheatsheet_id: 6,
                    problem_id: 6,
                    task_id: 6,
                    tag: 'done',
                    link: 'www.github.com/lezzles11',
                    snippet: 'integrate Ergonomic Realigned client-driven groupware Multi-tiered impactful software'
                },
                {
                    user_id: 7,
                    hourglass_id: 7,
                    cheatsheet_id: 7,
                    problem_id: 7,
                    task_id: 7,
                    tag: 'done',
                    link: 'www.github.com/lezzles11',
                    snippet: 'streamline Sleek Public-key systematic adapter Synchronised didactic concept'
                },
                {
                    user_id: 8,
                    hourglass_id: 8,
                    cheatsheet_id: 8,
                    problem_id: 8,
                    task_id: 8,
                    tag: 'done',
                    link: 'www.github.com/lezzles11',
                    snippet: 'engineer Small Profound hybrid secured line Streamlined fresh-thinking moderator'
                },
                {
                    user_id: 9,
                    hourglass_id: 9,
                    cheatsheet_id: 9,
                    problem_id: 9,
                    task_id: 9,
                    tag: 'to do',
                    link: 'www.github.com/lezzles11',
                    snippet: 'orchestrate Rustic Ameliorated logistical solution Optimized scalable definition'
                },
                {
                    user_id: 10,
                    hourglass_id: 10,
                    cheatsheet_id: 10,
                    problem_id: 10,
                    task_id: 10,
                    tag: 'to do',
                    link: 'www.github.com/lezzles11',
                    snippet: 'reintermediate Small Open-architected 24 hour intranet Monitored client-driven projection'
                },
                {
                    user_id: 11,
                    hourglass_id: 11,
                    cheatsheet_id: 11,
                    problem_id: 11,
                    task_id: 11,
                    tag: 'doing',
                    link: 'www.github.com/lezzles11',
                    snippet: 'visualize Handcrafted Profound intermediate project Fundamental value-added standardization'
                },
                {
                    user_id: 12,
                    hourglass_id: 12,
                    cheatsheet_id: 12,
                    problem_id: 12,
                    task_id: 12,
                    tag: 'doing',
                    link: 'www.github.com/lezzles11',
                    snippet: 'recontextualize Handmade Multi-lateral non-volatile knowledge user Ameliorated systemic project'
                },
                {
                    user_id: 13,
                    hourglass_id: 13,
                    cheatsheet_id: 13,
                    problem_id: 13,
                    task_id: 13,
                    tag: 'to do',
                    link: 'www.github.com/lezzles11',
                    snippet: 'enable Rustic Focused cohesive support Operative well-modulated time-frame'
                },
                {
                    user_id: 14,
                    hourglass_id: 14,
                    cheatsheet_id: 14,
                    problem_id: 14,
                    task_id: 14,
                    tag: 'done',
                    link: 'www.github.com/lezzles11',
                    snippet: 'harness Ergonomic Seamless systematic encryption Robust reciprocal internet solution'
                },
                {
                    user_id: 15,
                    hourglass_id: 15,
                    cheatsheet_id: 15,
                    problem_id: 15,
                    task_id: 15,
                    tag: 'doing',
                    link: 'www.github.com/lezzles11',
                    snippet: 'visualize Intelligent Self-enabling optimal middleware Open-architected coherent pricing structure'
                },
                {
                    user_id: 16,
                    hourglass_id: 16,
                    cheatsheet_id: 16,
                    problem_id: 16,
                    task_id: 16,
                    tag: 'done',
                    link: 'www.github.com/lezzles11',
                    snippet: 'envisioneer Practical Programmable 24/7 project Polarised tangible parallelism'
                },
                {
                    user_id: 17,
                    hourglass_id: 17,
                    cheatsheet_id: 17,
                    problem_id: 17,
                    task_id: 17,
                    tag: 'done',
                    link: 'www.github.com/lezzles11',
                    snippet: 'grow Ergonomic Profit-focused foreground Graphic Interface Optimized systematic leverage'
                },
                {
                    user_id: 18,
                    hourglass_id: 18,
                    cheatsheet_id: 18,
                    problem_id: 18,
                    task_id: 18,
                    tag: 'doing',
                    link: 'www.github.com/lezzles11',
                    snippet: 'enable Refined Ergonomic next generation circuit Adaptive optimal methodology'
                },
                {
                    user_id: 19,
                    hourglass_id: 19,
                    cheatsheet_id: 19,
                    problem_id: 19,
                    task_id: 19,
                    tag: 'doing',
                    link: 'www.github.com/lezzles11',
                    snippet: 'evolve Sleek Proactive intermediate local area network Stand-alone human-resource circuit'
                }
            ]);
        });
};