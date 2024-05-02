const crypto = require('crypto');

// Sample data and digital signature (you should replace these with your own values)
const data = 'Hello, ECC digital signature!';
const signatureBase64 = '...'; // Replace with the base64-encoded signature
const publicKeyPem = '...'; // Replace with the recipient's ECC public key in PEM format

// Load the ECC public key from PEM format
const publicKey = crypto.createPublicKey(publicKeyPem);

// Verify the digital signature
const signature = Buffer.from(signatureBase64, 'base64');
const isSignatureValid = crypto.verify(
  'sha256', // Hash algorithm used for signing
  Buffer.from(data),
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
  },
  signature
);

if (isSignatureValid) {
  console.log('Signature is valid.');
} else {
  console.log('Signature is NOT valid.');
}




