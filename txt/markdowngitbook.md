# MarkDown y GitBook

Gitbook es un paquete de node que permite construir libros para la documentación de un proyecto mediante **Github/Git** y ficheros Markdown. También se puede utilizar Gitbook mediante su página web oficial, donde se inicia sesión mediante Github, Facebook, Twitter o Google+. Para la creación de un libro, basta con crear un nuevo libro dentro de la plataforma, añadir un fichero README.md y un SUMMARY.md y posteriormente crear los archivos Markdown correspondiente, guardar los cambios y previsualizar el libro en su enlace correspondiente.


Para realizar el despliegue de un libro en Github, lo que hay que  hacer es tener disponible una rama Gh-Pages para mostrar el libro en la Github Pages. Para ello se han incluido unas "tareas" en el fichero **package.json**:

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "gitbook build",
    "serve": "gitbook serve",
    "deploy": "node index.js",
    "deploy:gitbook": "git push gitbook master"
  }
```
Así, mediante el comando **_npm run build_** creamos el sitio web estático al generar los htmls correspondientes a los ficheros markdown y mediante **_npm run deploy_** se ejecuta el siguiente script:

```
const ghpages = require('gh-pages')
const path = require('path')

const bookPath = path.join(__dirname, '_book')

ghpages.publish(bookPath, function (err) {
  console.log('Publicación finalizada')
})
```

Este script creará un clon temporal del repositorio actual, creará una rama _gh-page_ si no existe ya, copiará todos los archivos de la ruta de la base, hará _commit_ de los cambios y un _push_.

Una vez se ha realizado el despliegue del libro, al realizar el commit y el push correspondiente, se podrá visualizar el libro sin ningún tipo de problemas en la GithubPages correspondiente.

### Desplegar libro en www.gitbook.com

Para desplegar un libro en www.gitbook.com primero se ha tenido que generar un token desde el apartado Aplicaciones/Tokens dentro de los ajustes de nuestro perfil en dicha página. A continuación, hay que añadir un gitbook remoto mediante el comando **_git remote add gitbook https://username:apitoken@git.gitbook.com/username/repo.git_**. Después mediante el comando **_npm run deploy:gitbook_** que hace un push al gitbook, ya se podría ver el libro desde el sitio web.

### GitBook Desktop

Para instalar este editor solo tenemos que ejecutar el asistente de instalación que se descarga desde https://www.gitbook.com/editor, disponible para Windows, Mac y Linux.

![gitbook editor](images/gitbook-editor.png)