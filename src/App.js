import "./style/reset.css";
import "./style/index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
	const images = [
		"https://images.igdb.com/igdb/image/upload/t_cover_big/co39vv.png",
		"https://images.igdb.com/igdb/image/upload/t_cover_big/co5pxn.png",
		"https://images.igdb.com/igdb/image/upload/t_cover_big/co2ei8.png",
		"https://images.igdb.com/igdb/image/upload/t_cover_big/co5w3k.png",
	];

	return (
		<>
			<Header />
			<Banner
				title="Take a seat by the shore and bask in the ocean of games"
				text="All the latest and greatest games in a single spot."/>

			<main className="container">
				<Gallery images={images} />
			</main>
			<Footer />
		</>
	);
}

export default App;