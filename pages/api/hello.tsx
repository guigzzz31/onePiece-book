import type { NextApiResponse } from 'next'

export default (res: NextApiResponse) => {
  res.status(200).json({ name: 'John Guigzzzzo' })
}