import * as c from "@yoavain/c";
import { runa } from "../../src";
describe("Test index", () => {
    it("should run c when running a is called", () => {
        const runc = jest.fn();
        jest.spyOn(c, "runc").mockImplementation(runc);

        runa();

        expect(runc).toHaveBeenCalled();
    });
});
