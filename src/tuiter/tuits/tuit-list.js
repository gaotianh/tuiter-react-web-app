import React, {useEffect} from "react";
// import postsArray from './posts.json';
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(       // grab tuits and loading flag from reducer
        state => state.tuitsData)

    const dispatch = useDispatch();

    // on component load invoke find tuits thunk to fetch tuits and put them in the reducer's store so we can
    // extract them with useSelector() and renderthe tuits here
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;