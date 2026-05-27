export interface ServiceType {
    id: number,
    name: string,
    description: string,
    durationMinutes: number,
    basePrice: number,
    requiredSpecialistType: {
        id: number,
        name: string,
    }
}