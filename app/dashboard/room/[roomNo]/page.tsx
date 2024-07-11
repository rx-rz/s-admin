import { getRoomDetails } from "../../core/actions";

export default async function RoomDetails({
  params,
}: {
  params: { roomNo: string };
}) {
  const { response, error } = await getRoomDetails(params.roomNo);
  console.log({ response });
  return <></>;
}
