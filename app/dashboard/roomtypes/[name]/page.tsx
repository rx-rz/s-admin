import { getRoomTypeDetails } from "../../core/actions";

export default async function RoomTypeDetails({
  params,
}: {
  params: { name: string };
}) {
  const { response, error } = await getRoomTypeDetails(params.name);
  console.log(decodeURI(params.name));
  console.log(response);
  return <></>;
}
