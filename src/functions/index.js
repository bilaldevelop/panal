const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Cloud Function to handle game access requests
exports.requestGameAccess = functions.https.onCall(async (data, context) => {
  // Checking that the user is authenticated.
  if (!context.auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
      'while authenticated.');
  }

  // Getting the game name from the data provided in the request
  const gameName = data.gameName;
  const userId = context.auth.uid; // The ID of the user making the request

  // Perform the database write operation
  try {
    const writeResult = await admin.firestore().collection('gameAccessRequests').add({
      gameName: gameName,
      userId: userId,
      requestedAt: admin.firestore.FieldValue.serverTimestamp(), // Server timestamp for consistency
    });
    // Here you might also implement notification logic to notify admins of the new request
    // ...

    // Sending back a message that we've successfully written the message
    return { result: `Request for game access has been received with ID: ${writeResult.id}` };
  } catch (error) {
    // Throwing an error if something goes wrong during the write operation
    console.error('Error writing to Firestore', error);
    throw new functions.https.HttpsError('unknown', 'An error occurred when requesting game access.');
  }
});
