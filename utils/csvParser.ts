import { MarkerData, MarkerType } from '../types';

export const parseCSV = (csvText: string): MarkerData[] => {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',');
  
  const data: MarkerData[] = [];

  for (let i = 1; i < lines.length; i++) {
    // Handle quotes in CSV roughly (for description)
    // This is a simple parser, meant for the controlled mock data
    const rowString = lines[i];
    let row: string[] = [];
    let insideQuote = false;
    let currentCell = '';
    
    for (const char of rowString) {
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === ',' && !insideQuote) {
        row.push(currentCell.trim());
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
    row.push(currentCell.trim());

    if (row.length < headers.length) continue;

    const [id, typeStr, title, country, lat, lng, description, imageUrl, link] = row;

    // Validate type
    const type = Object.values(MarkerType).includes(typeStr as MarkerType) 
      ? (typeStr as MarkerType) 
      : MarkerType.Projects;

    data.push({
      id,
      type,
      title,
      country,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      description: description.replace(/^"|"$/g, ''), // Remove wrapping quotes if any persisted
      imageUrl,
      link
    });
  }
  return data;
};
