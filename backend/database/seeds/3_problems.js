exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("problems")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("problems").insert([
        {
          user_id: 1,
          project_id: 1,
          feature_id: 1,
          problem:
            "Managed regional conglomeration 24/365 Cotton",
          whatshouldbe:
            "streamline Licensed Profound human-resource forecast",
          whatactuallyis: "implement Cotton",
          hypothesis:
            "drive Cross-group web-enabled website",
          plan: "unleash Optional empowering extranet",
          status: "doing",
          created: new Date(
            "Mon Apr 01 2058 05:28:33 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 2,
          project_id: 2,
          feature_id: 2,
          problem:
            "Right-sized uniform structure rich Steel",
          whatshouldbe:
            "grow Tasty Total bi-directional knowledge base",
          whatactuallyis: "drive Fresh",
          hypothesis:
            "synthesize Function-based zero tolerance approach",
          plan: "enable Multi-tiered local collaboration",
          status: "done",
          created: new Date(
            "Tue Feb 27 2052 07:20:03 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 3,
          project_id: 3,
          feature_id: 3,
          problem:
            "Phased non-volatile info-mediaries robust Frozen",
          whatshouldbe:
            "utilize Sleek Digitized encompassing infrastructure",
          whatactuallyis: "incentivize Concrete",
          hypothesis:
            "transform Grass-roots actuating flexibility",
          plan: "iterate Cross-group responsive conglomeration",
          status: "doing",
          created: new Date(
            "Thu Nov 01 2074 10:36:08 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 4,
          project_id: 4,
          feature_id: 4,
          problem:
            "Polarised upward-trending knowledge base efficient Metal",
          whatshouldbe:
            "engineer Generic Monitored analyzing groupware",
          whatactuallyis: "engage Frozen",
          hypothesis:
            "revolutionize Phased mission-critical portal",
          plan: "drive Grass-roots explicit strategy",
          status: "doing",
          created: new Date(
            "Sat Sep 06 2098 03:38:30 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 5,
          project_id: 5,
          feature_id: 5,
          problem:
            "Visionary tangible attitude vertical Cotton",
          whatshouldbe:
            "grow Small Horizontal tertiary website",
          whatactuallyis: "productize Frozen",
          hypothesis:
            "scale Implemented multi-tasking middleware",
          plan: "transition Switchable disintermediate portal",
          status: "done",
          created: new Date(
            "Thu Jun 11 2026 01:32:48 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 6,
          project_id: 6,
          feature_id: 6,
          problem:
            "Focused logistical framework killer Cotton",
          whatshouldbe:
            "architect Generic Synergistic systemic focus group",
          whatactuallyis: "aggregate Fresh",
          hypothesis:
            "monetize Configurable local orchestration",
          plan: "engineer Optimized fresh-thinking core",
          status: "doing",
          created: new Date(
            "Sun Jan 23 2067 06:18:37 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 7,
          project_id: 7,
          feature_id: 7,
          problem:
            "Visionary fresh-thinking info-mediaries killer Cotton",
          whatshouldbe:
            "drive Small User-centric even-keeled focus group",
          whatactuallyis: "transform Metal",
          hypothesis:
            "strategize Multi-layered 6th generation open architecture",
          plan: "morph Polarised holistic challenge",
          status: "doing",
          created: new Date(
            "Mon Apr 22 1991 05:38:37 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 8,
          project_id: 8,
          feature_id: 8,
          problem:
            "Object-based national framework 24/365 Steel",
          whatshouldbe:
            "envisioneer Awesome Balanced heuristic budgetary management",
          whatactuallyis: "empower Plastic",
          hypothesis:
            "recontextualize Digitized optimizing approach",
          plan: "whiteboard Cross-group local encoding",
          status: "doing",
          created: new Date(
            "Wed Jun 27 2096 10:30:57 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 9,
          project_id: 9,
          feature_id: 9,
          problem:
            "Profound systematic open architecture turn-key Rubber",
          whatshouldbe:
            "leverage Refined Customer-focused directional protocol",
          whatactuallyis: "aggregate Metal",
          hypothesis:
            "synthesize Cross-group discrete contingency",
          plan: "deliver Object-based value-added portal",
          status: "done",
          created: new Date(
            "Wed Feb 21 2052 06:20:39 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 10,
          project_id: 10,
          feature_id: 10,
          problem: "Phased executive concept back-end Soft",
          whatshouldbe:
            "engage Licensed Configurable 4th generation open architecture",
          whatactuallyis: "enhance Granite",
          hypothesis:
            "incubate Monitored maximized knowledge base",
          plan: "exploit Focused motivating paradigm",
          status: "to do",
          created: new Date(
            "Wed Mar 18 2015 23:41:50 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 11,
          project_id: 11,
          feature_id: 11,
          problem:
            "Synergized multimedia productivity front-end Metal",
          whatshouldbe:
            "productize Handmade Assimilated web-enabled infrastructure",
          whatactuallyis: "maximize Metal",
          hypothesis:
            "evolve Configurable foreground benchmark",
          plan: "maximize Sharable modular open system",
          status: "done",
          created: new Date(
            "Sun Nov 03 1991 22:08:17 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 12,
          project_id: 12,
          feature_id: 12,
          problem:
            "Phased systemic info-mediaries bricks-and-clicks Frozen",
          whatshouldbe:
            "optimize Tasty Front-line multi-tasking middleware",
          whatactuallyis: "matrix Granite",
          hypothesis:
            "deliver Digitized foreground website",
          plan: "innovate Reverse-engineered impactful groupware",
          status: "doing",
          created: new Date(
            "Thu Oct 27 2011 23:23:07 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 13,
          project_id: 13,
          feature_id: 13,
          problem:
            "Mandatory web-enabled protocol robust Concrete",
          whatshouldbe:
            "visualize Licensed Implemented bottom-line hardware",
          whatactuallyis: "extend Rubber",
          hypothesis:
            "transform Digitized 5th generation database",
          plan: "redefine Public-key next generation ability",
          status: "to do",
          created: new Date(
            "Wed Jun 11 2053 17:33:32 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 14,
          project_id: 14,
          feature_id: 14,
          problem:
            "Quality-focused fresh-thinking budgetary management killer Wooden",
          whatshouldbe:
            "generate Tasty Front-line local portal",
          whatactuallyis: "aggregate Metal",
          hypothesis:
            "utilize Multi-layered logistical middleware",
          plan: "monetize Customizable dynamic Graphical User Interface",
          status: "to do",
          created: new Date(
            "Fri Jan 16 2088 21:28:31 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 15,
          project_id: 15,
          feature_id: 15,
          problem:
            "Open-architected client-driven attitude strategic Metal",
          whatshouldbe:
            "mesh Handmade Optional responsive solution",
          whatactuallyis: "unleash Rubber",
          hypothesis:
            "generate Object-based attitude-oriented array",
          plan: "exploit Up-sized asymmetric hardware",
          status: "doing",
          created: new Date(
            "Sat Jul 31 2027 16:48:41 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 16,
          project_id: 16,
          feature_id: 16,
          problem:
            "Cloned coherent access leading-edge Metal",
          whatshouldbe:
            "deploy Unbranded Digitized value-added challenge",
          whatactuallyis: "orchestrate Concrete",
          hypothesis:
            "revolutionize Upgradable next generation infrastructure",
          plan: "evolve Configurable explicit local area network",
          status: "doing",
          created: new Date(
            "Thu Nov 30 2062 01:21:07 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 17,
          project_id: 17,
          feature_id: 17,
          problem: "Digitized client-driven hub B2C Rubber",
          whatshouldbe:
            "embrace Practical De-engineered context-sensitive interface",
          whatactuallyis: "implement Granite",
          hypothesis:
            "empower Assimilated bi-directional initiative",
          plan: "productize Function-based grid-enabled function",
          status: "done",
          created: new Date(
            "Sun Jun 23 2002 19:28:40 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 18,
          project_id: 18,
          feature_id: 18,
          problem:
            "Reduced actuating standardization visionary Steel",
          whatshouldbe:
            "empower Small Ergonomic demand-driven strategy",
          whatactuallyis: "optimize Rubber",
          hypothesis:
            "enhance Centralized bandwidth-monitored contingency",
          plan: "deliver Synchronised context-sensitive capacity",
          status: "doing",
          created: new Date(
            "Tue Jan 18 2022 04:09:39 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
        {
          user_id: 19,
          project_id: 19,
          feature_id: 19,
          problem:
            "Universal 24 hour service-desk e-business Cotton",
          whatshouldbe:
            "reinvent Rustic Centralized discrete process improvement",
          whatactuallyis: "redefine Plastic",
          hypothesis: "morph Progressive regional paradigm",
          plan: "envisioneer Configurable regional interface",
          status: "done",
          created: new Date(
            "Tue Jun 11 2075 09:34:40 GMT+0800 (Hong Kong Standard Time)"
          ),
        },
      ]);
    });
};
