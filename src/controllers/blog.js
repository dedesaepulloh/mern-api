exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    const result = {
        message: 'Create Blog Post Success',
        data: {
            post_id: 1,
            title: title,
            image: "image.png",
            body: body,
            created_at: "06/10/2020",
            author: {
                uid: 1,
                name: "Dede Saepulloh"
            }
        }
    }

    res.status(201).json(result);
}