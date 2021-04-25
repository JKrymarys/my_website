// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function live(req: any, res: any) {
  res.status(200).json({ message: 'Service is alive' })
}
