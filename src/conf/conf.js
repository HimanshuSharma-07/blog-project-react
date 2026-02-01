const conf = {
    apiwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    apiwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apiwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    apiwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    apiwritetBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf