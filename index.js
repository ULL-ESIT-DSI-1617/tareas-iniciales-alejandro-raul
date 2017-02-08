const ghpages = require('gh-pages')
const path = require('path')

const bookPath = path.join(__dirname, '_book')

ghpages.publish(bookPath, function (err) {
  console.log('Publicación finalizada')
})

// Para desplegar en gitbook hay que tener el remoto:
// https://username:apitoken@git.gitbook.com/username/repo.git
