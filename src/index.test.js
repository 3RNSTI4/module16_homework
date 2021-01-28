import { countDown } from "./index";

describe("test countDown", () => {
    it("countDown to equal 0", () => {
            const result = countDown(0);
            expect(result).toBe(undefined);
        }),
        it("countDown to equal 1", () => {
            const result = countDown(1);
            expect(result).toBe(console.log(1));
        }),
        it("countDown to equal -3", () => {
            const result = countDown(-3);
            expect(result).toBe(undefined);
        }),
        it("countDown to equal 3", () => {
            const result = countDown(3);
            expect(result).toBe(console.log(3)),
                (console.log(2)),
                (console.log(1));
        });
});