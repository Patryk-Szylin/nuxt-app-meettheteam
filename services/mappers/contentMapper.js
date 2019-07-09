


function MapContentToResults(contentData) {
    var jobs = []
    var results = contentData.data.items;
    for (var i = 0; i < results.length; i++) {
        jobs.push(results[i].fields)
    }

    return jobs;
}

export default {
    MapContentToResults
}