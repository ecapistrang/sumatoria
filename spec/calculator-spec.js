var calculator = require("../calculator");

describe("sumatoria", function () {
    it("Envia 5 y espera el 15", function () {
        var suma = calculator.suma(5);
        expect(suma).toBe(15);
    });

    it("Envia 8 y espera el 36", function () {
        var suma = calculator.suma(8);
        expect(suma).toBe(36);
    });

    it("Envia a y espera el 0", function () {
        var suma = calculator.suma('a');
        expect(suma).toBe(0);
    });

    it("Envia 0 y espera el 0", function () {
        var suma = calculator.suma(0);
        expect(suma).toBe(0);
    });

    it("Envia -2 y espera el 0", function () {
        var suma = calculator.suma(-2);
        expect(suma).toBe(0);
    });
});
