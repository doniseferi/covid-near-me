import { NextApiRequest, NextApiResponse } from "next";
import { getUKLocalAuthorityQueryHandlerAsync } from "../../queryHandlers/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const l = await getUKLocalAuthorityQueryHandlerAsync(51.516, -0.1749);
  res.status(200).json(l);
};
