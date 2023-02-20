---
title: Control de Acceso
lesson: 5
language: es
excerpt: Control de Acceso
---

# Capítulo 3 Día 5 - Control de Acceso

¡Holaaaaa! Hoy, vamos a aprender sobre control de acceso. Aprendamos.

## Video

Recomiendo que veas el video para el contenido de hoy. Se va a ayudar mucho porque el control de acceso está super confuso: https://www.youtube.com/watch?v=ly3rNs0xCRQ&t

## Introducción a Control de Acceso y los Modificadores de Acceso

El control de acceso es una característica súper poderosa en Cadence, y lo hace muy especial.

El control de acceso describe la manera en que usamos cosas llamadas “modificadores de acceso” para aumentar la seguridad de nuestros smart contracts.

Previamente, en todo de nuestro lecciones, declaramos todo de nuestro variables y funciones usando la palabra clave `pub`, como así:

```cadence
pub let x: Bool

pub fun jacobIsAwesome(): Bool {
  return true // obvio
}
```

Pero qué significa `pub` exactamente? ¿Por qué estamos poniéndolo allí? ¿Hay otras cosas que podemos hacer en lugar de eso? Eso es lo que vamos a aprender hoy.

## Modificadores de Acesso

`pub` es algo llamado “modificador de acceso” en Cadence. Un modificador de acceso es básicamente un nivel de seguridad en nuestros smart contracts. Hay otras en que podemos usar también. Miremos este diagrama para darnos una idea de todo los modificadores de acceso diferentes que podemos usar.

<img src="/courses/beginner-cadence/access_modifiers.png" />

Vamos a solamente concentrarnos en las filas de `var`, porque `let` no tiene un scope de escribir porque es una constante. Realmente te animo a ver el video antes de leer esta próxima parte.

## ¿Qué significa “Scope”?

Scope es el área en que puedes acceder, modificar, o llamar tus “cosas” (variables, constantes, campos, o funciones). Hay 4 tipos de scope:

### 1. Scope de Todo

Esto significa que podemos acceder a nuestras cosas desde **cualquier lugar**. Dentro del contrato, en los transacciones y guiones, etc.

<img src="/courses/beginner-cadence/allscope.PNG" />

### 2. Scope de Corriente y Interior

Esto significa que solo podemos acceder nuestras cosas desde donde se define y dentro de eso.

<img src="/courses/beginner-cadence/currentandinner.PNG" />

### 3. Scope que Contiene el Contrato

Esto significa que podemos acceder a nuestras cosas de cualquier lugar dentro del contrato que está definido.

<img src="/courses/beginner-cadence/contractscope.PNG" />

### 4. Esto significa que podemos acceder a nuestras cosas desde cualquier lugar donde la cuenta está definida. Esto significa que todos los contratos que están en la cuenta. Recuerda: Podemos desplegar múltiples contratos a una cuenta.

## Volver a los Modificadores de Acceso

¡Genial! Acabamos de revisar que significa los diferentes de “scope”. Miremos a nuestro diagramo de nuevo…

<img src="/courses/beginner-cadence/access_modifiers.png" />

Ahora es más fácil entender lo que está diciendo. Discutimos todos los modificadores de acesso juntos…

### pub(set)

`pub(set)` solamente aplica a los variables, constantes, y campos. No puedes usar pub(set) para las funciones. Es también lo más peligroso y más fácil modificador accesible.

Ejemplo:

```cadence
pub(set) var x: String
```

Scope de Escribir - **Scope de Todo**
Scope de Leer - **Scope de Todo**

### pub/access(all)

`pub` es la misma cosa como `access(all)`. Esta es la próxima capa abajo del `pub(set)`.

Ejemplo:

```cadence
pub var x: String
access(all) var y: String

pub fun testFuncOne() {}
access(all) fun testFuncTwo() {}
```

Scope de Escribir - Corriente y Interior

Scope de Leer - **Scope de Todo**

### access(account)

`access(account)` es un poco más restrictivo que el `pub` porque de su scope de leer.

Ejemplo:

```cadence
access(account) var x: String

access(account) fun testFunc() {}
```

Scope de Escribir - Corriente y Interior

Scope de Leer - Todo los contractos en la cuenta

### access(contract)

`access(contract)` es un poco más restrictivo que `access(account)` porque su scope de leer.

Ejemplo:

```cadence
access(contract) var x: String

access(contract) fun testFunc() {}
```

Scope de Escribir - Corriente y Interior

Scope de Leer - Que Continente el Contrato

### priv/access (self)

`priv` es la misma cosa como `access(self)`. Este es el más restrictivo (y seguro) modificador de acceso.

Ejemplo:

```cadence
priv var x: String
access(self) var y: String

priv fun testFuncOne() {}
access(self) fun testFuncTwo() {}
```

Scope de Escribir - Corriente y Interior

Scope de Leer - Corriente y Interior

## Notas Muy Importantes

<img src="/courses/beginner-cadence/pleasenote.jpeg" />

Después de mirar a nuestro modificadores de acceso, tenemos que tomar una decisión super importante. **Aunque algunos modificadores de acceso como `priv` hacen campos ilegibles en tu código de Cadence, esto no significa que las personas no pueden leer esta información mirando a el blockchain. _Cada cosa en la blockchain es pública_, independientemente de su scope de leer.** Los modificadores de acceso permiten determinar que es legible/escribible en el contexto de tu código de Cadence. ¡Nunca almacenar información privada en el blockchain!

## En Conclusión

Aprendimos MUCHO sobre los modificadores de acceso hoy. En orden para prueba tu entendimiento, vamos a hacer mucho trabajo para las búsquedas de hoy. Pero sinceramente creo que vas a aprender mucho haciendo las búsquedas ellos mismo.

¡Nos vemos en el capítulo 4! 💚

## Búsquedas

Para la búsqueda de hoy, vas a mirar un contrato y un guión. Te vas a mirar a 4 variables (a, b, c, d) y 3 funciones (publicFunc, contractFunc, privateFunc) todo definido en `SomeContract`. En cada ÁREA (1, 2, 3, y 4), quiero que hagas lo siguiente: para cada variable (a, b, c, y d), dime en cuál áreas donde se pueden leer (scope de leer) y cuál áreas donde pueden ser modificados (scope de escribir). Para cada funcion (publicFunc, contractFunc, y privateFunc), simplemente dime donde ellos pueden ser llamados.

Puedes usar este diagramó para ayudarlo:
<img src="/courses/beginner-cadence/boxdiagram.PNG" />

```cadence
access(all) contract SomeContract {
    pub var testStruct: SomeStruct

    pub struct SomeStruct {

        //
        // 4 Variables
        //

        pub(set) var a: String

        pub var b: String

        access(contract) var c: String

        access(self) var d: String

        //
        // 3 Funciones
        //

        pub fun publicFunc() {}

        access(contract) fun contractFunc() {}

        access(self) fun privateFunc() {}


        pub fun structFunc() {
            /**************/
            /*** ÁREA 1 ***/
            /**************/
        }

        init() {
            self.a = "a"
            self.b = "b"
            self.c = "c"
            self.d = "d"
        }
    }

    pub resource SomeResource {
        pub var e: Int

        pub fun resourceFunc() {
            /**************/
            /*** ÁREA 2 ***/
            /**************/
        }

        init() {
            self.e = 17
        }
    }

    pub fun createSomeResource(): @SomeResource {
        return <- create SomeResource()
    }

    pub fun questsAreFun() {
        /**************/
        /*** ÁREA 3 ****/
        /**************/
    }

    init() {
        self.testStruct = SomeStruct()
    }
}
```

Este es un guión que importa el contrato arriba:

```cadence
import SomeContract from 0x01

pub fun main() {
  /**************/
  /*** ÁREA 4 ***/
  /**************/
}
```
