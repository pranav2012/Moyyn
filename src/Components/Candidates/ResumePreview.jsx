import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	img: {
		width: "90vh",
		height: "90vh",
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
			<embed title="CV Preview" src={src} className={custom.img} />
		</Backdrop>
	);
};

export default ResumePreview;
