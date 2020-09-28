import { getUKLocalAuthorityQueryHandlerAsync } from "../pages/api/getUKLocalAuthorityQueryHandlerAsync";

describe("Get local authority query handler", async () => {
  it("returns Westminster when I am at the Big Ben", async () => {
    const [latitude, longitude] = [51.500729, -0.124625];
    const {
      localAuthorityCode,
      localAuthorityName,
    } = await getUKLocalAuthorityQueryHandlerAsync({ latitude, longitude });
    expect(localAuthorityCode).toEqual("E09000033");
    expect(localAuthorityName).toEqual("Westminster");
  });
  it("returns Aberdeenshire when I am at Dunnottar Castle", async () => {
    const [latitude, longitude] = [56.9459695, -2.2110162];
    const {
      localAuthorityCode,
      localAuthorityName,
    } = await getUKLocalAuthorityQueryHandlerAsync({ latitude, longitude });
    expect(localAuthorityCode).toEqual("S12000034");
    expect(localAuthorityName).toEqual("Aberdeenshire");
  });
  it("returns Gwynedd when I am at Mount Snowdens peak", async () => {
    const [latitude, longitude] = [53.0684881, -4.0764504];
    const {
      localAuthorityCode,
      localAuthorityName,
    } = await getUKLocalAuthorityQueryHandlerAsync({ latitude, longitude });
    expect(localAuthorityCode).toEqual("W06000002");
    expect(localAuthorityName).toEqual("Gwynedd");
  });
  it("returns Gwynedd when I am at Mount Snowdens peak", async () => {
    const [latitude, longitude] = [53.0684881, -4.0764504];
    const {
      localAuthorityCode,
      localAuthorityName,
    } = await getUKLocalAuthorityQueryHandlerAsync({ latitude, longitude });
    expect(localAuthorityCode).toEqual("N09000004");
    expect(localAuthorityName).toEqual("Causeway Coast and Glens");
  });
  it("throws an exception when the location is outside of the United Kingdom", async () => {
    const [latitude, longitude] = [24.0684881, -10.0764504];
    expect(
      await getUKLocalAuthorityQueryHandlerAsync({
        latitude,
        longitude,
      }).toThrowError(
        `latitude: ${latitude} and longitude: ${longitude} is not within` +
          ` the United Kingdom. Please provide geo coordinates that are within` +
          ` the boundaries of the United Kingdom.`
      )
    );
  });
});

export {};
