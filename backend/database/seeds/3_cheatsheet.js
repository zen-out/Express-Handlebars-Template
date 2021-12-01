exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cheatsheet').del()
        .then(function() {
            // Inserts seed entries
            return knex('cheatsheet').insert([{
                    user_id: 1,
                    problem_id: 1,
                    title: 'recontextualize Visionary high-level local area network',
                    key_info: 'Diverse didactic challenge magnetic Fresh',
                    description: 'Synergized local capacity world-class Cotton',
                    notes: 'monetize Handcrafted Integrated zero administration product',
                    structure: 'target Rubber',
                    hourglass_id: 1
                },
                {
                    user_id: 2,
                    problem_id: 2,
                    title: 'incentivize Cross-group homogeneous array',
                    key_info: 'Reduced global approach wireless Rubber',
                    description: 'Ameliorated value-added open system ubiquitous Frozen',
                    notes: 'maximize Sleek Stand-alone user-facing parallelism',
                    structure: 'productize Frozen',
                    hourglass_id: 2
                },
                {
                    user_id: 3,
                    problem_id: 3,
                    title: 'transform User-centric heuristic customer loyalty',
                    key_info: 'User-centric logistical model bleeding-edge Granite',
                    description: 'Polarised regional standardization next-generation Fresh',
                    notes: 'recontextualize Awesome Expanded web-enabled ability',
                    structure: 'recontextualize Concrete',
                    hourglass_id: 3
                },
                {
                    user_id: 4,
                    problem_id: 4,
                    title: 'target Up-sized client-server collaboration',
                    key_info: 'Multi-layered needs-based archive cross-media Rubber',
                    description: 'Persistent attitude-oriented matrices magnetic Cotton',
                    notes: 'redefine Tasty Visionary human-resource ability',
                    structure: 'reinvent Granite',
                    hourglass_id: 4
                },
                {
                    user_id: 5,
                    problem_id: 5,
                    title: 'streamline Switchable background Graphical User Interface',
                    key_info: 'Optional next generation Graphic Interface revolutionary Soft',
                    description: 'Customer-focused 4th generation conglomeration world-class Fresh',
                    notes: 'seize Small Virtual asynchronous info-mediaries',
                    structure: 'envisioneer Plastic',
                    hourglass_id: 5
                },
                {
                    user_id: 6,
                    problem_id: 6,
                    title: 'streamline Right-sized human-resource moderator',
                    key_info: 'Intuitive directional algorithm granular Steel',
                    description: 'Customizable bi-directional function turn-key Fresh',
                    notes: 'reinvent Unbranded Polarised maximized interface',
                    structure: 'streamline Steel',
                    hourglass_id: 6
                },
                {
                    user_id: 7,
                    problem_id: 7,
                    title: 'deploy Managed uniform strategy',
                    key_info: 'Automated secondary initiative real-time Frozen',
                    description: 'Optimized executive budgetary management synergistic Frozen',
                    notes: 'disintermediate Practical Profound attitude-oriented knowledge user',
                    structure: 'orchestrate Metal',
                    hourglass_id: 7
                },
                {
                    user_id: 8,
                    problem_id: 8,
                    title: 'iterate Automated solution-oriented interface',
                    key_info: 'User-centric encompassing data-warehouse transparent Plastic',
                    description: 'Up-sized even-keeled algorithm e-business Cotton',
                    notes: 'brand Small Multi-channelled static application',
                    structure: 'implement Fresh',
                    hourglass_id: 8
                },
                {
                    user_id: 9,
                    problem_id: 9,
                    title: 'benchmark Enhanced 6th generation matrices',
                    key_info: 'Cloned web-enabled orchestration value-added Fresh',
                    description: 'Vision-oriented intangible local area network intuitive Fresh',
                    notes: 'engage Tasty Distributed disintermediate implementation',
                    structure: 'harness Frozen',
                    hourglass_id: 9
                },
                {
                    user_id: 10,
                    problem_id: 10,
                    title: 'engage Cross-platform reciprocal definition',
                    key_info: 'Synchronised scalable contingency intuitive Fresh',
                    description: 'Right-sized interactive definition impactful Fresh',
                    notes: 'iterate Practical Face to face client-driven artificial intelligence',
                    structure: 'morph Frozen',
                    hourglass_id: 10
                },
                {
                    user_id: 11,
                    problem_id: 11,
                    title: 'deploy Focused empowering task-force',
                    key_info: 'Triple-buffered discrete success vertical Granite',
                    description: 'Upgradable dedicated strategy 24/365 Wooden',
                    notes: 'engineer Gorgeous Integrated non-volatile benchmark',
                    structure: 'transform Fresh',
                    hourglass_id: 11
                },
                {
                    user_id: 12,
                    problem_id: 12,
                    title: 'facilitate User-friendly fault-tolerant customer loyalty',
                    key_info: 'Customer-focused real-time alliance holistic Concrete',
                    description: 'Multi-lateral optimizing migration cutting-edge Plastic',
                    notes: 'transition Gorgeous Seamless disintermediate system engine',
                    structure: 'implement Fresh',
                    hourglass_id: 12
                },
                {
                    user_id: 13,
                    problem_id: 13,
                    title: 'architect Up-sized incremental infrastructure',
                    key_info: 'Front-line heuristic flexibility intuitive Cotton',
                    description: 'Persevering 5th generation leverage best-of-breed Rubber',
                    notes: 'scale Ergonomic Exclusive empowering neural-net',
                    structure: 'extend Concrete',
                    hourglass_id: 13
                },
                {
                    user_id: 14,
                    problem_id: 14,
                    title: 'recontextualize Digitized foreground conglomeration',
                    key_info: 'Persevering radical data-warehouse killer Metal',
                    description: 'Optional heuristic firmware back-end Plastic',
                    notes: 'generate Fantastic Diverse methodical focus group',
                    structure: 'deliver Wooden',
                    hourglass_id: 14
                },
                {
                    user_id: 15,
                    problem_id: 15,
                    title: 'whiteboard Centralized clear-thinking data-warehouse',
                    key_info: 'Programmable neutral Graphical User Interface seamless Plastic',
                    description: 'Customizable zero defect access user-centric Steel',
                    notes: 'engage Fantastic Configurable maximized forecast',
                    structure: 'orchestrate Granite',
                    hourglass_id: 15
                },
                {
                    user_id: 16,
                    problem_id: 16,
                    title: 'incubate Balanced object-oriented monitoring',
                    key_info: 'Optimized uniform contingency transparent Steel',
                    description: 'Networked encompassing approach bleeding-edge Rubber',
                    notes: 'e-enable Fantastic Operative disintermediate contingency',
                    structure: 'unleash Wooden',
                    hourglass_id: 16
                },
                {
                    user_id: 17,
                    problem_id: 17,
                    title: 'incentivize Proactive empowering forecast',
                    key_info: 'Front-line intangible success efficient Concrete',
                    description: 'User-centric 6th generation definition open-source Soft',
                    notes: 'visualize Generic Open-source object-oriented system engine',
                    structure: 'empower Metal',
                    hourglass_id: 17
                },
                {
                    user_id: 18,
                    problem_id: 18,
                    title: 'orchestrate Synergistic zero defect complexity',
                    key_info: 'Pre-emptive homogeneous application customized Steel',
                    description: 'Open-source heuristic knowledge user bleeding-edge Metal',
                    notes: 'envisioneer Licensed Business-focused high-level alliance',
                    structure: 'disintermediate Concrete',
                    hourglass_id: 18
                },
                {
                    user_id: 19,
                    problem_id: 19,
                    title: 'expedite Realigned human-resource projection',
                    key_info: 'Balanced disintermediate toolset impactful Soft',
                    description: 'De-engineered cohesive flexibility frictionless Fresh',
                    notes: 'generate Sleek Grass-roots context-sensitive product',
                    structure: 'e-enable Frozen',
                    hourglass_id: 19
                }
            ]);
        });
};