import { MarkerType } from './types';
import { User, Building2, Sprout, Flag, FileText } from 'lucide-react';

// Color palette matching the dark theme spec
export const TYPE_COLORS: Record<MarkerType, string> = {
  [MarkerType.Ambassadors]: '#f97316', // Orange-500
  [MarkerType.Centers]: '#3b82f6',     // Blue-500
  [MarkerType.Projects]: '#22c55e',    // Green-500
  [MarkerType.Pledges]: '#a855f7',     // Purple-500
  [MarkerType.Resolutions]: '#ef4444', // Red-500
};

export const TYPE_ICONS: Record<MarkerType, any> = {
  [MarkerType.Ambassadors]: User,
  [MarkerType.Centers]: Building2,
  [MarkerType.Projects]: Sprout,
  [MarkerType.Pledges]: Flag,
  [MarkerType.Resolutions]: FileText,
};

// Realistic mock CSV data
export const MOCK_CSV_DATA = `id,type,title,country,lat,lng,description,imageUrl,link
1,Ambassadors,Dr. Elena Rossi,Italy,41.9028,12.4964,"Leading advocate for marine conservation in the Mediterranean, focusing on sustainable fishing practices.",https://picsum.photos/400/250?random=1,https://example.com/elena
2,Projects,Lagos Ocean Restoration,Nigeria,6.5244,3.3792,"A marine permaculture project to restore ocean ecosystems off the coast of Lagos using artificial reefs.",https://picsum.photos/400/250?random=2,https://example.com/lagos
3,Centers,Pacific Research Hub,Fiji,-17.7134,178.0650,"State-of-the-art facility dedicated to studying coral bleaching and reef resilience strategies.",https://picsum.photos/400/250?random=3,https://example.com/fiji
4,Pledges,Corporate Net Zero 2030,USA,40.7128,-74.0060,"Global tech conglomerate commits to 100% renewable energy and net-zero emissions by 2030.",https://picsum.photos/400/250?random=4,https://example.com/netzero
5,Resolutions,Plastic Ban Treaty,Kenya,-1.2921,36.8219,"International agreement signed in Nairobi to legally bind nations to reduce plastic production.",https://picsum.photos/400/250?random=5,https://example.com/treaty
6,Ambassadors,Kenji Tanaka,Japan,35.6762,139.6503,"Promoting urban green spaces and vertical farming integration in Tokyo's metropolitan area.",https://picsum.photos/400/250?random=6,https://example.com/kenji
7,Projects,Amazon Reforestation Initiative,Brazil,-3.4653,-62.2159,"Large-scale replanting effort focusing on indigenous tree species in the deforested zones.",https://picsum.photos/400/250?random=7,https://example.com/amazon
8,Centers,Nordic Sustainability Lab,Sweden,59.3293,18.0686,"Innovation center developing biodegradable packaging alternatives from wood fibers.",https://picsum.photos/400/250?random=8,https://example.com/nordic
9,Pledges,Clean Water Commitment,India,28.6139,77.2090,"National pledge to provide clean, piped water to 100% of rural households by 2025.",https://picsum.photos/400/250?random=9,https://example.com/water
10,Resolutions,Carbon Tax Framework,Belgium,50.8503,4.3517,"EU-wide resolution implementing a new progressive carbon pricing mechanism for heavy industry.",https://picsum.photos/400/250?random=10,https://example.com/carbon
11,Ambassadors,Sarah O'Connor,Australia,-33.8688,151.2093,"Championing Great Barrier Reef protection and sustainable tourism policies.",https://picsum.photos/400/250?random=11,https://example.com/sarah
12,Projects,Sahara Solar Farm,Morocco,31.7917,-7.0926,"One of the world's largest concentrated solar power plants supplying energy to North Africa.",https://picsum.photos/400/250?random=12,https://example.com/solar
13,Centers,Arctic Climate Observatory,Greenland,71.7069,-42.6043,"Monitoring ice sheet melting rates and atmospheric changes in the high Arctic.",https://picsum.photos/400/250?random=13,https://example.com/arctic
14,Pledges,EV Transition Pact,Germany,52.5200,13.4050,"Automotive alliance pledging to phase out internal combustion engine production by 2035.",https://picsum.photos/400/250?random=14,https://example.com/ev
15,Resolutions,Biodiversity Accord,Canada,45.4215,-75.6972,"Global treaty targeting the protection of 30% of land and sea areas by 2030.",https://picsum.photos/400/250?random=15,https://example.com/bio
16,Ambassadors,Maria Gonzalez,Mexico,19.4326,-99.1332,"Activist focused on indigenous rights and forest preservation in Latin America.",https://picsum.photos/400/250?random=16,https://example.com/maria
17,Projects,Urban Bee Sanctuary,UK,51.5074,-0.1278,"Network of rooftop gardens across London designed to support pollinator populations.",https://picsum.photos/400/250?random=17,https://example.com/bees
18,Centers,Singapore Water Hub,Singapore,1.3521,103.8198,"Leading research into desalination and water recycling technologies for urban resilience.",https://picsum.photos/400/250?random=18,https://example.com/sgwater
19,Pledges,Deforestation-Free Supply Chain,Indonesia,-6.2088,106.8456,"Major palm oil producers commit to zero-deforestation policies and satellite monitoring.",https://picsum.photos/400/250?random=19,https://example.com/palm
20,Resolutions,Ocean Mining Moratorium,New Zealand,-41.2865,174.7762,"Legislative ban on seabed mining permits within the exclusive economic zone.",https://picsum.photos/400/250?random=20,https://example.com/mining
21,Projects,Mangrove Wall,Vietnam,10.8231,106.6297,"Coastal defense project planting millions of mangroves to protect against typhoons.",https://picsum.photos/400/250?random=21,https://example.com/mangrove
22,Ambassadors,Kwame Nkrumah Jr.,Ghana,5.6037,-0.1870,"Tech entrepreneur promoting e-waste recycling and circular economy in West Africa.",https://picsum.photos/400/250?random=22,https://example.com/kwame
23,Centers,Andean Glaciology Institute,Peru,-12.0464,-77.0428,"Studying the impact of climate change on tropical glaciers and water resources.",https://picsum.photos/400/250?random=23,https://example.com/andes
24,Pledges,Green Shipping Corridor,China,31.2304,121.4737,"Commitment to create a zero-emission shipping route between Shanghai and Los Angeles.",https://picsum.photos/400/250?random=24,https://example.com/shipping
25,Resolutions,Right to Repair Law,France,48.8566,2.3522,"Legislation requiring electronics manufacturers to provide repair manuals and spare parts.",https://picsum.photos/400/250?random=25,https://example.com/repair
`;
