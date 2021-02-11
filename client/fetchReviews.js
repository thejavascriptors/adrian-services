import {get} from 'axios';

const serverURL = location.origin;

const marshalObj = (obj) => ({
    createdAt: new Date(obj.createdat),
    foundHelpful: obj.foundhelpful,
    review: obj.review,
    stars: obj.stars,
    title: obj.title,
    username: obj.username
});
const fetchReviews = () => 
    get(serverURL + '/reviews')
        .then(resp => resp.data.map(marshalObj))
        .catch(err => {console.log(err); return []})


export default fetchReviews;