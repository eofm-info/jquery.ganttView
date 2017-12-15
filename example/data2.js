var ganttData = [
    {
        id: 1, name: "Feature 1", series: [
            { id:1, name: "Planned", start: new Date(2018,00,01), end: new Date(2018,00,03),
                milestones: [
                    {name: "milestone dia", date: new Date(2018,00,01), path: "milestone-dia.png"},
                    {name: "milestone star", date: new Date(2018,00,03), path: "milestone-star.png"}
                ]},
            { id:2, name: "Actual", start: new Date(2018,00,02), end: new Date(2018,00,05), color: "#f0f0f0",
                milestones: [
                    {name: "milestone star", date: new Date(2018,00,04), path: "milestone-star.png"}
                ]},
        ]
    },
    {
        id: 2, name: "Feature 2", series: [
            { id: 3, name: "Planned", start: new Date(2018,00,05), end: new Date(2018,00,20) },
            { id: 4, name: "Actual", start: new Date(2018,00,06), end: new Date(2018,00,17), color: "#f0f0f0" },
            { id: 5, name: "Projected", start: new Date(2018,00,06), end: new Date(2018,00,17), color: "#e0e0e0" }
        ]
    },
    {
        id: 3, name: "Feature 3", series: [
            { id: 6, name: "Planned", start: new Date(2018,00,11), end: new Date(2018,01,03) },
            { id: 7, name: "Actual", start: new Date(2018,00,15), end: new Date(2018,01,03), color: "#f0f0f0" }
        ]
    },
    {
        id: 4, name: "Feature 4", series: [
            { id: 8, name: "Planned", start: new Date(2018,01,01), end: new Date(2018,01,03) },
            { id: 9, name: "Actual", start: new Date(2018,01,01), end: new Date(2018,01,05), color: "#f0f0f0" }
        ]
    },
    {
        id: 5, name: "Feature 5", series: [
            { id: 10, name: "Planned", start: new Date(2018,02,01), end: new Date(2018,03,20) },
            { id: 11, name: "Actual", start: new Date(2018,02,01), end: new Date(2018,03,26), color: "#f0f0f0" }
        ]
    },
    {
        id: 6, name: "Feature 6", series: [
            { id: 12, name: "Planned", start: new Date(2018,00,05), end: new Date(2018,00,20) },
            { id: 13, name: "Actual", start: new Date(2018,00,06), end: new Date(2018,00,17), color: "#f0f0f0" },
            { id: 14, name: "Projected", start: new Date(2018,00,06), end: new Date(2018,00,20), color: "#e0e0e0" }
        ]
    },
    {
        id: 7, name: "Feature 7", series: [
            { id: 15, name: "Planned", start: new Date(2018,00,11), end: new Date(2018,01,03) }
        ]
    },
    {
        id: 8, name: "Feature 8", series: [
            { id: 16, name: "Planned", start: new Date(2018,01,01), end: new Date(2018,01,03) },
            { id: 17, name: "Actual", start: new Date(2018,01,01), end: new Date(2018,01,05), color: "#f0f0f0" }
        ]
    }
];
