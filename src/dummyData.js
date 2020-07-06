export const chart1Data = {
    chartTitle: "My Approvals",
    chartSubtitle: "this Month",
    chartData: [
        { label: 'Approved', data: 1, color: getComputedStyle(document.documentElement).getPropertyValue('--mint') },
        { label: 'Pending', data: 54, color: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color') },
        { label: 'Rejected', data: 1, color: getComputedStyle(document.documentElement).getPropertyValue('--danger-color') }
    ]
};

export const chart2Data = {
    chartTitle: "My Requests",
    chartSubtitle: "this Month",
    chartData: [
        { label: 'Approved', data: 32, color: getComputedStyle(document.documentElement).getPropertyValue('--mint') },
        { label: 'Pending', data: 44, color: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color') },
        { label: 'Rejected', data: 0, color: getComputedStyle(document.documentElement).getPropertyValue('--danger-color') }
    ]
};

export const table1Data = {
    headers: ['Request', 'Workflow', 'Requestor', 'Status', 'Approvals', 'Days in Queue', 'My Priority'],
    requests: [
        {
            name: "Ringo Test #001",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #002",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: false,
                approvedEye: false,
            },
            daysInQues: 11,
            priority: "low"
        },
        {
            name: "George Test #00asd1",
            workflow: "George Test",
            requestor: {name: "George", img: "https://i.pinimg.com/originals/87/1d/8f/871d8f36e7ab2dabeb3fe98d744b6a0c.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 1,
            priority: "high"
        },
        {
            name: "Ringo Test #004",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: false,
                approvedEye: true,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0043451",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #056a01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0a3501",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #00a3451",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #04a01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #001a1",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0zsd01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #00zcd1",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0ea01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #00hgf1",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0we01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0jk01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0ew01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0at01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #001assd",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #001vcn",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0wqr01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0kl01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0434501",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0tu01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #0e401",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        },
        {
            name: "Ringo Test #00345341",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
            priority: "nomral"
        }
    ]
}

export const table2Data = {
    headers: ['Request', 'Workflow', 'Requestor', 'Status', 'Approvals', 'Days in Queue'],
    requests: [
        {
            name: "Ringo Test #0z011",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #004se41",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #02mko801",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #006ae1",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #543kop45",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #4wqa",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #5rt5",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #45nht6",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #9tyou",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #rty9",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #87jt67",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #7ew7",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #767v8",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #7ew68",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #8ze76",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #06mu7801",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #6we7",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #345cbvn478",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #3ew44534",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #34rew5",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #34sd5",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #evd534",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #43we",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #43mh",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #ase345",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #53wes4",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #444ndg4",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #345ae",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #074sd501",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #43 sa",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #5d",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #430fgh01",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #qw65",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #23wer4",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #0234ter1",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
        {
            name: "Ringo Test #02as3",
            workflow: "Ringo Test",
            requestor: {name: "Ringo", img: "https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg"},
            status: "Open",
            approvals: {
                approvedCheck: true,
                approvedMag: true,
                approvedEye: false,
            },
            daysInQues: 8,
        },
    ]
}
