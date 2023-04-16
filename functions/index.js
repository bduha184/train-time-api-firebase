const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  if (request.query.name !== undefined) {
    response.send("Hello " + request.query.name + " !");
  } else {
    response.send("Hello from Firebase!");
  }
});
