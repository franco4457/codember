type File = `${string}-${string}` | string

export const validateChecksum = (files: File[]) => {
  return files.filter((file) => {
    const [name, csm] = file.split('-').map((word) => word.split(''))
    let nameIdx = 0
    for (let i = 0; i < csm.length; i++) {
      const curr = csm[i]

      const fIndx = name.findIndex((char) => curr === char)
      const lastIndx = name.findLastIndex((char) => curr === char)
      if (fIndx !== lastIndx || nameIdx > fIndx) {
        return false
      }
      nameIdx = fIndx
    }
    return true
  })
}
