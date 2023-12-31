export type arrProps = {
  city_mpg: number
  class: string
  combination_mpg: number
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  year: number
  cylinders?: number
  transmission?: string
  drive?: string | undefined
  displacement?: number
}

export function paginateArray<T>(array: T[], pageSize: number): T[][] {
  const pageCount = Math.ceil(array.length / pageSize)
  const paginatedArray: T[][] = []

  for (let i = 0; i < pageCount; i++) {
    const startIndex = i * pageSize
    const endIndex = startIndex + pageSize
    const page = array.slice(startIndex, endIndex)
    paginatedArray.push(page)
  }

  return paginatedArray
}

export const gasCars = [
  {
    city_mpg: 19,
    class: 'two seater',
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 25,
    make: 'alfa romeo',
    model: 'spider veloce 2000',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 9,
    class: 'two seater',
    combination_mpg: 11,
    cylinders: 12,
    displacement: 4.9,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 14,
    make: 'ferrari',
    model: 'testarossa',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 23,
    class: 'subcompact car',
    combination_mpg: 27,
    cylinders: 4,
    displacement: 2.2,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 33,
    make: 'dodge',
    model: 'charger',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 10,
    class: 'van',
    combination_mpg: 11,
    cylinders: 8,
    displacement: 5.2,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 12,
    make: 'dodge',
    model: 'b150/b250 wagon 2wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 17,
    class: 'compact car',
    combination_mpg: 19,
    cylinders: 4,
    displacement: 2.2,
    drive: 'awd',
    fuel_type: 'gas',
    highway_mpg: 23,
    make: 'subaru',
    model: 'legacy awd turbo',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 21,
    class: 'compact car',
    combination_mpg: 22,
    cylinders: 4,
    displacement: 1.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'subaru',
    model: 'loyale',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 22,
    class: 'compact car',
    combination_mpg: 25,
    cylinders: 4,
    displacement: 1.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 29,
    make: 'subaru',
    model: 'loyale',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 24,
    cylinders: 4,
    displacement: 1.6,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'toyota',
    model: 'corolla',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 26,
    cylinders: 4,
    displacement: 1.6,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 31,
    make: 'toyota',
    model: 'corolla',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 25,
    cylinders: 4,
    displacement: 1.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 30,
    make: 'toyota',
    model: 'corolla',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 26,
    cylinders: 4,
    displacement: 1.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 30,
    make: 'toyota',
    model: 'corolla',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 18,
    class: 'compact car',
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'volkswagen',
    model: 'golf iii / gti',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 21,
    class: 'compact car',
    combination_mpg: 24,
    cylinders: 4,
    displacement: 2,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 29,
    make: 'volkswagen',
    model: 'golf iii / gti',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 18,
    class: 'compact car',
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'volkswagen',
    model: 'jetta iii',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 12,
    class: 'van',
    combination_mpg: 13,
    cylinders: 8,
    displacement: 5.2,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 15,
    make: 'dodge',
    model: 'b150/b250 wagon 2wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 20,
    class: 'compact car',
    combination_mpg: 23,
    cylinders: 4,
    displacement: 2,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 28,
    make: 'volkswagen',
    model: 'jetta iii',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 18,
    class: 'compact car',
    combination_mpg: 20,
    cylinders: 4,
    displacement: 2.3,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 23,
    make: 'volvo',
    model: '240',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 19,
    class: 'compact car',
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2.3,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'volvo',
    model: '240',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 19,
    cylinders: 6,
    displacement: 2.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 22,
    make: 'audi',
    model: '100',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 19,
    cylinders: 6,
    displacement: 2.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'audi',
    model: '100',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 14,
    class: 'midsize car',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 4,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 20,
    make: 'bmw',
    model: '740i',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 14,
    class: 'midsize car',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 4,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 20,
    make: 'bmw',
    model: '740il',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 11,
    class: 'midsize car',
    combination_mpg: 13,
    cylinders: 12,
    displacement: 5,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 17,
    make: 'bmw',
    model: '750il',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 21,
    class: 'midsize car',
    combination_mpg: 23,
    cylinders: 4,
    displacement: 2.2,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 28,
    make: 'buick',
    model: 'century',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 19,
    cylinders: 6,
    displacement: 3.3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'buick',
    model: 'century',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 11,
    class: 'van',
    combination_mpg: 13,
    cylinders: 8,
    displacement: 5.2,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 17,
    make: 'dodge',
    model: 'b150/b250 wagon 2wd',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 18,
    class: 'midsize car',
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'buick',
    model: 'century',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3.1,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 25,
    make: 'buick',
    model: 'regal',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3.1,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 27,
    make: 'buick',
    model: 'regal',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'buick',
    model: 'regal',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 25,
    make: 'buick',
    model: 'riviera',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'midsize car',
    combination_mpg: 18,
    cylinders: 8,
    displacement: 4.6,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 23,
    make: 'cadillac',
    model: 'eldorado',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'midsize car',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 4.9,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 23,
    make: 'cadillac',
    model: 'eldorado',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'midsize car',
    combination_mpg: 18,
    cylinders: 8,
    displacement: 4.6,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 23,
    make: 'cadillac',
    model: 'seville',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'midsize car',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 4.9,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 23,
    make: 'cadillac',
    model: 'seville',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 18,
    class: 'midsize car',
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2.2,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'chevrolet',
    model: 'lumina',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 11,
    class: 'van',
    combination_mpg: 13,
    cylinders: 8,
    displacement: 5.2,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 17,
    make: 'dodge',
    model: 'b150/b250 wagon 2wd',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3.1,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 25,
    make: 'chevrolet',
    model: 'lumina',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3.1,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 27,
    make: 'chevrolet',
    model: 'lumina',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'midsize car',
    combination_mpg: 18,
    cylinders: 6,
    displacement: 3.4,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'chevrolet',
    model: 'lumina',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'midsize car',
    combination_mpg: 18,
    cylinders: 6,
    displacement: 3.4,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'chevrolet',
    model: 'lumina',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 18,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3.3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'chrysler',
    model: 'new yorker',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 13,
    class: 'midsize car',
    combination_mpg: 15,
    cylinders: 6,
    displacement: 3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 19,
    make: 'cx automotive',
    model: 'xm v6',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 13,
    class: 'midsize car',
    combination_mpg: 15,
    cylinders: 6,
    displacement: 3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 19,
    make: 'cx automotive',
    model: 'xm v6a',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 19,
    cylinders: 6,
    displacement: 3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 23,
    make: 'nissan',
    model: 'maxima',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 17,
    class: 'midsize car',
    combination_mpg: 19,
    cylinders: 6,
    displacement: 3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'nissan',
    model: 'maxima',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 18,
    class: 'midsize car',
    combination_mpg: 20,
    cylinders: 6,
    displacement: 3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'nissan',
    model: 'maxima',
    transmission: 'm',
    year: 1993,
  },
  {
    city_mpg: 9,
    class: 'van',
    combination_mpg: 10,
    cylinders: 8,
    displacement: 5.9,
    drive: 'rwd',
    fuel_type: 'gas',
    highway_mpg: 11,
    make: 'dodge',
    model: 'b150/b250 wagon 2wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 18,
    class: 'midsize car',
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2.5,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 24,
    make: 'dodge',
    model: 'dynasty',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 18,
    class: 'midsize car',
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'dodge',
    model: 'dynasty',
    transmission: 'a',
    year: 1993,
  },
] as arrProps[]

export const deislCars = [
  {
    city_mpg: 18,
    class: 'large car',
    combination_mpg: 19,
    cylinders: 6,
    displacement: 3.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'mercedes-benz',
    model: '300sd',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'van',
    combination_mpg: 18,
    cylinders: 8,
    displacement: 6.2,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'gmc',
    model: 'g15/25 rally 2wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 16,
    class: 'van',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.2,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 19,
    make: 'gmc',
    model: 'g15/25 rally 2wd',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'k1500 pickup 4wd',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'pickup 2500 4wd',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'special purpose vehicle',
    combination_mpg: 18,
    cylinders: 8,
    displacement: 6.2,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'chevrolet',
    model: 'suburban c10 2wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'sierra 1500 4wd',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'sierra 2500 4wd',
    transmission: 'a',
    year: 1993,
  },
  {
    city_mpg: 15,
    class: 'special purpose vehicle',
    combination_mpg: 18,
    cylinders: 8,
    displacement: 6.2,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'gmc',
    model: 'c15 suburban 2wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 26,
    class: 'special purpose vehicle',
    combination_mpg: 26,
    cylinders: 4,
    displacement: 1.6,
    drive: 'fwd',
    fuel_type: 'diesel',
    highway_mpg: 27,
    make: 'grumman olson',
    model: 'kubvan',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 30,
    class: 'special purpose vehicle',
    combination_mpg: 31,
    cylinders: 4,
    displacement: 1.6,
    drive: 'fwd',
    fuel_type: 'diesel',
    highway_mpg: 32,
    make: 'grumman olson',
    model: 'kubvan',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 15,
    class: 'special purpose vehicle',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'k10 blazer 4wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 15,
    class: 'special purpose vehicle',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'suburban k10 4wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 23,
    class: 'special purpose vehicle',
    combination_mpg: 25,
    cylinders: 4,
    displacement: 2.3,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 27,
    make: 'ford',
    model: 'bronco ii 4wd',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 15,
    class: 'special purpose vehicle',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'k15 jimmy 4wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 19,
    class: 'large car',
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 26,
    make: 'mercedes-benz',
    model: 's350d',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'special purpose vehicle',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.2,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'k15 suburban 4wd',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 21,
    class: 'special purpose vehicle',
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2.1,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'jeep',
    model: 'cherokee/wagoneer',
    transmission: 'a',
    year: 1985,
  },
  {
    city_mpg: 25,
    class: 'special purpose vehicle',
    combination_mpg: 26,
    cylinders: 4,
    displacement: 2.1,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 26,
    make: 'jeep',
    model: 'cherokee/wagoneer',
    transmission: 'm',
    year: 1985,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'c1500 pickup 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 21,
    make: 'chevrolet',
    model: 'c1500 pickup 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 17,
    class: 'standard pickup truck',
    combination_mpg: 19,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'chevrolet',
    model: 'c1500 pickup 2wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'pickup 2500 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 19,
    make: 'chevrolet',
    model: 'pickup 2500 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 17,
    class: 'standard pickup truck',
    combination_mpg: 19,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'chevrolet',
    model: 'pickup 2500 2wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 21,
    make: 'gmc',
    model: 'sierra 1500 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'sierra 1500 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 17,
    class: 'standard pickup truck',
    combination_mpg: 19,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'gmc',
    model: 'sierra 1500 2wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'sierra 2500 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 17,
    class: 'standard pickup truck',
    combination_mpg: 19,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 22,
    make: 'gmc',
    model: 'sierra 2500 2wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 19,
    make: 'gmc',
    model: 'sierra 2500 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 18,
    make: 'chevrolet',
    model: 'k1500 pickup 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 14,
    class: 'standard pickup truck',
    combination_mpg: 15,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 17,
    make: 'chevrolet',
    model: 'k1500 pickup 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'k1500 pickup 4wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 18,
    make: 'chevrolet',
    model: 'pickup 2500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 14,
    class: 'standard pickup truck',
    combination_mpg: 15,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 17,
    make: 'chevrolet',
    model: 'pickup 2500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'pickup 2500 4wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 14,
    class: 'standard pickup truck',
    combination_mpg: 15,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 17,
    make: 'gmc',
    model: 'sierra 1500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 14,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 18,
    make: 'gmc',
    model: 'sierra 1500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 17,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'sierra 1500 4wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 19,
    make: 'gmc',
    model: 'sierra 2500 4wd',
    transmission: 'm',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'standard pickup truck',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 18,
    make: 'gmc',
    model: 'sierra 2500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 14,
    class: 'standard pickup truck',
    combination_mpg: 15,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 17,
    make: 'gmc',
    model: 'sierra 2500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'van',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'chevrolet',
    model: 'g10/20 van 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'van',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 20,
    make: 'gmc',
    model: 'vandura g15/25 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'van',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 19,
    make: 'chevrolet',
    model: 'sport van g10/20 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 15,
    class: 'van',
    combination_mpg: 16,
    cylinders: 8,
    displacement: 6.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 19,
    make: 'gmc',
    model: 'rally g15/25 2wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 14,
    class: 'special purpose vehicle',
    combination_mpg: 15,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 17,
    make: 'chevrolet',
    model: 'blazer 1500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 14,
    class: 'special purpose vehicle',
    combination_mpg: 15,
    cylinders: 8,
    displacement: 6.5,
    drive: 'awd',
    fuel_type: 'diesel',
    highway_mpg: 17,
    make: 'gmc',
    model: 'yukon k1500 4wd',
    transmission: 'a',
    year: 1994,
  },
  {
    city_mpg: 19,
    class: 'large car',
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.5,
    drive: 'rwd',
    fuel_type: 'diesel',
    highway_mpg: 26,
    make: 'mercedes-benz',
    model: 's350',
    transmission: 'a',
    year: 1995,
  },
] as arrProps[]

export const electricityCars = [
  {
    city_mpg: 81,
    class: 'midsize station wagon',
    combination_mpg: 85,
    fuel_type: 'electricity',
    highway_mpg: 91,
    make: 'nissan',
    model: 'altra ev',
    year: 2000,
  },
  {
    city_mpg: 81,
    class: 'sport utility vehicle',
    combination_mpg: 72,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 64,
    make: 'toyota',
    model: 'rav4 ev',
    year: 2000,
  },
  {
    city_mpg: 81,
    class: 'sport utility vehicle',
    combination_mpg: 72,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 64,
    make: 'toyota',
    model: 'rav4 ev',
    year: 2001,
  },
  {
    city_mpg: 74,
    class: 'two seater',
    combination_mpg: 65,
    fuel_type: 'electricity',
    highway_mpg: 58,
    make: 'ford',
    model: 'th!nk',
    year: 2001,
  },
  {
    city_mpg: 45,
    class: 'sport utility vehicle',
    combination_mpg: 39,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 33,
    make: 'ford',
    model: 'explorer usps electric',
    year: 2001,
  },
  {
    city_mpg: 84,
    class: 'two seater',
    combination_mpg: 75,
    fuel_type: 'electricity',
    highway_mpg: 66,
    make: 'nissan',
    model: 'hyper-mini',
    year: 2001,
  },
  {
    city_mpg: 87,
    class: 'sport utility vehicle',
    combination_mpg: 78,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 69,
    make: 'toyota',
    model: 'rav4 ev',
    year: 2002,
  },
  {
    city_mpg: 45,
    class: 'sport utility vehicle',
    combination_mpg: 39,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 33,
    make: 'ford',
    model: 'explorer usps electric',
    year: 2002,
  },
  {
    city_mpg: 87,
    class: 'sport utility vehicle',
    combination_mpg: 78,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 69,
    make: 'toyota',
    model: 'rav4 ev',
    year: 2003,
  },
  {
    city_mpg: 62,
    class: 'standard pickup truck',
    combination_mpg: 58,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 54,
    make: 'ford',
    model: 'ranger pickup 2wd',
    transmission: 'a',
    year: 2001,
  },
  {
    city_mpg: 62,
    class: 'standard pickup truck',
    combination_mpg: 58,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 54,
    make: 'ford',
    model: 'ranger pickup 2wd',
    transmission: 'a',
    year: 2000,
  },
  {
    city_mpg: 59,
    class: 'standard pickup truck',
    combination_mpg: 56,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 52,
    make: 'ford',
    model: 'ranger pickup 2wd',
    transmission: 'a',
    year: 2000,
  },
  {
    city_mpg: 79,
    class: 'two seater',
    combination_mpg: 85,
    fuel_type: 'electricity',
    highway_mpg: 94,
    make: 'gmc',
    model: 'ev1',
    transmission: 'a',
    year: 1999,
  },
  {
    city_mpg: 35,
    class: 'two seater',
    combination_mpg: 37,
    fuel_type: 'electricity',
    highway_mpg: 39,
    make: 'gmc',
    model: 'ev1',
    transmission: 'a',
    year: 1999,
  },
  {
    city_mpg: 49,
    class: 'compact car',
    combination_mpg: 48,
    fuel_type: 'electricity',
    highway_mpg: 46,
    make: 'honda',
    model: 'ev plus',
    transmission: 'a',
    year: 1999,
  },
  {
    city_mpg: 62,
    class: 'standard pickup truck',
    combination_mpg: 58,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 54,
    make: 'ford',
    model: 'ranger pickup 2wd',
    transmission: 'a',
    year: 1999,
  },
  {
    city_mpg: 50,
    class: 'standard pickup truck',
    combination_mpg: 47,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 44,
    make: 'ford',
    model: 'ranger pickup 2wd',
    transmission: 'a',
    year: 1999,
  },
  {
    city_mpg: 37,
    class: 'minivan',
    combination_mpg: 35,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 33,
    make: 'dodge',
    model: 'caravan/grand caravan 2wd',
    transmission: 'a',
    year: 1999,
  },
  {
    city_mpg: 37,
    class: 'minivan',
    combination_mpg: 35,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 33,
    make: 'plymouth',
    model: 'voyager/grand voyager 2wd',
    transmission: 'a',
    year: 1999,
  },
  {
    city_mpg: 49,
    class: 'compact car',
    combination_mpg: 48,
    fuel_type: 'electricity',
    highway_mpg: 46,
    make: 'honda',
    model: 'ev plus',
    transmission: 'a',
    year: 1998,
  },
  {
    city_mpg: 52,
    class: 'small pickup truck',
    combination_mpg: 55,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 58,
    make: 'chevrolet',
    model: 's10 electric',
    transmission: 'a',
    year: 1998,
  },
  {
    city_mpg: 28,
    class: 'small pickup truck',
    combination_mpg: 28,
    drive: '2wd',
    fuel_type: 'electricity',
    highway_mpg: 28,
    make: 'chevrolet',
    model: 's10 electric',
    transmission: 'a',
    year: 1998,
  },
  {
    city_mpg: 102,
    class: 'minicompact car',
    combination_mpg: 98,
    fuel_type: 'electricity',
    highway_mpg: 94,
    make: 'mini',
    model: 'minie',
    transmission: 'a',
    year: 2008,
  },
  {
    city_mpg: 106,
    class: 'midsize car',
    combination_mpg: 99,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 92,
    make: 'nissan',
    model: 'leaf',
    transmission: 'a',
    year: 2011,
  },
  {
    city_mpg: 94,
    class: 'two seater',
    combination_mpg: 87,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 79,
    make: 'smart',
    model: 'fortwo electric drive cabriolet',
    transmission: 'a',
    year: 2011,
  },
  {
    city_mpg: 94,
    class: 'two seater',
    combination_mpg: 87,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 79,
    make: 'smart',
    model: 'fortwo electric drive coupe',
    transmission: 'a',
    year: 2011,
  },
  {
    city_mpg: 126,
    class: 'subcompact car',
    combination_mpg: 112,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 99,
    make: 'mitsubishi',
    model: 'i-miev',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 62,
    class: 'special purpose vehicle',
    combination_mpg: 62,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 62,
    make: 'azure dynamics',
    model: 'transit connect electric van',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 62,
    class: 'special purpose vehicle',
    combination_mpg: 62,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 62,
    make: 'azure dynamics',
    model: 'transit connect electric wagon',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 106,
    class: 'midsize car',
    combination_mpg: 99,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 92,
    make: 'nissan',
    model: 'leaf',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 107,
    class: 'subcompact car',
    combination_mpg: 102,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 96,
    make: 'bmw',
    model: 'active e',
    transmission: 'a',
    year: 2011,
  },
  {
    city_mpg: 77,
    class: 'subcompact car',
    combination_mpg: 73,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 68,
    make: 'coda automotive',
    model: 'coda',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 110,
    class: 'compact car',
    combination_mpg: 105,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 99,
    make: 'ford',
    model: 'focus electric',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 88,
    class: 'large car',
    combination_mpg: 89,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 90,
    make: 'tesla',
    model: 'model s',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 110,
    class: 'compact car',
    combination_mpg: 105,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 99,
    make: 'ford',
    model: 'focus electric',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 132,
    class: 'small station wagon',
    combination_mpg: 118,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 105,
    make: 'honda',
    model: 'fit ev',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 122,
    class: 'two seater',
    combination_mpg: 107,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 93,
    make: 'smart',
    model: 'fortwo electric drive convertible',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 122,
    class: 'two seater',
    combination_mpg: 107,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 93,
    make: 'smart',
    model: 'fortwo electric drive coupe',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 138,
    class: 'minicompact car',
    combination_mpg: 121,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 105,
    make: 'scion',
    model: 'iq ev',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 78,
    class: 'sport utility vehicle',
    combination_mpg: 76,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 74,
    make: 'toyota',
    model: 'rav4 ev',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 77,
    class: 'subcompact car',
    combination_mpg: 73,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 68,
    make: 'coda automotive',
    model: 'coda',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 126,
    class: 'subcompact car',
    combination_mpg: 112,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 99,
    make: 'mitsubishi',
    model: 'i-miev',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 94,
    class: 'large car',
    combination_mpg: 95,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 97,
    make: 'tesla',
    model: 'model s (60 kw-hr battery pack)',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 88,
    class: 'large car',
    combination_mpg: 89,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 90,
    make: 'tesla',
    model: 'model s (85 kw-hr battery pack)',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 60,
    class: 'sport utility vehicle',
    combination_mpg: 62,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 64,
    make: 'byd',
    model: 'e6',
    transmission: 'a',
    year: 2012,
  },
  {
    city_mpg: 122,
    class: 'minicompact car',
    combination_mpg: 116,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 108,
    make: 'fiat',
    model: '500e',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 78,
    class: 'small sport utility vehicle',
    combination_mpg: 76,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 74,
    make: 'toyota',
    model: 'rav4 ev',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 129,
    class: 'midsize car',
    combination_mpg: 115,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 102,
    make: 'nissan',
    model: 'leaf',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 93,
    class: 'large car',
    combination_mpg: 94,
    drive: 'rwd',
    fuel_type: 'electricity',
    highway_mpg: 96,
    make: 'tesla',
    model: 'model s (40 kw-hr battery pack)',
    transmission: 'a',
    year: 2013,
  },
  {
    city_mpg: 128,
    class: 'subcompact car',
    combination_mpg: 119,
    drive: 'fwd',
    fuel_type: 'electricity',
    highway_mpg: 109,
    make: 'chevrolet',
    model: 'spark ev',
    transmission: 'a',
    year: 2014,
  },
] as arrProps[]
