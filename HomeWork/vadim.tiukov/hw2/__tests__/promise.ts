import {} from "jest";
import timeout from "../promise";

describe("Multiple async calls", () => {
  it("should pass when all resolved", (done) => {
    const expectedResult: [number, number, string] = [1, 2, "my string"];

    const promise1: Promise<number> = timeout((callback) => {
      callback(undefined, expectedResult[0]);
    });

    const promise2: Promise<number> = timeout((callback) => {
      callback(undefined, expectedResult[1]);
    });

    const promise3: Promise<string> = timeout((callback) => {
      callback(undefined, expectedResult[2]);
    });

    Promise.all([promise1, promise2, promise3]).then((res) => {
      expect(res).toEqual(expectedResult);
      done();
    });
  });

  it("should catch when some promise was rejected", (done) => {
    const error = Error("Failed in the middle");

    const promise1 = timeout((callback) => {
      callback(undefined, 1);
    }, 100);

    const promise2 = timeout((callback) => {
      callback(error, 2);
    }, 200);

    const promise3 = timeout((callback) => {
      callback(undefined, 3);
    }, 300);

    Promise.all([promise1, promise2, promise3]).catch((err) => {
      expect(err.message).toEqual(error.message);
      done();
    });
  });

  it("should ignore the time of execution and return result in defined order" , (done) => {
    const firstPromiseResult: number = 1;
    const secondPromiseResult: string = "my string";
    const thirdPromiseResult: object = {};

    const promise1 = timeout((callback) => {
      callback(undefined, firstPromiseResult);
    }, 1);

    const promise2 = timeout((callback) => {
      callback(undefined, secondPromiseResult);
    }, 20);

    const promise3 = timeout((callback) => {
      callback(undefined, thirdPromiseResult);
    }, 3);

    Promise.all([promise1, promise2, promise3]).then((res) => {
      expect(res).toEqual([firstPromiseResult, secondPromiseResult, thirdPromiseResult]);
      done();
    });
  });
});
