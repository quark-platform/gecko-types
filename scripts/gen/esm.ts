import {
  getMozBuildFiles,
  getTypeDef,
  hasTypeDef,
  getExports,
} from 'gecko-index'
import { writeFileSync } from 'fs'

let exportMods: { name: string; path: string }[] = await getExports()
const mods: { name: string; path: string }[] = []
const mozbuildFiles = await getMozBuildFiles()

for (const { isGRE, modules } of mozbuildFiles) {
  const resourcePrefix = isGRE
    ? 'resource://gre/modules'
    : 'resource://app/modules'

  for (const path in modules) {
    for (const moduleName of modules[path]) {
      if (!hasTypeDef(moduleName)) continue

      const modPath = resourcePrefix + path + moduleName
      const moduleDef = `declare module "${modPath}" {${await getTypeDef(
        moduleName
      )}}`

      mods.push({ name: moduleName, path: modPath })
      exportMods = exportMods.map((exp) =>
        exp.path === moduleName ? { name: exp.name, path: modPath } : exp
      )
      writeFileSync(`./types/gen/esm/${moduleName}.d.ts`, moduleDef)
    }
  }
}

exportMods = exportMods.filter((exp) => exp.path.includes('resource://'))

{
  writeFileSync(
    `./types/gen/esm/index.d.ts`,
    mods.map((mod) => `///<reference path="./${mod.name}.d.ts" />`).join('\n') +
      `
declare interface MozESMFiles {
  ${mods
    .map((mod) => `['${mod.path}']: typeof import('${mod.path}.d.ts');`)
    .join('\n  ')}
}\n
declare interface MozESMExportFile {
  ${exportMods.map((exp) => `['${exp.name}']: '${exp.path}';`).join('\n  ')}
}\n
declare interface MozESMExportType {
  ${exportMods
    .map(
      (exp) =>
        `['${exp.name}']: (typeof import('${exp.path}.d.ts'))['${exp.name}'];`
    )
    .join('\n  ')}
}`
  )
}
