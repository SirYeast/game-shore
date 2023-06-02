function Gallery(props) {
    return (
        <section className="gallery">
            <h2>Highly Anticipated</h2>
            <div className="gallery-items">
                {props.images.map((url, index) => (
                    <img key={index} src={url}></img>
                ))}
            </div>
        </section>
    )
}

export default Gallery