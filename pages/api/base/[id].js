import Base from "@/models/Base"
import db from "@/utils/db"

const handler = async (req, res) => {
  await db.connect()
  const product = await Base.findById(req.query.path)
  console.log(req.query, "query")
  await db.disconnect()
  res.send(product)
}

export default handler
