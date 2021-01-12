import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	img: {
		width: "80vh",
		height: "80vh",
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));

const ResumePreview = ({ open, src, close }) => {
	const custom = useStyles();

	return (
		<Backdrop className={custom.backdrop} open={open} onClick={close}>
			<iframe title="CV Preview" src={src} className={custom.img} />
		</Backdrop>
	);
};

export default ResumePreview;
