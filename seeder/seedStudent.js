const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "database_students";

//Connect Database
MongoClient.connect(url,
  function (err, client) {
    assert.strictEqual(null, err);

    const db = client.db(dbName);

    const studentsCollection = db.collection("students");

    // make random data for students
    let students = [];
    for (let i = 0; i < 550000; i += 1) {
      const firstname = faker.name.firstName();
      const lastname = faker.name.lastName();
      let newStudents = {
        firstname,
        lastname,
        email: faker.internet.email(firstname, lastname),
      };
      students.push(newStudents);

      // for terminal feedback
      console.log(newStudents.email);
    }

    // setting 10000 input per batch with 3 seconds of delay time
    processRecords(0, 10000, 3 * 1000);

    function processRecords(startIndex, n, delay) {
      if (startIndex >= students.length) {
        console.log("Seeding Complete")
        return client.close()
      };
      studentsCollection.insertMany(students.slice(startIndex, startIndex + n), function (err, doc) {
        if (err) throw err;

        setTimeout(() => processRecords(startIndex + n, n, delay), delay);
      });
    }
    console.log("Inserting seed data... please wait:)");
  });
