import { NextApiRequest, NextApiResponse } from "next";
import { locationRepository } from "../../location/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const l = await locationRepository.getAsync({
    latitude: 51.516,
    longitude: -0.1749,
  });
  res.status(200);
  res.json(l);
  return res;
};
