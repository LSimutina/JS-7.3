const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });

  it("Book names already sorted", () => {
    const input = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });

  it("Book names repeat", () => {
    const input = ["Гарри Поттер", "Властелин Колец", "Властелин Колец"];
    const expected = ["Властелин Колец", "Властелин Колец", "Гарри Поттер"];
    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });

  test("Function throws when user without params", () => {
    expect(() => sorting.sortByName()).toThrow();
  });
});
