import Base from "@/models/Base"
import User from "@/models/User"
import data from "@/utils/data"
import db from "@/utils/db"

const handler = async (
  req: any,
  res: { send: (arg0: { message: string }) => void }
) => {
  await db.connect()
  await User.deleteMany()
  await User.insertMany(data.users)
  await Base.deleteMany()
  await Base.insertMany(data.base)
  await db.disconnect()
  res.send({ message: "seeded successfully" })
}
export default handler
