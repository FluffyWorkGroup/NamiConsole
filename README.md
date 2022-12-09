
<div align="center">
<img src="https://i.imgur.com/VV8QbET.png" />

Un fork de [captainjs](https://github.com/sammwyy/captainjs) con algunas mejoras personalizadas pensadas para todo el branding de Nami al igual que con el trabajo de typescript, como lo pueden ser el uso de ecmascript y la eliminación completa de commonjs como espacio de trabajo.

</div>

---



<br>

#### ¿Qué es captain.js?
Captain.js es una herramienta enfocada en brindar funcionalidades de la consola para Node.js, como lo son los colores, los prefijos, el debugger y los comandos.


<br>

### Funcionalidades de consola
**Formateado de la consola:** Agrega formateado a la consolam dentro de las funciones de este paquete, como lo son los colores, los prefijos y el debugger.
```typescript
import { Console } from 'namiconsole';
console = new Console();

console.log("Esto es un log");
console.error("Esto es un error");;
console.warn("Esto es un advertencia por tu nivel de belleza");
```
<br>

> Output:  
[23:57:44] [Log] Esto es un log  
[23:57:44] [Error] Esto es un error  
[23:57:44] [Warn] Esto es una advertencia por tu nivel de belleza  

<br><br>

**Agregar configuración personalizada:** Todos los parametros de la configuración son opcionales.

```typescript
console = new Console({
    "use_colors": true,
    "format": "§8[§d%tiempo%§8] [%prefijo%§8] §7%mensaje%",
    "log_prefix": "§aLog",
    "warn_prefix": "§eAdvertencia",
    "error_prefix": "§cError",
    "info_prefix": "§bInformacion",
    "debug_prefix": "§bDebug"
});
```

<br><br><br>


### Colores
**Colores en la consola directamente:** Puedes usar un color especifico usando los prefixes para los colores.

```typescript
import { Console } from 'namiconsole';
console = new Console();

console.log("§dEsto es un texto en verde §ay verde claro");
```

<br>

> Colores:  
§0 = Black  
§1 = Dark Blue  
§2 = Dark Green  
§3 = Dark Cyan  
§4 = Dark Red  
§5 = Dark Purple  
§6 = Gold  
§7 = Gray  
§8 = Dark Gray  
§9 = Blue  
§a = Green  
§b = Aqua  
§c = Red  
§d = Purple  
§e = Yellow  
§f = White  
§r = Reset  

<br><br>

**Utilizando los colores usando los constantes:** Puedes utilizar los colores usando las constantes de la clase Colors.

```typescript
import { Rojo } from "namiconsole";

console.log(Rojo + "Hola esto es un texto rojito");
```

<br><br>

### Comandos
**Registra un comando:** Registra un comando usando el metodo registerCommand, el cual recibe dos parametros, el primero es el nombre del comando y el segundo es la función a ejecutar cuando se ejecute el comando.

```typescript  
import { Commander } from 'namiconsole';

const Commander = new Commander();

Commander.registerCommand("hello", (args) => {
    console.log("Hello world");
});

Commander.fetch();
```

<br><br>



**Cambia la input de los comandos**   Cambia el texto que es mostrado al ejecutar un comando.  
```typescript
setPrefix("Pon un comando: ");
```

<br><br>

**Organiza los comandos desconocidos:** Manda un texto personalizado cuando el comando no se pueda encontrar.
```javascript
Commander.onUnknownCommand((cmd) => {
    console.error("El comando que tratas de buscar no existe, comando: " + cmd);
})
```
