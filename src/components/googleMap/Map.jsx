import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
	<div
		style={{
			color: "white",
			background: "grey",
			padding: "15px 10px",
			display: "inline-flex",
			textAlign: "center",
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
				text={"Current Location"}
			/>
		</GoogleMapReact>
	);
};

export default Map;
