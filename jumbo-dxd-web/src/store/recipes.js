import db from './db';
import { collection, query, orderBy, startAt, limit, getDocs } from "firebase/firestore";

// Construct a new query starting at this document,
// get the next 25 recipes.
export const getRecipes = async (pageNumber = 1) => {
    let data = [];
    const q = query(collection(db, "recipes"),
        orderBy("updatedAt"),
        startAt(pageNumber * 25),
        limit(25));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
        const docData = doc.data();
        if (docData) data.push(docData);
    });
    return data;
};

