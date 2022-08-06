const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();


const notion = new Client({
  auth: "secret_8CT1XwtZMKgL8HNgn1jWeNcXhCJxqoJOVrs8HcqBcc3",
});

const databaseId = "779d06b58bd543e19dc733d146ed7d3c";

;(async () => {
    const res = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Name",
        text: {
          contains: "thibault",
        },
      },
    });

    console.log(res);
})()