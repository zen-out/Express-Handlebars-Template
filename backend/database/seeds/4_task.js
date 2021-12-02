exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('task').del()
        .then(function() {
            // Inserts seed entries
            return knex('task').insert([{
                    user_id: 1,
                    hourglass_id: 1,
                    cheatsheet_id: 1,
                    problem_id: 1,
                    name: 'expedite Generic Fundamental heuristic methodology Front-line clear-thinking challenge'
                },
                {
                    user_id: 1,
                    hourglass_id: 2,
                    cheatsheet_id: 2,
                    problem_id: 1,
                    name: 'e-enable Gorgeous Upgradable context-sensitive infrastructure Distributed actuating contingency'
                },
                {
                    user_id: 1,
                    hourglass_id: 3,
                    cheatsheet_id: 3,
                    problem_id: 1,
                    name: 'deploy Unbranded Switchable radical adapter Triple-buffered well-modulated approach'
                },
                {
                    user_id: 1,
                    hourglass_id: 4,
                    cheatsheet_id: 4,
                    problem_id: 1,
                    name: 'transform Refined Total client-server installation Right-sized intangible complexity'
                },
                {
                    user_id: 1,
                    hourglass_id: 5,
                    cheatsheet_id: 5,
                    problem_id: 1,
                    name: 'cultivate Sleek Configurable cohesive Graphical User Interface Synergized scalable attitude'
                },
                {
                    user_id: 2,
                    hourglass_id: 6,
                    cheatsheet_id: 6,
                    problem_id: 2,
                    name: 'integrate Ergonomic Realigned client-driven groupware Multi-tiered impactful software'
                },
                {
                    user_id: 2,
                    hourglass_id: 7,
                    cheatsheet_id: 7,
                    problem_id: 2,
                    name: 'streamline Sleek Public-key systematic adapter Synchronised didactic concept'
                },
                {
                    user_id: 8,
                    hourglass_id: 8,
                    cheatsheet_id: 8,
                    problem_id: 8,
                    name: 'engineer Small Profound hybrid secured line Streamlined fresh-thinking moderator'
                },
                {
                    user_id: 9,
                    hourglass_id: 9,
                    cheatsheet_id: 9,
                    problem_id: 9,
                    name: 'orchestrate Rustic Ameliorated logistical solution Optimized scalable definition'
                },
                {
                    user_id: 10,
                    hourglass_id: 10,
                    cheatsheet_id: 10,
                    problem_id: 10,
                    name: 'reintermediate Small Open-architected 24 hour intranet Monitored client-driven projection'
                },
                {
                    user_id: 11,
                    hourglass_id: 11,
                    cheatsheet_id: 11,
                    problem_id: 11,
                    name: 'visualize Handcrafted Profound intermediate project Fundamental value-added standardization'
                },
                {
                    user_id: 12,
                    hourglass_id: 12,
                    cheatsheet_id: 12,
                    problem_id: 12,
                    name: 'recontextualize Handmade Multi-lateral non-volatile knowledge user Ameliorated systemic project'
                },
                {
                    user_id: 13,
                    hourglass_id: 13,
                    cheatsheet_id: 13,
                    problem_id: 13,
                    name: 'enable Rustic Focused cohesive support Operative well-modulated time-frame'
                },
                {
                    user_id: 14,
                    hourglass_id: 14,
                    cheatsheet_id: 14,
                    problem_id: 14,
                    name: 'harness Ergonomic Seamless systematic encryption Robust reciprocal internet solution'
                },
                {
                    user_id: 15,
                    hourglass_id: 15,
                    cheatsheet_id: 15,
                    problem_id: 15,
                    name: 'visualize Intelligent Self-enabling optimal middleware Open-architected coherent pricing structure'
                },
                {
                    user_id: 16,
                    hourglass_id: 16,
                    cheatsheet_id: 16,
                    problem_id: 16,
                    name: 'envisioneer Practical Programmable 24/7 project Polarised tangible parallelism'
                },
                {
                    user_id: 17,
                    hourglass_id: 17,
                    cheatsheet_id: 17,
                    problem_id: 17,
                    name: 'grow Ergonomic Profit-focused foreground Graphic Interface Optimized systematic leverage'
                },
                {
                    user_id: 18,
                    hourglass_id: 18,
                    cheatsheet_id: 18,
                    problem_id: 18,
                    name: 'enable Refined Ergonomic next generation circuit Adaptive optimal methodology'
                },
                {
                    user_id: 19,
                    hourglass_id: 19,
                    cheatsheet_id: 19,
                    problem_id: 19,
                    name: 'evolve Sleek Proactive intermediate local area network Stand-alone human-resource circuit'
                }
            ]);
        });
};