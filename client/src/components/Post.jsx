function Post() {
    return(
        <div className="post">
            <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=653" alt="" />
            </div>
            <div className="display-content">
            <h2 className="title">
                Full-house battery backup coming later this year
            </h2>
            <p className="meta-data">
                <a className="author">Pratik Hande</a>
                <time>07-07-2023 8:55</time>
            </p>
            <p className="description">
                Today at its special launch event, home backup power giant EcoFlow launched a flurry of new products, including a “Whole-Home Backup Power Solution.”
            </p>
            </div>
        </div>
    )
}

export default Post;