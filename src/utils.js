import {firestore} from './firebase';

const getIdAndData = doc => ({
    id: doc.id,
    ...doc.data()
  })

  export async function fetchPosts(){
    const snapshot = await firestore.collection('posts').get();
    return snapshot.docs.map(getIdAndData);
  }

  export async function createPost(post){
    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();
    return getIdAndData(doc)
  }

  export async function removePost(id){
    await firestore.doc(`posts/${id}`).delete();
    return id;
  }


  ///Subscription -- for other use cases
  export  function subscribePostsChanges(onSnapshot){    
    const unsubscribe = firestore.collection('posts').onSnapshot(snapshot=>{
        const posts = snapshot.docs.map(getIdAndData);
        onSnapshot(posts);
    });
    return unsubscribe;
}


///just push to firestore, subscription will fetch it
export  function addPostToFirestore(post){
  return firestore.collection('posts').add(post);
}