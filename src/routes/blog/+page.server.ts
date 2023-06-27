export async function load() {
    const allPostFiles = import.meta.glob('./*/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = <any>await resolver();
            const postPath = `/${path.slice(2, -9)}`;

            return {
                meta: metadata,
                path: postPath,
            };
        })
    );

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });

    return {
        posts: sortedPosts,
    };
}
