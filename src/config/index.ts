import merge from 'lodash.merge';



process.env.NODE_ENV = process.env.NODE_ENV || 'development';


const stage = process.env.STAGE || 'local'
let envconfig;


if(stage === 'production') {
    envconfig = require('./production').default;
} else if (stage === 'local') {
    envconfig = require('./local').default;
} else {
    envconfig = require('./local').default;    
}

export default merge({
    stage,
    env: process.env.NODE_ENV,
    port: 3000,
    secrets: {
        jwt: process.env.JWT_SECRET,
        dbURL: process.env.DATABASE_URL
    }
}, envconfig);