import type { Mixer } from '@/types/Mixer';

export const mixers: Mixer[] = [
    {
        id: 1,
        name: "Professional Series Mixer",
        description: "Premium stainless steel construction with ceramic disc technology",
        price: 299.99,
        style: "Traditional",
        mount: "Deck Mount",
        category: "Kitchen",
        family: "Arezzo",
        spoutShape: "Circular",
        features: ["360° Swivel", "Ceramic Disc Cartridge", "Spot-resistant Finish"],
        images: [
          {
            src: "/mixers/pro-series.jpg",
            alt: "Front view of Professional Series Mixer"
          },
          {
            src: "/mixers/pro-series-side.jpg",
            alt: "Side view of Professional Series Mixer"
          },
          {
            src: "/mixers/pro-series-detail.jpg",
            alt: "Detail view of Professional Series Mixer"
          }
        ]
    },
    {
        id: 2,
        name: "Pull-Down Spray Mixer",
        description: "Modern design with flexible spray head and multiple spray modes",
        price: 249.99,
        style: "Pull-Down",
        mount: "Deck Mount",
        category: "Kitchen",
        family: "Novara",
        spoutShape: "Rectangular Swivel",
        features: ["Dual Spray Mode", "Extended Reach", "Easy-Clean Nozzle"],
        images: [
          {
            src: "/kitchen/VK19062.jpg",
            alt: "Front view of Pull-Down Spray Mixer"
          },
          {
            src: "/kitchen/VK19062-2.jpg",
            alt: "Side view of Pull-Down Spray Mixer"
          }
        ]
    },
    {
        id: 3,
        name: "Smart Touch Mixer",
        description: "Touch-activated operation with temperature memory",
        price: 399.99,
        style: "Modern",
        mount: "Wall Mount",
        category: "Kitchen",
        family: "Tecno",
        spoutShape: "Square",
        features: ["Touch Control", "Temperature Memory", "LED Indicator"],
        images: [
          {
            src: "/mixers/smart-touch.jpg",
            alt: "Smart Touch Mixer"
          }
        ]
    },
    {
        id: 4,
        name: "Novara Minimal",
        description: "Sleek wall-mounted design perfect for modern bathrooms",
        price: 449.99,
        style: "Contemporary",
        mount: "Wall Mount",
        category: "Bathroom",
        family: "Novara",
        spoutShape: "Rectangular",
        features: ["Hidden Aerator", "PVD Coating", "Water Saving Technology", "Extended Spout"],
        images: [
          {
            src: "/mixers/novara-minimal.jpg",
            alt: "Novara Minimal Wall Mounted Mixer"
          },
          {
            src: "/mixers/novara-minimal-side.jpg",
            alt: "Side view of Novara Minimal Mixer"
          }
        ]
    },
    {
        id: 5,
        name: "Arezzo Classic",
        description: "Traditional design with modern functionality for kitchen installations",
        price: 329.99,
        style: "Classic",
        mount: "Deck Mount",
        category: "Kitchen",
        family: "Arezzo",
        spoutShape: "Gooseneck",
        features: ["Vintage Finish", "Dual-flow Mode", "Ceramic Disc Valves", "Quick-Install System"],
        images: [
          {
            src: "/mixers/arezzo-classic.jpg",
            alt: "Arezzo Classic Kitchen Mixer"
          }
        ]
    },
    {
        id: 6,
        name: "Tecno Wave",
        description: "Sensor-activated touchless operation with precision temperature control",
        price: 599.99,
        style: "Modern",
        mount: "Deck Mount",
        category: "Bathroom",
        family: "Tecno",
        spoutShape: "Wave",
        features: ["Motion Sensor", "Temperature Display", "Anti-scald Protection", "Battery/Mains Power"],
        images: [
          {
            src: "/mixers/tecno-wave.jpg",
            alt: "Tecno Wave Touchless Mixer"
          },
          {
            src: "/mixers/tecno-wave-detail.jpg",
            alt: "Detail of Tecno Wave sensors"
          }
        ]
    },
    {
        id: 7,
        name: "Andria VB15010 Basin Mixer",
        description: "Contemporary basin mixer with sleek chrome finish",
        price: 279.99,
        style: "Contemporary",
        mount: "Deck Mount",
        category: "Bathroom",
        family: "Andria",
        spoutShape: "Angular",
        features: ["QuickFix Installation", "Ceramic Disc Technology", "Chrome Finish", "Water Saving"],
        images: [
            {
                src: "/Andria/VB 15010 (2).jpg",
                alt: "Andria VB15010 Basin Mixer Front View"
            },
            {
                src: "/Andria/VB 15010 (3).jpg",
                alt: "Andria VB15010 Basin Mixer Side View"
            },
            {
                src: "/Andria/VB 15010 (4).jpg",
                alt: "Andria VB15010 Basin Mixer Detail View"
            },
            {
                src: "/Andria/VB 15010 (5).jpg",
                alt: "Andria VB15010 Basin Mixer Installation View"
            }
        ]
    },
    {
        id: 8,
        name: "Andria VB15095 Tall Basin Mixer",
        description: "Extended height basin mixer perfect for vessel basins",
        price: 349.99,
        style: "Modern",
        mount: "Deck Mount",
        category: "Bathroom",
        family: "Andria",
        spoutShape: "High Arc",
        features: ["Extended Height", "Ceramic Cartridge", "Easy Installation", "Premium Finish"],
        images: [
            {
                src: "/Andria/VB 15095 (1).jpg",
                alt: "Andria VB15095 Tall Basin Mixer Main View"
            },
            {
                src: "/Andria/VB 15095 (2).jpg",
                alt: "Andria VB15095 Tall Basin Mixer Side Angle"
            },
            {
                src: "/Andria/VB 15095 (3).jpg",
                alt: "Andria VB15095 Tall Basin Mixer Detail"
            },
            {
                src: "/Andria/VB 15095 (4).jpg",
                alt: "Andria VB15095 Tall Basin Mixer Side View"
            }
        ]
    },
    {
        id: 9,
        name: "Andria VK15060 Kitchen Mixer",
        description: "Professional kitchen mixer with ergonomic design",
        price: 399.99,
        style: "Professional",
        mount: "Deck Mount",
        category: "Kitchen",
        family: "Andria",
        spoutShape: "Gooseneck",
        features: ["360° Rotation", "Dual Flow", "Easy-Clean Nozzle", "Spot-Resistant Finish"],
        images: [
            {
                src: "/Andria/VK 15060 (1).jpg",
                alt: "Andria VK15060 Kitchen Mixer Front View"
            },
            {
                src: "/Andria/VK 15060 (2).jpg",
                alt: "Andria VK15060 Kitchen Mixer Side View"
            }
        ]
    },
    {
        id: 10,
        name: "Andria VT15021 Bath Mixer",
        description: "Wall-mounted bath mixer with modern aesthetics",
        price: 449.99,
        style: "Modern",
        mount: "Wall Mount",
        category: "Bathroom",
        family: "Andria",
        spoutShape: "Straight",
        features: ["Concealed Installation", "Temperature Control", "Diverter Function", "High Flow Rate"],
        images: [
            {
                src: "/Andria/VT 15021 (1).jpg",
                alt: "Andria VT15021 Bath Mixer Main View"
            },
            {
                src: "/Andria/VT 15021 (2).jpg",
                alt: "Andria VT15021 Bath Mixer Side View"
            },
            {
                src: "/Andria/VT 15021 (3).jpg",
                alt: "Andria VT15021 Bath Mixer Detail"
            },
            {
                src: "/Andria/VT 15021 (4).jpg",
                alt: "Andria VT15021 Bath Mixer Installation"
            },
            {
                src: "/Andria/VT 15021 (5).jpg",
                alt: "Andria VT15021 Bath Mixer Components"
            }
        ]
    }
];