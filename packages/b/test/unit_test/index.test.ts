import * as a from "@yoavain/a";
import * as c from "@yoavain/c";
import { runb } from "../../src";
describe("Test index", () => {
    it("should run runa and runc when running runb is called", () => {
        const runa = jest.fn();
        jest.spyOn(a, "runa").mockImplementation(runa);
        const runc = jest.fn();
        jest.spyOn(c, "runc").mockImplementation(runc);

        runb();

        expect(runa).toHaveBeenCalled();
        expect(runc).toHaveBeenCalled();
    });
});
