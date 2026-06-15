import type { ImageKey } from './images';

export type GalleryCategory =
  | 'all'
  | 'interiors'
  | 'exteriors'
  | 'paint-correction'
  | 'ceramic-coating'
  | 'wheels'
  | 'boats-rvs';

export interface GalleryItem {
  image: ImageKey;
  label: string;
  category: Exclude<GalleryCategory, 'all'>;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { image: 'dashWiping', label: 'Interior Detail', category: 'interiors', alt: 'Detailer wiping dashboard during interior detail' },
  { image: 'interiorClean', label: 'Interior Detail', category: 'interiors', alt: 'Clean vehicle interior after detailing' },
  { image: 'interiorSteamCleaning', label: 'Interior Detail', category: 'interiors', alt: 'Steam cleaning vehicle interior surfaces' },
  { image: 'interiorVacuuming', label: 'Interior Detail', category: 'interiors', alt: 'Vacuuming vehicle interior' },
  { image: 'suvInteriorClean', label: 'Interior Detail', category: 'interiors', alt: 'Clean SUV interior after deep clean' },
  { image: 'upholsteryExtraction', label: 'Interior Detail', category: 'interiors', alt: 'Upholstery extraction during interior detail' },
  { image: 'foam', label: 'Exterior Detail', category: 'exteriors', alt: 'Foam wash on vehicle exterior' },
  { image: 'drying', label: 'Exterior Detail', category: 'exteriors', alt: 'Drying vehicle after wash' },
  { image: 'pressureWash', label: 'Exterior Detail', category: 'exteriors', alt: 'Pressure washing vehicle' },
  { image: 'washMitt', label: 'Exterior Detail', category: 'exteriors', alt: 'Hand washing with wash mitt' },
  { image: 'blackClean', label: 'Exterior Detail', category: 'exteriors', alt: 'Clean black vehicle exterior' },
  { image: 'cleanTruck', label: 'Exterior Detail', category: 'exteriors', alt: 'Clean truck after detailing' },
  { image: 'suvClean', label: 'Exterior Detail', category: 'exteriors', alt: 'Clean SUV exterior' },
  { image: 'inspectionLight', label: 'Paint Correction', category: 'paint-correction', alt: 'Paint inspection under specialized lighting' },
  { image: 'paintBad', label: 'Paint Correction', category: 'paint-correction', alt: 'Paint with swirls and haze before correction' },
  { image: 'paintCloseUp', label: 'Paint Correction', category: 'paint-correction', alt: 'Close-up of corrected paint finish' },
  { image: 'paintGood', label: 'Paint Correction', category: 'paint-correction', alt: 'Restored glossy paint after correction' },
  { image: 'polishCloseup', label: 'Paint Correction', category: 'paint-correction', alt: 'Machine polishing close-up' },
  { image: 'polish', label: 'Paint Correction', category: 'paint-correction', alt: 'Machine polishing vehicle paint' },
  { image: 'ceramicCoatingCloseUpApplication', label: 'Ceramic Coating', category: 'ceramic-coating', alt: 'Ceramic coating application close-up' },
  { image: 'ceramicCoatingReflection', label: 'Ceramic Coating', category: 'ceramic-coating', alt: 'Glossy ceramic-coated paint reflection' },
  { image: 'ceramicCoatingApplicator', label: 'Ceramic Coating', category: 'ceramic-coating', alt: 'Applying ceramic coating with applicator' },
  { image: 'ceramicCoatingWaterBeading', label: 'Ceramic Coating', category: 'ceramic-coating', alt: 'Water beading on ceramic coated surface' },
  { image: 'waterBeading', label: 'Ceramic Coating', category: 'ceramic-coating', alt: 'Water beading on protected paint' },
  { image: 'wheelBrakeDust', label: 'Wheel Detail', category: 'wheels', alt: 'Wheel with brake dust buildup' },
  { image: 'wheelBrush', label: 'Wheel Detail', category: 'wheels', alt: 'Cleaning wheel with brush' },
  { image: 'wheelClean', label: 'Wheel Detail', category: 'wheels', alt: 'Clean detailed wheel' },
  { image: 'wheelDetailBrush', label: 'Wheel Detail', category: 'wheels', alt: 'Detail brush cleaning wheel' },
  { image: 'wheelDirty', label: 'Wheel Detail', category: 'wheels', alt: 'Dirty wheel before detailing' },
  { image: 'wheelDressing', label: 'Wheel Detail', category: 'wheels', alt: 'Applying tire dressing' },
  { image: 'wheelGlossy', label: 'Wheel Detail', category: 'wheels', alt: 'Glossy finished wheel and tire' },
  { image: 'cleanBoat', label: 'Boat Detail', category: 'boats-rvs', alt: 'Clean detailed boat' },
  { image: 'cleanRv', label: 'RV Detail', category: 'boats-rvs', alt: 'Clean detailed RV' },
];

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'exteriors', label: 'Exteriors' },
  { id: 'paint-correction', label: 'Paint Correction' },
  { id: 'ceramic-coating', label: 'Ceramic Coating' },
  { id: 'wheels', label: 'Wheels' },
  { id: 'boats-rvs', label: 'Boats & RVs' },
];
