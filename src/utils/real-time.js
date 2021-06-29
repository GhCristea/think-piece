import { firestore } from "../firebase";


const getIdAndData = (doc) => ({
    id: doc.id,
    ...doc.data(),
  });
  
///Subscription -- for other use cases
export function subscribePostsChanges(onSnapshot) {
    return firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(getIdAndData);
      onSnapshot(posts);
    });
  }

  ///just push to firestore, subscription will fetch it
export async function addPostToFirestore(post) {
    return await firestore.collection("posts").add(post);
  }
  