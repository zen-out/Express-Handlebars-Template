exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("problem")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("problem").insert([{
                    user_id: 1,
                    hourglass_id: 1,
                    problem: 'Managed regional conglomeration 24/365 Cotton',
                    whatshouldbe: 'streamline Licensed Profound human-resource forecast',
                    whatactuallyis: 'implement Cotton',
                    hypothesis: 'drive Cross-group web-enabled website',
                    plan: 'unleash Optional empowering extranet'
                },
                {
                    user_id: 2,
                    hourglass_id: 2,
                    problem: 'Right-sized uniform structure rich Steel',
                    whatshouldbe: 'grow Tasty Total bi-directional knowledge base',
                    whatactuallyis: 'drive Fresh',
                    hypothesis: 'synthesize Function-based zero tolerance approach',
                    plan: 'enable Multi-tiered local collaboration'
                },
                {
                    user_id: 3,
                    hourglass_id: 3,
                    problem: 'Phased non-volatile info-mediaries robust Frozen',
                    whatshouldbe: 'utilize Sleek Digitized encompassing infrastructure',
                    whatactuallyis: 'incentivize Concrete',
                    hypothesis: 'transform Grass-roots actuating flexibility',
                    plan: 'iterate Cross-group responsive conglomeration'
                },
                {
                    user_id: 4,
                    hourglass_id: 4,
                    problem: 'Polarised upward-trending knowledge base efficient Metal',
                    whatshouldbe: 'engineer Generic Monitored analyzing groupware',
                    whatactuallyis: 'engage Frozen',
                    hypothesis: 'revolutionize Phased mission-critical portal',
                    plan: 'drive Grass-roots explicit strategy'
                },
                {
                    user_id: 5,
                    hourglass_id: 5,
                    problem: 'Visionary tangible attitude vertical Cotton',
                    whatshouldbe: 'grow Small Horizontal tertiary website',
                    whatactuallyis: 'productize Frozen',
                    hypothesis: 'scale Implemented multi-tasking middleware',
                    plan: 'transition Switchable disintermediate portal'
                },
                {
                    user_id: 6,
                    hourglass_id: 6,
                    problem: 'Focused logistical framework killer Cotton',
                    whatshouldbe: 'architect Generic Synergistic systemic focus group',
                    whatactuallyis: 'aggregate Fresh',
                    hypothesis: 'monetize Configurable local orchestration',
                    plan: 'engineer Optimized fresh-thinking core'
                },
                {
                    user_id: 7,
                    hourglass_id: 7,
                    problem: 'Visionary fresh-thinking info-mediaries killer Cotton',
                    whatshouldbe: 'drive Small User-centric even-keeled focus group',
                    whatactuallyis: 'transform Metal',
                    hypothesis: 'strategize Multi-layered 6th generation open architecture',
                    plan: 'morph Polarised holistic challenge'
                },
                {
                    user_id: 8,
                    hourglass_id: 8,
                    problem: 'Object-based national framework 24/365 Steel',
                    whatshouldbe: 'envisioneer Awesome Balanced heuristic budgetary management',
                    whatactuallyis: 'empower Plastic',
                    hypothesis: 'recontextualize Digitized optimizing approach',
                    plan: 'whiteboard Cross-group local encoding'
                },
                {
                    user_id: 9,
                    hourglass_id: 9,
                    problem: 'Profound systematic open architecture turn-key Rubber',
                    whatshouldbe: 'leverage Refined Customer-focused directional protocol',
                    whatactuallyis: 'aggregate Metal',
                    hypothesis: 'synthesize Cross-group discrete contingency',
                    plan: 'deliver Object-based value-added portal'
                },
                {
                    user_id: 10,
                    hourglass_id: 10,
                    problem: 'Phased executive concept back-end Soft',
                    whatshouldbe: 'engage Licensed Configurable 4th generation open architecture',
                    whatactuallyis: 'enhance Granite',
                    hypothesis: 'incubate Monitored maximized knowledge base',
                    plan: 'exploit Focused motivating paradigm'
                },
                {
                    user_id: 11,
                    hourglass_id: 11,
                    problem: 'Synergized multimedia productivity front-end Metal',
                    whatshouldbe: 'productize Handmade Assimilated web-enabled infrastructure',
                    whatactuallyis: 'maximize Metal',
                    hypothesis: 'evolve Configurable foreground benchmark',
                    plan: 'maximize Sharable modular open system'
                },
                {
                    user_id: 12,
                    hourglass_id: 12,
                    problem: 'Phased systemic info-mediaries bricks-and-clicks Frozen',
                    whatshouldbe: 'optimize Tasty Front-line multi-tasking middleware',
                    whatactuallyis: 'matrix Granite',
                    hypothesis: 'deliver Digitized foreground website',
                    plan: 'innovate Reverse-engineered impactful groupware'
                },
                {
                    user_id: 13,
                    hourglass_id: 13,
                    problem: 'Mandatory web-enabled protocol robust Concrete',
                    whatshouldbe: 'visualize Licensed Implemented bottom-line hardware',
                    whatactuallyis: 'extend Rubber',
                    hypothesis: 'transform Digitized 5th generation database',
                    plan: 'redefine Public-key next generation ability'
                },
                {
                    user_id: 14,
                    hourglass_id: 14,
                    problem: 'Quality-focused fresh-thinking budgetary management killer Wooden',
                    whatshouldbe: 'generate Tasty Front-line local portal',
                    whatactuallyis: 'aggregate Metal',
                    hypothesis: 'utilize Multi-layered logistical middleware',
                    plan: 'monetize Customizable dynamic Graphical User Interface'
                },
                {
                    user_id: 15,
                    hourglass_id: 15,
                    problem: 'Open-architected client-driven attitude strategic Metal',
                    whatshouldbe: 'mesh Handmade Optional responsive solution',
                    whatactuallyis: 'unleash Rubber',
                    hypothesis: 'generate Object-based attitude-oriented array',
                    plan: 'exploit Up-sized asymmetric hardware'
                },
                {
                    user_id: 16,
                    hourglass_id: 16,
                    problem: 'Cloned coherent access leading-edge Metal',
                    whatshouldbe: 'deploy Unbranded Digitized value-added challenge',
                    whatactuallyis: 'orchestrate Concrete',
                    hypothesis: 'revolutionize Upgradable next generation infrastructure',
                    plan: 'evolve Configurable explicit local area network'
                },
                {
                    user_id: 17,
                    hourglass_id: 17,
                    problem: 'Digitized client-driven hub B2C Rubber',
                    whatshouldbe: 'embrace Practical De-engineered context-sensitive interface',
                    whatactuallyis: 'implement Granite',
                    hypothesis: 'empower Assimilated bi-directional initiative',
                    plan: 'productize Function-based grid-enabled function'
                },
                {
                    user_id: 18,
                    hourglass_id: 18,
                    problem: 'Reduced actuating standardization visionary Steel',
                    whatshouldbe: 'empower Small Ergonomic demand-driven strategy',
                    whatactuallyis: 'optimize Rubber',
                    hypothesis: 'enhance Centralized bandwidth-monitored contingency',
                    plan: 'deliver Synchronised context-sensitive capacity'
                },
                {
                    user_id: 19,
                    hourglass_id: 19,
                    problem: 'Universal 24 hour service-desk e-business Cotton',
                    whatshouldbe: 'reinvent Rustic Centralized discrete process improvement',
                    whatactuallyis: 'redefine Plastic',
                    hypothesis: 'morph Progressive regional paradigm',
                    plan: 'envisioneer Configurable regional interface'
                }
            ]);
        });
};