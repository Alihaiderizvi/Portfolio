import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
	<div
		style={{
			color: "rgb(233 207 26)",
			background: "grey",
			display: "inline-flex",
			textAlign: "center",
			fontSize: "20px",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "100%",
			transform: "translate(-50%, -50%)",
		}}
	>
		{text}
	</div>
);

const defaultProps = {
	center: { lat: 24.9483619, lng: 67.0808384 },
	zoom: 11,
};

const Map = () => {
	return (
		<GoogleMapReact
			defaultCenter={defaultProps.center}
			defaultZoom={defaultProps.zoom}
		>
			<AnyReactComponent
				lat={24.9483619}
				lng={67.0808384}
				text={<i class='fas fa-map-marker-alt'></i>}
			/>
		</GoogleMapReact>
	);
};

export default Map;
