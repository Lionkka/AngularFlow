import { assert } from "chai";
import {} from "jest";
import Order from "../src/week2_ex4/order";


describe("test Order class", () => {
    test("Test asyncCountTotal method. Add two items 50 and 50," +
          "countTotal with 5%, should return 105 after 2 seconds.", (done: Function):void => {
        const order: Order = new Order();
        const item1: number = 50;
        const item2: number = 50;
        const tax: number = 5;
        const expectedResult: number = 105;
        order.addItem(item1);
        order.addItem(item2);

        order.asyncCountTotal(tax).then((result) => {
            assert.equal(result, expectedResult, "Unexpected output")
            done();
        });
    });

    test("Test asyncCountTotal method. Expect to throw.", () => {
        const order: Order = new Order();
        const tax: number = 101;

        order.asyncCountTotal(tax).catch((error) => expect(error.message).toEqual("Invalid tax range"));
    });
});
