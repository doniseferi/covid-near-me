import { getUKLocalAuthorityQueryHandlerAsync } from "../queryHandlers/index";

describe("Get local authority query handler", () => {
  it("returns Westminster when I am at the Big Ben", async () => {
    const [latitude, longitude] = [51.500729, -0.124625];
    const { Code, Name } = await getUKLocalAuthorityQueryHandlerAsync({
      latitude,
      longitude,
    });
    expect(Code).toEqual("E09000033");
    expect(Name).toEqual("Westminster");
  });
  it("returns Aberdeenshire when I am at Dunnottar Castle", async () => {
    const [latitude, longitude] = [56.9459695, -2.2110162];
    const { Code, Name } = await getUKLocalAuthorityQueryHandlerAsync({
      latitude,
      longitude,
    });
    expect(Code).toEqual("S12000034");
    expect(Name).toEqual("Aberdeenshire");
  });
  it("returns Gwynedd when I am at Mount Snowdens peak", async () => {
    const [latitude, longitude] = [53.0684881, -4.0764504];
    const { Code, Name } = await getUKLocalAuthorityQueryHandlerAsync({
      latitude,
      longitude,
    });
    expect(Code).toEqual("W06000002");
    expect(Name).toEqual("Gwynedd");
  });
  it("returns Causeway Coast and Glens when I am at the Giant's Causeway", async () => {
    const [latitude, longitude] = [55.2408073, -6.5115552];
    const { Code, Name } = await getUKLocalAuthorityQueryHandlerAsync({
      latitude,
      longitude,
    });
    expect(Code).toEqual("N09000004");
    expect(Name).toEqual("Causeway Coast and Glens");
  });
  it("throws an exception when the location is outside of the United Kingdom", async () => {
    const [latitude, longitude] = [24.0684881, -10.0764504];
    expect(
      async () =>
        await getUKLocalAuthorityQueryHandlerAsync({
          latitude,
          longitude,
        })
    ).rejects.toEqual(
      new Error(
        `latitude: ${latitude} and longitude: ${longitude} is not in` +
          ` the United Kingdom. Please provide geo coordinates that fall within` +
          ` the boundaries of the United Kingdom.`
      )
    );
  });
});
