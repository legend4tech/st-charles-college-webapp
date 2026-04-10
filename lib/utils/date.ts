export function getCurrentAcademicYear(): string {
  const now = new Date()
  const year = now.getFullYear()
  // Academic year runs from September to August
  const startYear = now.getMonth() >= 8 ? year : year - 1
  const endYear = startYear + 1
  return `${startYear}/${endYear}`
}

export function getCurrentCopyrightYear(): number {
  return new Date().getFullYear()
}

export function getNextAcademicYear(): string {
  const now = new Date()
  const year = now.getFullYear()
  const startYear = now.getMonth() >= 8 ? year + 1 : year
  const endYear = startYear + 1
  return `${startYear}/${endYear}`
}
