export interface Animal {
  name: string,
  age: number,
  type: AnimalType,
  habitat: Habitat,
  canFly: boolean
}

export type AnimalType = 'lion' | 'dog' | 'snake' | 'geko' | 'fish' | 'shark' | 'dolphin' | 'turtle';
export const AnimalTypes = ['lion' , 'dog' , 'snake' , 'geko' , 'fish' , 'shark' , 'dolphin' , 'turtle'];

export type Habitat = 'land' | 'water' | 'both';

export const TypeHabitatMap: Record<AnimalType, Habitat> = {
  'lion' : 'land',
  'dog' : 'land',
  'snake': 'land',
  'geko': 'both',
  'fish': 'water',
  'shark': 'water',
  'dolphin': 'water',
  'turtle': 'both'
}

export const TypeCanFly = (type: AnimalType): boolean => {
  return false;
}
