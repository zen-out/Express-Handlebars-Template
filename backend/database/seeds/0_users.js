exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          gmail_id: "d282e6db-8806-4941-9a02-2ebc1e398008",
          facebook_id:
            "86027fbd-2575-4ab9-97bc-848d59f77a9a",
          linkedin_id:
            "3a9c36eb-ceed-4826-a569-10e4c4315992",
          spotify_id:
            "0a20843c-01fd-4a69-aac2-e044045bb1fa",
          name: "Nicklaus",
          email: "Annabell.Langworth@hotmail.com",
          hash: "7fc8969d-f74f-4177-9294-09af01aad9c3",
        },
        {
          gmail_id: "be18aa1e-9080-4b44-9883-a43a2e6f0803",
          facebook_id:
            "714c1c81-76d1-4550-84e4-40b3109aff4d",
          linkedin_id:
            "26a8f09f-c581-4519-ad4b-26dd73bb5d17",
          spotify_id:
            "5023eb57-de7f-4e44-b915-c90bd980f4e0",
          name: "Zena",
          email: "Rosella20@yahoo.com",
          hash: "500000b7-aa4d-407f-a598-c19b9067255e",
        },
        {
          gmail_id: "5a3c79f0-ad4b-4f3c-a844-336cc1652e81",
          facebook_id:
            "92a5c811-8fcd-4f53-bc7d-0772673f29b8",
          linkedin_id:
            "fc983f59-8a92-407e-8fd4-8a14fdfede1c",
          spotify_id:
            "cc5016f3-2f4a-4036-baef-884f2017bf6f",
          name: "Orion",
          email: "Carlee.Carter83@gmail.com",
          hash: "1d5189b4-92c2-417c-b513-c21e6a59fcd2",
        },
        {
          gmail_id: "843f2dad-388c-455f-8c9c-ea141ceccfbe",
          facebook_id:
            "a9866ce0-2759-470d-83e4-ba5ce2131f98",
          linkedin_id:
            "e1920089-0118-45c0-a2a3-ba10804f62e7",
          spotify_id:
            "b4759318-e174-4011-a39f-31e2a35d2689",
          name: "Annie",
          email: "Theo.Wolf54@gmail.com",
          hash: "53374108-ffa8-42fd-a532-8db6e6a4f6ff",
        },
        {
          gmail_id: "c8e7bfe1-8f12-4f3f-91d8-998dad49dde7",
          facebook_id:
            "3b69fe81-a7c0-4892-96ce-d0f30be3fc5e",
          linkedin_id:
            "74e300cd-ecbd-4dc9-9c9a-5234dde4714d",
          spotify_id:
            "f9768a89-e46c-4428-8040-fffb04c279b8",
          name: "Shayne",
          email: "Margret.OReilly68@yahoo.com",
          hash: "dcd896ca-7528-4113-bc7d-525a48c32975",
        },
        {
          gmail_id: "d8edaf0d-e9d3-421a-9a1d-a3a2f1200437",
          facebook_id:
            "44f7c847-c03d-4a73-9395-11204ea60649",
          linkedin_id:
            "58623ca2-084c-45dc-9e51-b54e5f510dcb",
          spotify_id:
            "2e73796e-fa0d-4004-9cfb-22841004e209",
          name: "Russel",
          email: "Lolita51@hotmail.com",
          hash: "e9f253f3-295b-4e40-9021-228d86b277cf",
        },
        {
          gmail_id: "7460f246-c17a-473d-abad-78b5a891c85a",
          facebook_id:
            "b64c6725-8e0f-41d3-8b59-a66ed184cd39",
          linkedin_id:
            "46528759-4a85-4ebe-900b-018266668725",
          spotify_id:
            "9f2eeea9-bf4e-4db8-bbe4-e3d32b7ef5e9",
          name: "Jose",
          email: "Bertram.Quigley23@gmail.com",
          hash: "6a52c4c7-d510-42fc-87e3-25e364555b18",
        },
        {
          gmail_id: "9d833217-1a7d-4b08-9fd7-6dbd8b177b73",
          facebook_id:
            "fa0a70e0-e14b-4cd3-a479-ee0100085ca6",
          linkedin_id:
            "d5694a77-5ce3-4ff2-a585-b7093ae3f7a9",
          spotify_id:
            "cd75fbbd-83fe-4e47-80e0-29262625980b",
          name: "Lyla",
          email: "Jarret51@hotmail.com",
          hash: "f1779482-d496-44f6-8fc2-b2f921fc4e20",
        },
        {
          gmail_id: "423c0de4-df92-4f84-872d-e9cf699ed9ed",
          facebook_id:
            "ca8c4a30-fe04-4b28-a2aa-c25c442bf760",
          linkedin_id:
            "5e7eb528-c79d-4887-b366-f95ed27967f7",
          spotify_id:
            "c47eac55-7d75-4b54-8063-c5cde429ab9f",
          name: "Anya",
          email: "Foster.Nicolas74@yahoo.com",
          hash: "da9e8db0-b7a7-46a7-88c4-6dd801e24079",
        },
        {
          gmail_id: "8a670e15-d22a-4463-a487-20f0be9e9d26",
          facebook_id:
            "c0244aa9-e5c7-45f4-9432-4fe353bdb12a",
          linkedin_id:
            "3705281f-c218-4278-9346-ac768d2dcd1d",
          spotify_id:
            "82391a7d-c67d-4f67-90cd-a23dccd12dda",
          name: "Edison",
          email: "Anika_Zieme@yahoo.com",
          hash: "dc5800d9-3006-4555-a3d4-371168b7856e",
        },
        {
          gmail_id: "3c8425fe-d7b6-4402-880d-c982becdbc7c",
          facebook_id:
            "73c07f64-181f-4be4-8af9-ac0be79cb0a7",
          linkedin_id:
            "ebc8a977-573b-44f3-819a-8e31ab16d7e9",
          spotify_id:
            "693fafe8-9157-471c-a652-0a3a170561fb",
          name: "Berneice",
          email: "Kyleigh78@yahoo.com",
          hash: "a98d7da1-c808-46c3-8e8e-1ad01f6787ca",
        },
        {
          gmail_id: "6a2d25e6-cf7d-4f83-965c-653bcad48e1b",
          facebook_id:
            "0729d333-5eef-4634-9e9b-201d71366f99",
          linkedin_id:
            "c0b7beab-48ef-4d8f-b032-deacef7e513e",
          spotify_id:
            "7c638a00-3f1b-4deb-8c75-2abe667b356b",
          name: "Lawson",
          email: "Letha7@gmail.com",
          hash: "14fdc17f-527d-4ad2-8a8d-0b54ca3f9e82",
        },
        {
          gmail_id: "f91a5119-6f9d-4f70-9856-3ab96c7ac3b0",
          facebook_id:
            "492f486d-534d-4d04-8074-316bb7d9571d",
          linkedin_id:
            "64b6f0d3-f357-41cf-9827-bb6e6d217c7a",
          spotify_id:
            "61875938-dd42-42ea-9456-ad53e269b916",
          name: "Nadia",
          email: "Sadie82@gmail.com",
          hash: "46f521d4-b03e-4b98-b665-5fa7696322fc",
        },
        {
          gmail_id: "3625de40-bdca-4b82-8a24-4dd1f73c0b77",
          facebook_id:
            "2e3c474c-efde-41ef-b240-0987bbc6d306",
          linkedin_id:
            "768ca228-89f0-4dda-8f01-72b3678a8a9e",
          spotify_id:
            "530c3327-7958-41df-b371-4a0235f0e03a",
          name: "Desiree",
          email: "Jackson83@gmail.com",
          hash: "41f56642-6869-43b8-b5e3-b7f72b00d8f9",
        },
        {
          gmail_id: "8d7c5f47-1925-4dff-ab30-159de5e566c3",
          facebook_id:
            "7ef21050-c8f9-4beb-ba0a-f19ecfb049c0",
          linkedin_id:
            "6d68408a-c6ca-4d36-8ff2-7eb9c83ad9a4",
          spotify_id:
            "6c44cd02-b8df-4c27-b900-bf9c0cb24be6",
          name: "Keon",
          email: "Savion74@hotmail.com",
          hash: "da1b9159-21a5-40ca-9d56-fe46ce4dfdee",
        },
        {
          gmail_id: "d0a2b39f-f267-4179-9eef-a5438d3ecb8f",
          facebook_id:
            "f27f6c1a-47be-480e-b0a5-a8475b84606d",
          linkedin_id:
            "0bf2b231-54a6-4e46-b60f-8580268601ce",
          spotify_id:
            "b90897b8-59be-43b6-9846-3ada1e6666a9",
          name: "Stefanie",
          email: "Robin25@hotmail.com",
          hash: "8e2d592b-b751-43f5-a0c6-6bf4b1dd911d",
        },
        {
          gmail_id: "151fd8fa-5ce1-4b91-969f-d9f8582f5d4f",
          facebook_id:
            "5d8596ad-79c9-4389-9984-933ba45b6c79",
          linkedin_id:
            "12f81c4d-9dd4-43b7-8575-0ff306ed8dcf",
          spotify_id:
            "e74e3b6d-5971-4766-b53a-e3efa5b1bb00",
          name: "Eudora",
          email: "Carleton.Cole@yahoo.com",
          hash: "1ff16854-8c62-4028-ad71-4aa6db7aff8a",
        },
        {
          gmail_id: "31fef2ab-367a-42a2-a28b-070cf2030ddb",
          facebook_id:
            "86f39f6a-c5c5-4184-8366-ab2f64207088",
          linkedin_id:
            "0e41568d-697b-4185-96cc-83bfc5e322bb",
          spotify_id:
            "07d5dfa6-3db9-4b25-8c98-b43a13ceef5b",
          name: "Kaitlyn",
          email: "Cheyenne50@gmail.com",
          hash: "eb76dbec-27bc-4b63-8d94-ad793f6705bb",
        },
        {
          gmail_id: "4f169138-03bd-476b-ba7f-68b21a07aeb1",
          facebook_id:
            "1fed567b-899e-42f2-a022-856dbcb1b514",
          linkedin_id:
            "08d21e6b-5fa6-4305-9d55-d6dbc9f6d0f5",
          spotify_id:
            "62a602e3-ce25-450d-96af-99c90caa1895",
          name: "Bell",
          email: "Friedrich.Bahringer92@gmail.com",
          hash: "e8d1c3c7-2a91-411e-8290-5e0eadec8635",
        },
      ]);
    });
};