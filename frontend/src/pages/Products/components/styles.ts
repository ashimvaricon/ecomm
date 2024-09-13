const productStyles = {
    tooltipStyles: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        background: "#caf0f8",
    },
    headerText: {
        fontWeight: "700",
        padding: "2rem",
        color: "#03045e",
    },

    productHeader: {
        margin: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    productHeaderText: {
        color: "#03045e",
        fontWeight: "600",
        display: "flex",
        gap: 2,
        justifyContent: "center",
    },
    productHeaderBox: {
        width: 80,
        height: 5,
        background: "#0077b6",
    },
    cardStyles: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
            boxShadow: 6,
        },
    },
};

export default productStyles;
