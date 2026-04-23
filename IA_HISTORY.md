# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a: Matias Fauda** 
**Fecha: 23/04/2026** 

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
 Este prompt lo utilice casi al inicio, cuando me di cuenta que toda la logica de estilos estaba dentro del index.html, fue ahi cuando le pedi a la ia que ma ayude a escribir las variables para los colores principales y el reset global.
-->
```

### Lo que le pedí a la IA

```
Necesito extraer los estilos internos del HTML a un archivo style.css externo. El layout principal debe usar grid-template-areas para organizar el header, el main y el footer, además de incluir un reset global y variables CSS para los colores principales
```

### Análisis del resultado obtenido

```
Un archivo CSS completo con la estructura de areas de Grid, el uso de Flexbox para la navegacion y las variables solicitadas.
```

### Qué debí corregir manualmente y por qué

```
Corregi el orden de las propiedades de borde en las tarjetas. La IA habia puesto el border-left antes del border general, lo que causaba que el borde de color se borrara por la cascada de CSS. También verifique manualmente que el contraste de los textos cumpliera con el estandar WCAG AA, ajustando los tonos de gris que la IA propuso inicialmente para asegurar la accesibilidad.
```

---

## Prompt 2

### Momento del proceso

```
Este fue el promt que utilice cuando comence a querer reemplazar las etiquetas divs por las etiquetas semanticas HTML. Lo que hice basicamente fue ir comparando lo que me daba como resultado la IA, e ir comparando si el resultado coincidia con los comentarios que los profesores habian agregado en el codigo e ir haciendolo poco a poco, no copias y pegar todo el codigo directamente.
```

### Lo que le pedí a la IA

```
Reemplazar la estructura de divs por etiquetas semánticas de HTML5. Necesito que el formulario de desafío sea 100% accesible, vinculando etiquetas label con sus inputs y reemplazando los botones falsos por elementos button reales
```

### Análisis del resultado obtenido

```
Una estructura con <main>, <section> y <article>, además de un formulario con etiquetas <label> y un <button type="submit">.
```

### Qué debí corregir manualmente y por qué

```
Tuve que eliminar manualmente varios atributos de estilos inline (style="...") que todavía persistían en las etiquetas dentro del contenido generado. Esto fue necesario para cumplir estrictamente con la consigna de separar totalmente la estructura del diseño y evitar penalizaciones por mantener estilos dentro del HTML.
```

---

## Reflexión final

```
La IA repitio constantemente el error de incluir estilos inline (style="...") y etiquetas no semanticas, lo que me obligo a realizar una limpieza manual para cumplir con la separacion de estructura y diseño exigida. Por otro lado, la herramienta resolvio de manera excelente y a la primera la logica de las funciones en JavaScript, respetando correctamente la distinción entre funciones declaradas y arrow functions, ademas de evitar el uso de var. Para la proxima vez, cambiaria mi forma de interactuar con la IA siendo mucho mas especifico ya que esto me ahorraria tiempo de correccion y aseguraria un codigo más limpio desde el inicio.
```
