// Temporary script to generate the flags list in the README file
// @todo replace with github actions

const path = require('path')
const fs = require('fs')

const flagsFolder = path.join(__dirname, '../images')
const readmePath = path.join(__dirname, '../README.md')

const files = fs.readdirSync(flagsFolder)
const flags = files.filter(file => path.extname(file).toLowerCase() === '.svg')

let totalSize = 0

let tableLines = ''

flags.forEach(flag => {
  const fileName = path.basename(flag)
  const {size} = fs.statSync(`${flagsFolder}/${flag}`)
  totalSize += size
  tableLines += `<tr><td>${fileName}</td><td><img width="72" height="48" alt="" src="https://raw.githubusercontent.com/gucr/tiny-flags/main/images/${flag}"/></td><td>${size} bytes</td></tr>`
})

const tableHtml = `
<table>
<tr><th>Country</th><th>Preview</th><th>Size</th></tr>
${tableLines}
</table>
`

const readmeContents = fs.readFileSync(readmePath, 'utf8');
let blankReadme = readmeContents.trim().substring(0,  readmeContents.trim().indexOf('<!-- BeginTable -->'));

const newContent = `
${blankReadme}
<!-- BeginTable -->

Average flag size: ${Math.round(totalSize / flags.length + 1)} bytes

Total size: ${Math.round(totalSize / 1024)}KB

${tableHtml}
`

fs.writeFile(path.join(readmePath, '../README.md'), newContent, (err) => {
  if (err) throw err
})
