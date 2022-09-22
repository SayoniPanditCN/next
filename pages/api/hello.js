// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET'){
    res.status(200).json('http://localhost:8000/comments')
  } else if (req.method === 'POST') {
    const comment = req.body.body
    const NewComment = {
      id : Date.now(),
      text: comment
    }
  }
}
