const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp"); //changed while learning async error
}


// array of sample chats.
let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
    {
    from: "Tony",
    to: "Steve",
    msg: "I am comming for you",
    created_at: new Date(),
  },
    {
    from: "Tony",
    to: "daughter",
    msg: "Love You 3000",
    created_at: new Date(),
  },
    {
    from: "Thor",
    to: "Doom",
    msg: "I warn you...",
    created_at: new Date(),
  },
    {
    from: "Doom",
    to: "Thanos",
    msg: "this is going to be something big.",
    created_at: new Date(),
  },
]


// connect and insert data into the chat model
main()
  .then(async () => {
    console.log("Connection Successful");
    try {
      const res = await Chat.insertMany(allChats);
      console.log("Inserted chats:", res);
    } catch (err) {
      console.log("Insert error:", err);
    } finally {
      await mongoose.connection.close();
    }
  })
  .catch((err) => console.log(err));
