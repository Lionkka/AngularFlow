import {} from "jest";
import Circle from "../circle";

describe("Circle", () => {
  it("could be constructed without parameters", () => {
    // tslint:disable-next-line no-unused-expression
    new Circle();
  });

  it("could be constructed with radius", () => {
    const radius: number = 5;
    const circle = new Circle(radius);

    expect(circle.radius).toEqual(radius);
  });

  it("throws error when constructed with radius less 0", () => {
    const radius: number = -1;

    // tslint:disable-next-line no-unused-expression
    expect(() => { new Circle(radius); }).toThrowError("Radius should be positive and less 100");
  });

  it("throws error when constructed with radius greater 100", () => {
    const radius: number = 100.0001;

    // tslint:disable-next-line no-unused-expression
    expect(() => { new Circle(radius); }).toThrowError("Radius should be positive and less 100");
  });

  it("should be constructed with radius 0 as default value", () => {
    const defaultRadius: number = 0;
    const circle: Circle = new Circle();

    expect(circle.radius).toEqual(defaultRadius);
  });

  it("should set a new radius", () => {
    const radius: number = 42;
    const circle: Circle = new Circle();

    circle.radius = radius;

    expect(circle.radius).toEqual(radius);
  });

  it("thorws error when set a new radius less 0", () => {
    const radius: number = -1;
    const circle = new Circle();

    expect(() => { circle.radius = radius; }).toThrow("Radius should be positive and less 100");
  });

  it("thorws error when set a new radius greater 100", () => {
    const radius: number = 200;
    const circle = new Circle();

    expect(() => { circle.radius = radius; }).toThrow("Radius should be positive and less 100");
  });

  it("should return circumference for default radius", () => {
    const circle: Circle = new Circle();
    const defaultCircumference: number = 0;

    expect(circle.circumference).toEqual(defaultCircumference);
  });

  it("should return circumference for radius eq 1", () => {
    const radius: number = 1;
    const expectedCircumference: number = 6.283185307179586;

    const circle = new Circle(radius);

    expect(circle.circumference).toEqual(expectedCircumference);
  });

  it("should return circumference for radius eq 11", () => {
    const radius: number = 11;
    const expectedCircumference: number = 69.11503837897544;

    const circle = new Circle(radius);

    expect(circle.circumference).toEqual(expectedCircumference);
  });

  it("shoud return square for default radius", () => {
    const circle: Circle = new Circle();
    const defaultSquare: number = 0;

    expect(circle.square).toEqual(0);
  });

  it("should return square for radius eq 7", () => {
    const circle: Circle = new Circle();
    const radius: number  = 7;
    const expectedSquare: number = 153.93804002589985;

    circle.radius = radius;

    expect(circle.square).toEqual(expectedSquare);
  });

  it("should have x property", () => {
    const circle: Circle = new Circle();

    expect(circle.hasOwnProperty("x")).toBeTruthy();
    expect(circle.x).toEqual(0);
  });

  it("should have y property", () => {
    const circle: Circle = new Circle();

    expect(circle.hasOwnProperty("y")).toBeTruthy();
    expect(circle.y).toEqual(0);
  });

  it("should change circumference on radius change", () => {
    const circle: Circle = new Circle(Math.random());
    const randomCircumference = circle.circumference;

    circle.radius = Math.random();
    const newRandomCircumference = circle.radius;

    expect(newRandomCircumference).not.toEqual(randomCircumference);
  });

  it("should change square on radius change", () => {
    const circle: Circle = new Circle(Math.random());
    const randomSquare = circle.square;

    circle.radius = Math.random();
    const newRandomSquare = circle.radius;

    expect(newRandomSquare).not.toEqual(randomSquare);
  });
});
