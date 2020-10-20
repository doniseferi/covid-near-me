import { locationRepository } from "./index";

test.concurrent.each`
  latitude      | longitude     | expectedCode   | expectedName
  ${51.500729}  | ${-0.124625}  | ${"E09000033"} | ${"Westminster"}
  ${56.9459695} | ${-2.2110162} | ${"S12000034"} | ${"Aberdeenshire"}
  ${53.0684881} | ${-4.0764504} | ${"W06000002"} | ${"Gwynedd"}
  ${55.2408073} | ${-6.5115552} | ${"N09000004"} | ${"Causeway Coast and Glens"}
`(
  "location repository returns $expectedName for $latitude $longitude",
  async ({ latitude, longitude, expectedCode, expectedName }) => {
    const { code, name } = await locationRepository.getAsync({
      latitude,
      longitude,
    });
    expect(code).toEqual(expectedCode);
    expect(name).toEqual(expectedName);
  }
);
test("throws an exception when the location is outside of the United Kingdom", async () => {
  const [latitude, longitude] = [24.0684881, -10.0764504];
  expect(
    async () => await locationRepository.getAsync({ latitude, longitude })
  ).rejects.toThrow(
    new Error(
      `latitude: ${latitude} and longitude: ${longitude} is not in` +
        ` the United Kingdom. Please provide geo coordinates that fall within` +
        ` the boundaries of the United Kingdom.`
    )
  );
});
