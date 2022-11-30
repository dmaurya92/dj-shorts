import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const email = [
        {email:'dj@yopmail.com',password:'Test@123'}
    ]
    console.log('body 1', req.body);
    if(req && req.body){
        const body = req.body;
        console.log('body 2', body);
        email.map((d)=>{
            console.log('data', d);
            if(d.email === body.email && d.password === body.password){
                res.status(200).json({ data: 'login success' })
                return
            }
        })
    }
     res.status(401).json({ data: 'login failed' })
}
