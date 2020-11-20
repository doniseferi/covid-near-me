import { NextApiRequest, NextApiResponse } from "next";
import localInformationQueryHandler from "../../handler";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const latitude = parseFloat(_req.query.latitude as string);
  const longitude = parseFloat(_req.query.longitude as string);
  const localInformation = await localInformationQueryHandler.handleAsync(
    { latitude, longitude },
    new Date(Date.now())
  );

  return res.status(200).json(localInformation);
};

export default handler;
