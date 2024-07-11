import { getRooms } from "../core/actions"

export const RoomList = async () => {
  const {response, error} = await getRooms()
  console.log({response})
  return (
    <>
      
    </>
  )
}