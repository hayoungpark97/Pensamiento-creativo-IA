# Pensamiento Creativo
Objetivo: Demostrar la capacidad de aplicar el pensamiento creativo —aumentado mediante el uso de herramientas de Inteligencia Artificial (IA)— para resolver, optimizar y comunicar una solución novedosa a un desafío específico en el estudio o desarrollo con Javascript.


## Fase 1. Identificación y pensamiento divergente
*Elige un concepto que sea difícil para ti de Javascript (funciones, promesas, arreglos, etc.). Pide a la IA soluciones que combinen este concepto con un tema no relacionado (música, arte, deportes) para crear un snippet único.*

#### -----> **Métodos de clase en POO relacionado con el skincare.** <-----


## Fase 2: Desarrollo y desafío del sesgo
*Escoge la idea más original. Pide a la IA que te sugiera una solución que rompa con la práctica estándar (p.ej: resolver un problema de array sin usar map() o usar callbacks en lugar de async/await en un escenario específico). Crea el código basado en este enfoque "prohibido".*

#### -----> PROMPT #1
El día de hoy en mi clase de Javascript vi el tema de Programación Orientada a Objetos (POO) tuve muchas dudas en varios subtemas y más en específico cuando vimos "Métodos de clase", podrías generar una explicación del tema con ejemplos fáciles de entender y relacionarlos con un tema que disfruto que son las rutinas de skincare. Necesito que me sugieras una solución que rompa con la práctica estándar del método estático, utilizando el skincare. Crea un código basado en este enfoque.

#### RESPUESTA PROMPT #1
 🧴 ¿Qué es la Programación Orientada a Objetos (POO)?

    POO te permite organizar tu código como si estuvieras creando “objetos” del mundo real.
    Ejemplo: en skincare tienes productos, rutinas, tipos de piel, etc.

    # 🧴 Programación Orientada a Objetos (POO) en JavaScript  
    ## Explicación con skincare + métodos de clase + solución creativa

    En JavaScript, la **Programación Orientada a Objetos (POO)** te permite crear estructuras basadas en objetos del mundo real.  
    En este ejemplo usaremos **skincare** como temática para entender métodos normales, métodos de clase y una solución que rompe el estándar.

    ---

    # 🧼 ¿Qué es una clase?

    Una clase es una **plantilla** para crear objetos.  
    Piensa en ella como el “molde” para crear productos de skincare.

    ```js
    class ProductoSkincare {
    constructor(nombre, tipo, precio) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
    }
    ```

    🌟 ¿Qué son los métodos de clase?

    Los métodos de clase (estáticos, con static) NO necesitan crear un objeto para usarse.
    ➡️ Piensa en ellos como “consejos universales de skincare” que funcionan sin importar qué producto estés usando.

    Ejemplo típico:
    ![alt text](image.png)

    Y se usan así:
    ![alt text](image-1.png)

    💡 ¿Por qué existen los métodos de clase?

    Porque algunas funciones **no dependen de un producto en sí**, sino del sistema general.
    Por ejemplo: una regla, una validación, una conversión.

    🧴✨ Ahora sí: explicación usando skincare
    🎀 Analogía:

    Objetos = productos de skincare.

    Métodos normales = instrucciones específicas del producto.

    Métodos de clase (estáticos) = reglas generales del skincare.

    Ejemplo:
    ![alt text](image-2.png)
    Uso:
    ![alt text](image-3.png)

    💥 RETO: solución creativa que ROMPE la práctica estándar del método estático

    La práctica tradicional:
    👉 Los métodos estáticos se usan como utilidades generalistas.

    Solución creativa y más avanzada:
    👉 Usar una “clase orquestadora de rutinas” que genera métodos de clase dinámicamente dependiendo del tipo de piel.

    Es decir:
    ✨ En vez de tener un método estático fijo, generamos métodos de clase personalizados en tiempo de ejecución.

    Esto NO es lo típico que se enseña.
## Fase 3: Revisión y refinamiento/evaluación
*Utiliza la IA para evaluar tu código de la fase 2. Pídele que identifique legibilidad, funcionamiento, posibles bugs, buenas prácticas y sugiera al menos dos optimizaciones para mejorar la eficiencia o legibilidad. Implementa y documenta estos cambios.*

🧪 Código innovador basado en skincare:
“DynamicClassMethods”: métodos de clase creados automáticamente según el tipo de piel
![alt text](image-4.png)

#### -----> PROMPT #2
Necesito que evalúes el código. Identifica legibilidad, funcionamiento, posibles bugs, buenas prácticas y sugiéreme al menos dos optimizaciones para mejorar la eficiencia o legibilidad. Implementa y documenta estos cambios.

#### RESPUESTA PROMPT #2
✅ 1. Evaluación del código original
✔ Legibilidad
1. El código es entendible, pero la lógica del switch dentro del método dinámico puede volverse difícil de mantener cuando aumentan los tipos de piel.
2. No hay documentación dentro del código ni comentarios descriptivos más allá del título.

✔ Funcionamiento
1. Funciona correctamente: genera métodos de clase en tiempo de ejecución.
2. El acceso a SkincareLab.rutina_seca() es válido y retorna lo esperado.

⚠ Posibles bugs o riesgos
No valida entradas: si se pasa "Seca" o " SECA " o null, creará métodos mal nombrados:
→ SkincareLab.rutina_ SECA con espacios.

Posible sobreescritura accidental: si el usuario llama dos veces:
SkincareLab.crearRutinaPara("seca")
se sobreescribe el método sin advertencia.

El switch está duplicando información → No es óptimo, poco escalable.

Los métodos no están aislados ni congelados, lo que facilita su modificación accidental en otra parte del código.

✔ Buenas prácticas presentes
Uso de naming convention claro (rutina_tipo).
Código conciso.
Patrón avanzado: metaprogramming.

⭐ 2. Sugerencias de optimización (al menos dos)
Optimización 1 — Reemplazar el switch por una tabla de configuraciones
Esto hace el código más escalable, legible y fácil de modificar.

Optimización 2 — Normalizar el parámetro (tipoPiel)
Para evitar métodos mal creados por errores del usuario:
convertir a minúsculas
eliminar espacios

Optimización 3 (extra) — Verificar antes de sobrescribir un método
Buena práctica para evitar errores silenciosos.

🔧 3. Código optimizado + documentado
![alt text](image-5.png)
![alt text](image-6.png)

✔ Cambio 1 — Tabla de configuraciones

Antes:
un switch poco escalable

Ahora:
![alt text](image-7.png)

✔ Cambio 2 — Normalización del tipo de piel
Evita crear métodos como rutina_ Seca.
![alt text](image-8.png)

✔ Cambio 3 — Protección contra sobrescritura accidental
![alt text](image-9.png)
Evita errores silenciosos.


## Fase 4: Presentación y colaboración
Usa la IA Generativa (prompts de imagen, diagramas de código como Mermaid/Graphviz) para crear un esquema visual, diagrama o infografía que explique la parte más compleja o inusual de tu solución a un público no técnico.

![alt text](sources/image-10.png)
