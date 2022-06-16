
const CryptoJS = require ("crypto-js");
const process = require('process');
const fs = require('fs');
const { readFile } = require('fs/promises')

const args = process.argv.slice(2);
const encIndex = process.argv.indexOf('-enc');
const decIndex = process.argv.indexOf('-dec');
const keyIndex = process.argv.indexOf('-key');
let encValue;
let decValue;
let keyValue;

(async function main () {

if(args.includes('-enc')){
console.log("Cifrando...")


if (encIndex > -1) {
  encValue = process.argv[encIndex + 1];
}


if (keyIndex > -1) {
  keyValue = process.argv[keyIndex + 1];
}

const data = (encValue || 'Default');
const key = (keyValue || 'DefaultKey');

encrypteData = CryptoJS.AES.encrypt(data,key,256).toString();


//Decription
//const decrypteData = CryptoJS.AES.decrypt(encrypteData,key,256).toString(CryptoJS.enc.Utf8);

console.log('Original message:', `${data}`);
console.log('Key:', `${key}`);
console.log('Encripted message:', `${encrypteData}`);
}







if(args.includes('-dec')){
console.log("Descifrando...")


if (decIndex > -1) {
  decValue = process.argv[decIndex + 1];
}


if (keyIndex > -1) {
  keyValue = process.argv[keyIndex + 1];
}

const encryptedData = (decValue || 'Default');
const key = (keyValue || 'DefaultKey');
const decryptedData = CryptoJS.AES.decrypt(encryptedData,key,256).toString(CryptoJS.enc.Utf8);

console.log('Encripted message:', `${encryptedData}`);
console.log('Key:', `${key}`);
console.log('Decripted message:', `${decryptedData}`);

}





if(args.includes('-def')){
console.log("Descifrando archivo...")
const defIndex = process.argv.indexOf('-def');
let filePath;

if (defIndex > -1) {
  filePath = process.argv[defIndex + 1];
}


const encryptedData = await readFile(filePath, 'utf8');

if (keyIndex > -1) {
  keyValue = process.argv[keyIndex + 1];
}

const key = (keyValue || 'DefaultKey');
const decryptedData = CryptoJS.AES.decrypt(encryptedData,key,256).toString(CryptoJS.enc.Utf8);
const bdecryptedData = JSON.stringify(JSON.parse(decryptedData), null, "\t");

console.log('Key:', `${key}`);
console.log('Decripted message in decrypted.txt');
fs.writeFileSync('decrypted.txt',bdecryptedData);
}





if(args.includes('-enf')){
console.log("Cifrando archivo...")
const enfIndex = process.argv.indexOf('-enf');
let filePath;

if (enfIndex > -1) {
  filePath = process.argv[enfIndex + 1];
}

const data = await readFile(filePath, 'utf8');

if (keyIndex > -1) {
  keyValue = process.argv[keyIndex + 1];
}

const key = (keyValue || 'DefaultKey');

encryptedData = CryptoJS.AES.encrypt(data,key,256).toString();

console.log('Key:', `${key}`);
console.log('Ciphered message in encrypted.txt');
fs.writeFileSync('encrypted.txt',encryptedData);
}

})();
