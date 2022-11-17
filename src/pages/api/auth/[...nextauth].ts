import NextAuth from "next-auth/next";
import Okta from "next-auth/providers/okta";

const options = {
    providers:[
        Okta({
            clientId: '0oa7a5sd3e77Vhk2p5d7',
            clientSecret: 'nq8Z5tj4uM70I0GZmWavbpfuX7w_w2tj55rPT2Rk',
            issuer: 'https://dev-42565441.okta.com/oauth2/default'
        }),
    ],
    secret: 'asdfasdf',
    debug: true
}

export default NextAuth(options)