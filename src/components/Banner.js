import Button from "./Button"

function Banner(props) {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <div className="banner-btns">
                        <Button text="Shop" isPrimary={true} />
                        <Button text="2022 Recap" isPrimary={false} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner