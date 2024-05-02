const crypto = require("crypto");
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", { modulusLength: 2048 })

const data = "FORTUNE FAVOURS THE bold:";

const encryptor = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
}, Buffer.from(data));

console.log("encrypted data through public : ", encryptor.toString("base64"));

const dcryptor = crypto.privateDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    encryptor
);
console.log("Decrypted data private :- ", dcryptor.toString())


const encryptor1 = crypto.privateEncrypt(privateKey, Buffer.from(data));

console.log("encrypted data through private : ", encryptor.toString("base64"));

const dcryptor1 = crypto.publicDecrypt(publicKey, encryptor1);
console.log("Decrypted data public :- ", dcryptor.toString())