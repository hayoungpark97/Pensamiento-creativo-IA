/**
 * SkincareLab: Genera métodos de clase dinámicos para rutinas de skincare
 */
class SkincareLab {
    constructor(tipoPiel) {
        this.tipoPiel = tipoPiel;
    }

    /**
     * CONFIGURACIÓN CENTRALIZADA:
     * Tabla que define las rutinas según tipo de piel.
     * Hace el código más limpio y escalable.
     */
    static rutinas = {
        seca: ["limpiador cremoso", "tónico hidratante", "crema rica"],
        grasa: ["gel limpiador", "serum niacinamida", "gel ligero"],
        mixta: ["limpiador suave", "serum equilibrante", "crema ligera"],
        default: ["limpiador suave", "hidratante básico"]
    };

    /**
     * Normaliza cadenas: elimina espacios y fuerza minúsculas
     */
    static normalizarTipo(tipo) {
        return String(tipo).trim().toLowerCase();
    }

    /**
     * CREA dinámicamente un método de clase para la rutina
     * Incluye verificación para evitar sobrescrituras accidentales
     */
    static crearRutinaPara(tipoPiel) {
        const tipo = SkincareLab.normalizarTipo(tipoPiel);
        const nombreMetodo = `rutina_${tipo}`;

        // Previene sobrescritura accidental
        if (SkincareLab[nombreMetodo]) {
            console.warn(`El método ${nombreMetodo} ya existe y no será sobrescrito.`);
            return;
        }

        // Obtiene rutina desde configuración
        const rutina = SkincareLab.rutinas[tipo] || SkincareLab.rutinas.default;

        // Asigna el método dinámico
        SkincareLab[nombreMetodo] = () => rutina;
    }
}

// Crear métodos dinámicos
SkincareLab.crearRutinaPara("seca");
SkincareLab.crearRutinaPara("GRASA"); // mayúscula → normalizada

console.log(SkincareLab.rutina_seca());
// → ["limpiador cremoso", "tónico hidratante", "crema rica"]

console.log(SkincareLab.rutina_grasa());
// → ["gel limpiador", "serum niacinamida", "gel ligero"]
