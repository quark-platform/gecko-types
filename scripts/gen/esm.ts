import { getMozBuildFiles, getTypeDef, hasTypeDef } from 'gecko-index'
import { writeFileSync } from 'fs'

const exportMods: { name: string; path: string }[] = []
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

      writeFileSync(`./types/gen/esm/${moduleName}.d.ts`, moduleDef)
    }
  }
}

{
  writeFileSync(
    `./types/gen/esm/index.d.ts`,
    mods.map((mod) => `///<reference path="./${mod.name}" />`).join('\n') +
      `
declare interface MozESMFiles {
  ${mods
    .map((mod) => `['${mod.path}']: typeof import('${mod.path}');`)
    .join('\n  ')}
}\n
declare interface MozESMExportFile {
  ${exportMods.map((exp) => `['${exp.name}']: '${exp.path}';`).join('\n  ')}
}\n
declare interface MozESMExportType {
  ${exportMods
    .map(
      (exp) => `['${exp.name}']: (typeof import('${exp.path}'))['${exp.name}'];`
    )
    .join('\n  ')}
}`
  )
}
