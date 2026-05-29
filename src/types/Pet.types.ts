// respeusta backend

export interface PetData{
	id: number,
	name: string,
	high: DoubleRange,
	weight: DoubleRange,
	species: string,
	breed: string,
	image?: string | null
    owner: {
		id: string | undefined
	},
}

export interface PetForm extends Omit<PetData, 'image'>{
  image?: FileList; 
}