const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 3001;

const postDistributionMock = require('./mocks/postDistribution');
const postsBySchoolMock = require('./mocks/postsBySchool');
const topAuthorsMock = require('./mocks/topAuthors');

const routes = {
    postDistribution: '/api/post-distribution/',
    postsBySchool: '/api/posts-by-school/',
    topAuthors: '/api/top-authors/',
}

app.get(routes.postDistribution, (req, res) => {
    res.json(postDistributionMock);
});
app.get(routes.postsBySchool, (req, res) => {
    res.json(postsBySchoolMock);
});
app.get(routes.topAuthors, (req, res) => {
    res.json(topAuthorsMock);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});