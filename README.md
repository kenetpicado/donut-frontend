
# donut
![Frontend](https://img.shields.io/badge/Frontend-blue)

Interfaz diseñada para mejorar la experiencia de los estudiantes de la Universidad Nacional Autónoma de Nicaragua - León al consultar sus calificaciones. Con esta aplicación, los estudiantes pueden acceder de manera rápida y sencilla a sus notas académicas.

Caracterizada por una interfaz intuitiva y amigable, **donut** ofrece una experiencia de usuario optimizada para dispositivos móviles, permitiendo a los estudiantes acceder a sus calificaciones en cualquier momento y lugar, desde la comodidad de sus teléfonos inteligentes.

**donut** se basa en tecnologías web modernas, lo que garantiza su accesibilidad y compatibilidad con diferentes dispositivos y navegadores. La seguridad de los datos es una prioridad, ningún dato es recopilado.

![cover-dontut](https://github.com/kenetpicado/donut-frontend/assets/83382624/f2ae1aa6-6c23-43a7-8daf-755cc693ec6e)


## 🚀 Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-proyecto.git`
2. Ve al directorio del proyecto: `cd tu-proyecto`
3. Instala las dependencias: `npm install`

## ⚙️ Configuración
Configuración recomendada para un entorno de desarrollo
- Asegúrate de configurar: `VITE_API_URL="cb-develop.tk/api"` en el archivo `.env`
- En `useGrades.js` ejecuta la peticion a:
```
const response = await axios.post(API_URL + "/test", data);
```
Donde data contiene `year` cuyos valores pueden ser: 2016, 2020, 2021, 2022.

## 📦 Uso

- Inicia la aplicación en modo de desarrollo: `npm run dev`
- Compila y minifica los archivos para producción: `npm run build`

## 🛠️ Construido con

- 💚 [Vue.js](https://vuejs.org/): Un framework de JavaScript para construir interfaces de usuario interactivas y reactivas.
- 🎨 [Tailwind CSS](https://tailwindcss.com/): Un framework de CSS utilitario altamente personalizable para crear diseños rápidos y modernos.
- ⚡️ [Vite](https://vitejs.dev/): Un bundler rápido y liviano para aplicaciones web modernas en JavaScript.

Estas tecnologías han sido fundamentales en el desarrollo de este proyecto y han proporcionado una base sólida para construir una aplicación web eficiente y con una excelente experiencia de usuario.

## 👥 Autores
- [Kenet Picado](https://github.com/kenetpicado)
- [Jairo Paniagua](https://github.com/jey1322)

## 📱 Disponible también para Android

¡Buenas noticias! Nuestra aplicación también está disponible para dispositivos Android. Si deseas obtener más información sobre la versión de Android de la aplicación, puedes consultar nuestro repositorio oficial.

🔗 [Repositorio de la Aplicación Android](https://github.com/jey1322/Donut_androidApp)

¡Esperamos que disfrutes de la aplicación tanto en la web como en dispositivos Android!


## 🤝 Contribución

¡Las contribuciones son bienvenidas! Para contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`
3. Realiza los cambios y haz commit: `git commit -am 'Agrega una nueva funcionalidad'`
4. Haz push a la rama: `git push origin feature/nueva-funcionalidad`
5. Envía un Pull Request.

## 📋 Licencia

Este proyecto se encuentra bajo la [Licencia MIT](https://opensource.org/licenses/MIT).

## ✨ Agradecimientos

- [Aileen Castro:](https://www.instagram.com/hahaileen/) Por su incansable apoyo en la prueba y validación del proyecto, así como por sus comentarios y retroalimentación constructiva.
- [Roberto Berrios:](https://github.com/Roberto-Berrios) Por su invaluable conocimiento técnico y sus sugerencias que han mejorado significativamente el proyecto.

