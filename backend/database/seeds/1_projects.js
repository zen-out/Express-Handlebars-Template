exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          user_id: 1,
          name: "shores_liaison.htm",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#7c5256",
          purpose:
            "productize Handcrafted Devolved heuristic ability Polarised system-worthy algorithm",
          friendOneEmail: "Rocio_Kling@yahoo.com",
          friendTwoEmail: "Clark_Heller62@gmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 17:28:35 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "to do",
        },
        {
          user_id: 2,
          name: "open_architected_neural.png",
          importance: "low",
          image_url: "http://placeimg.com/640/480",
          color: "#4f0156",
          purpose:
            "harness Intelligent Sharable client-driven model Balanced client-server hierarchy",
          friendOneEmail: "Jairo.Lakin@gmail.com",
          friendTwoEmail: "Orion_Zulauf@gmail.com",
          deadline: new Date(
            "Sun Nov 28 2021 06:32:57 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 3,
          name: "cotton_capability_protocol.mp4v",
          importance: "low",
          image_url: "http://placeimg.com/640/480",
          color: "#475110",
          purpose:
            "brand Sleek Fundamental dedicated complexity User-centric fresh-thinking protocol",
          friendOneEmail: "Margaretta.Jacobson@yahoo.com",
          friendTwoEmail: "Morgan84@gmail.com",
          deadline: new Date(
            "Sun Nov 28 2021 00:43:57 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "done",
        },
        {
          user_id: 4,
          name: "deposit_paradigm.mp4",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#04382f",
          purpose:
            "enhance Gorgeous Upgradable zero administration pricing structure Quality-focused modular concept",
          friendOneEmail: "Katelynn56@yahoo.com",
          friendTwoEmail: "Kiara.Walter63@gmail.com",
          deadline: new Date(
            "Sun Nov 28 2021 09:16:03 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "to do",
        },
        {
          user_id: 5,
          name: "e_commerce_cotton.wav",
          importance: "low",
          image_url: "http://placeimg.com/640/480",
          color: "#703d2e",
          purpose:
            "cultivate Sleek Switchable directional flexibility Vision-oriented bifurcated task-force",
          friendOneEmail: "Deanna.Cole@yahoo.com",
          friendTwoEmail: "Amelie.Powlowski@yahoo.com",
          deadline: new Date(
            "Sun Nov 28 2021 10:47:16 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 6,
          name: "avon_e_services_stravenue.wav",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#1e2a78",
          purpose:
            "disintermediate Tasty Down-sized content-based help-desk Total zero defect Graphic Interface",
          friendOneEmail: "Queen.Schmidt@yahoo.com",
          friendTwoEmail: "Mackenzie.Gibson1@gmail.com",
          deadline: new Date(
            "Sun Nov 28 2021 01:57:14 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "done",
        },
        {
          user_id: 7,
          name: "credit.png",
          importance: "low",
          image_url: "http://placeimg.com/640/480",
          color: "#414170",
          purpose:
            "architect Refined Innovative dedicated analyzer Virtual 6th generation hardware",
          friendOneEmail: "Clementina.Purdy3@gmail.com",
          friendTwoEmail: "Treva98@hotmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 15:02:01 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 8,
          name: "best_of_breed_tactics_overriding.pdf",
          importance: "low",
          image_url: "http://placeimg.com/640/480",
          color: "#3d5d1f",
          purpose:
            "syndicate Rustic Profound maximized emulation Decentralized bandwidth-monitored protocol",
          friendOneEmail: "Kareem.Nicolas@hotmail.com",
          friendTwoEmail: "Lesly65@yahoo.com",
          deadline: new Date(
            "Sun Nov 28 2021 00:05:00 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 9,
          name: "intranet_intelligent_groupware.png",
          importance: "low",
          image_url: "http://placeimg.com/640/480",
          color: "#093906",
          purpose:
            "expedite Sleek Virtual cohesive time-frame Open-architected analyzing moratorium",
          friendOneEmail: "Adrian25@gmail.com",
          friendTwoEmail:
            "Alexander.Cartwright@hotmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 19:14:50 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 10,
          name: "handcrafted.pdf",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#3d1e64",
          purpose:
            "synergize Licensed Front-line value-added local area network Public-key global project",
          friendOneEmail: "Melyssa_Ortiz@hotmail.com",
          friendTwoEmail: "Gertrude.Koepp@hotmail.com",
          deadline: new Date(
            "Sun Nov 28 2021 07:23:09 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 11,
          name: "handcrafted_agp_website.mpeg",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#34421c",
          purpose:
            "reintermediate Awesome Fully-configurable optimal concept Fundamental fresh-thinking middleware",
          friendOneEmail: "Anderson.Schultz52@hotmail.com",
          friendTwoEmail: "Ethan_Will60@yahoo.com",
          deadline: new Date(
            "Sun Nov 28 2021 04:53:07 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "done",
        },
        {
          user_id: 12,
          name: "functionality_soap.m2v",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#761878",
          purpose:
            "deliver Fantastic Grass-roots motivating application Reactive clear-thinking superstructure",
          friendOneEmail: "Cleo_Larson@gmail.com",
          friendTwoEmail: "Vickie.Padberg57@gmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 12:00:34 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 13,
          name: "clothing.mp2a",
          importance: "high",
          image_url: "http://placeimg.com/640/480",
          color: "#237d49",
          purpose:
            "exploit Fantastic Upgradable scalable circuit Up-sized responsive toolset",
          friendOneEmail: "Rosario14@gmail.com",
          friendTwoEmail: "Cassandre44@yahoo.com",
          deadline: new Date(
            "Sat Nov 27 2021 22:18:18 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "to do",
        },
        {
          user_id: 14,
          name: "policy_process_district.gif",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#3f6b6a",
          purpose:
            "deliver Handcrafted Adaptive optimizing migration Total static alliance",
          friendOneEmail: "Zella91@yahoo.com",
          friendTwoEmail: "Tyshawn1@hotmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 13:43:57 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 15,
          name: "handmade_payment.mpga",
          importance: "high",
          image_url: "http://placeimg.com/640/480",
          color: "#374e0e",
          purpose:
            "strategize Generic Pre-emptive zero tolerance Graphical User Interface Operative disintermediate frame",
          friendOneEmail: "Kaela69@yahoo.com",
          friendTwoEmail: "Sandra75@gmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 17:02:47 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "done",
        },
        {
          user_id: 16,
          name: "car.pdf",
          importance: "high",
          image_url: "http://placeimg.com/640/480",
          color: "#418047",
          purpose:
            "implement Handcrafted Adaptive actuating orchestration Organized context-sensitive analyzer",
          friendOneEmail: "Lorine.Goyette@hotmail.com",
          friendTwoEmail: "Lisette76@hotmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 17:47:40 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 17,
          name: "solid_invoice.png",
          importance: "high",
          image_url: "http://placeimg.com/640/480",
          color: "#1c363d",
          purpose:
            "productize Handmade Sharable reciprocal approach Streamlined coherent access",
          friendOneEmail: "Clara.Parisian@gmail.com",
          friendTwoEmail: "Mozelle54@gmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 16:56:47 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
        {
          user_id: 18,
          name: "reboot_plastic.png",
          importance: "low",
          image_url: "http://placeimg.com/640/480",
          color: "#605038",
          purpose:
            "e-enable Handmade Virtual incremental hub Horizontal web-enabled focus group",
          friendOneEmail: "Stone76@gmail.com",
          friendTwoEmail: "Rigoberto_Lakin31@hotmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 16:52:05 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "done",
        },
        {
          user_id: 19,
          name: "lime.png",
          importance: "medium",
          image_url: "http://placeimg.com/640/480",
          color: "#695f71",
          purpose:
            "strategize Handmade Enhanced grid-enabled encoding Sharable actuating hierarchy",
          friendOneEmail: "Elody_Larkin40@gmail.com",
          friendTwoEmail: "Heaven40@hotmail.com",
          deadline: new Date(
            "Sat Nov 27 2021 21:11:10 GMT+0800 (Hong Kong Standard Time)"
          ),
          status: "doing",
        },
      ]);
    });
};
