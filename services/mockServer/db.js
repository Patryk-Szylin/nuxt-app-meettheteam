var mockData = {
    "sys": {
        "type": "Array"
    },
    "total": 2,
    "skip": 0,
    "limit": 100,
    "items": [
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "05dm8wov7m1i"
                    }
                },
                "id": "3ev1OJKkkzVYAX2mVWoT8",
                "type": "Entry",
                "createdAt": "2019-06-28T13:26:45.477Z",
                "updatedAt": "2019-06-28T13:26:45.477Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "jobs"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "jobName": "Javascript Developer",
                "jobLocation": {
                    "lon": -1.3089035000000422,
                    "lat": 54.563419
                },
                "startDate": "2019-07-02T00:00+01:00"
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "05dm8wov7m1i"
                    }
                },
                "id": "571hEOC5ITyZywlSXr04Bb",
                "type": "Entry",
                "createdAt": "2019-06-28T13:26:24.265Z",
                "updatedAt": "2019-06-28T13:26:24.265Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "jobs"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "jobName": ".NET Web Developer",
                "jobLocation": {
                    "lon": -1.3089035000000422,
                    "lat": 54.563419
                },
                "startDate": "2019-07-02T00:00+01:00"
            }
        }
    ]
}

module.exports = {
    mockData
}