import { locationRepository } from "./index";

describe("Get local authority query handler", () => {
  it("returns Westminster when I am at the Big Ben", async () => {
    const [latitude, longitude] = [51.500729, -0.124625];
    const { code, name } = await locationRepository.getAsync({
      latitude,
      longitude,
    });
    expect(code).toEqual("E09000033");
    expect(name).toEqual("Westminster");
  });
  it("returns Aberdeenshire when I am at Dunnottar Castle", async () => {
    const [latitude, longitude] = [56.9459695, -2.2110162];
    const { code, name } = await locationRepository.getAsync({
      latitude,
      longitude,
    });
    expect(code).toEqual("S12000034");
    expect(name).toEqual("Aberdeenshire");
  });
  it("returns Gwynedd when I am at Mount Snowdens peak", async () => {
    const [latitude, longitude] = [53.0684881, -4.0764504];
    const { code, name } = await locationRepository.getAsync({
      latitude,
      longitude,
    });
    expect(code).toEqual("W06000002");
    expect(name).toEqual("Gwynedd");
  });
  it("returns Causeway Coast and Glens when I am at the Giant's Causeway", async () => {
    const [latitude, longitude] = [55.2408073, -6.5115552];
    const { code, name } = await locationRepository.getAsync({
      latitude,
      longitude,
    });
    expect(code).toEqual("N09000004");
    expect(name).toEqual("Causeway Coast and Glens");
  });
  it("throws an exception when the location is outside of the United Kingdom", async () => {
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
});
