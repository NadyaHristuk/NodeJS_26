const bcryptjs = require('bcryptjs');

const plainPassword = "nadya12345";


async function main(){
//     const salt = bcryptjs.genSaltSync(10);
// const hashPass = await bcryptjs.hash(plainPassword, salt)
//     console.log('salt ', salt);
//     console.log('hashPass ', hashPass);

const passInDB = await bcryptjs.hash(plainPassword, 8);
const result = await bcryptjs.compare(plainPassword, passInDB);
console.log('pass ', pass );
console.log('res', result);


}

main()